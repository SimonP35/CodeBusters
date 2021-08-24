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
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/game")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/create", name="api_game_create", methods="POST")
     */
    public function create(Request $request, EntityManagerInterface $em, ValidatorInterface $vi, UserRepository $ur): Response
    {
        $items = Yaml::parseFile('init/items.yaml');

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

            $newItem = new Item();

            $newItem
            ->setStatus($item['status'])
            ->setName($key);

            $em->persist($newItem);
            $game->addItem($newItem);

        }

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($game);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $em->persist($game);
        $em->flush();

        return $this->json(['items' => $items, 'game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }

    /**
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
        
        $game->setEndedAt(new DateTime());

        $start = $game->getCreatedAt();
        $end = $game->getEndedAt();
        
        $score = $end->getTimestamp() - $start->getTimestamp();

        $game
        ->setStatus(0)
        ->setScore($score);

        foreach($game->getItems() as $item) {

            $em->remove($item);
        }

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($game);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $em->flush();

        return $this->json(['game' => $game], Response::HTTP_OK, [], ['groups' => 'game_end']);
    }

    /**
     * @Route("/score", name="api_game_score", methods={"GET"})
     */
    public function score(GameRepository $gr): Response
    {
        return $this->json(['games' => $gr->findOrderByScore()], Response::HTTP_OK);
    }

}
