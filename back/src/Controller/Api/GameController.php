<?php

namespace App\Controller\Api;

use DateTime;
use App\Entity\Game;
use App\Entity\Item;
use App\Repository\GameRepository;
use Symfony\Component\Yaml\Yaml;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/game")
 */
class GameController extends AbstractController
{
    /**
     * Endpoint permettant au Front de créer une partie
     * 
     * @Route("/create", name="api_game_create", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $em, ValidatorInterface $vi, UserRepository $ur): Response
    {
        $items = Yaml::parseFile('./config/init/items.yaml');

        $jsonContent = $request->getContent();

        $user = json_decode($jsonContent, true);
        $user = $ur->find($user);

        $game = new Game();

        $game
        ->setStatus(1)
        ->setUser($user)
        ->setScenario(1);

        // On créé les items spécifiques à chaque partie
        foreach($items as $key => $item) {

            // On créé un objet Item
            $newItem = new Item();

            // On set son statut et son nom
            $newItem
            ->setStatus($item['status'])
            ->setName($key);

            // On persist, on flush
            $em->persist($newItem);
            $game->addItem($newItem);

        }

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($game);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $em->persist($game);
        $em->flush();

        // On retourne l'objet $game en JSON avec les objets ($items) de cette même partie 
        return $this->json(['items' => $items, 'game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }

    /**
     * Endpoint permettant au Front de mettre fin à une partie en cours
     * 
     * @Route("/update/{id<\d+>}", name="api_game_update", methods={"PUT","PATCH"})
     */
    public function update(Game $game = null, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        // Vérification si la game existe bien
        if (null === $game) {
            return new JsonResponse(
                ["message" => "Cette partie n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }        
        
        //! MODIFICATION À PREVOIR AFIN QUE LA DATE DE FIN SE METTE À JOUR
        //! EN PREUPDATE/POSTLOAD OU VIA UN LISTENER
        //! https://www.doctrine-project.org/projects/doctrine-orm/en/2.9/reference/events.html

        // On set la date de fin de la partie et son status 
        $game
        ->setEndedAt(new DateTime())
        ->setStatus(0);

        // Calcul du score (Différence entre date de création et de mise à jour)
        $start = $game->getCreatedAt();
        $end = $game->getEndedAt();
        $score = $end->getTimestamp() - $start->getTimestamp();

        // On set le score en seconde
        $game
        ->setScore($score);

        // Suppression des objets relatifs à une partie terminée
        foreach($game->getItems() as $item) {
            $em->remove($item);
        }

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($game);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $em->flush();

        // On retourne l'objet $game en JSON
        return $this->json(["message" => "Partie terminée ! Bravo champion !", 'game' => $game], Response::HTTP_OK, [], ['groups' => 'game_end']);
    }

    /**
     * Endpoint permettant au Front d'afficher le tableau des High Scores
     * 
     * @Route("/score", name="api_game_score", methods={"GET"})
     */
    public function score(GameRepository $gr): Response
    {
        // On renvoie les scores relatifs aux différents parties jouées trié par ordre DESC
        return $this->json(['games' => $gr->findOrderByScore()], Response::HTTP_OK);
    }

}
