<?php

namespace App\Controller\Api;

use App\Entity\Game;
use App\Service\GameInit;
use App\Repository\GameRepository;
use App\Service\GameEnd;
use Doctrine\ORM\EntityManagerInterface;
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
    public function create(EntityManagerInterface $em, ValidatorInterface $vi, GameInit $gameInit): Response
    {
        // On appelle le service GameInit 
        $game = $gameInit->setGame();

        // On parse le fichier .yaml contenant les informations sur les objets
        $items = $gameInit->parseYaml();

        // On transmet l'image background de la scène du plateau
        $background = 'http://3.238.70.10/images/maquette.svg';

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

        // On retourne l'objet $game en JSON avec les objets ($items) de cette même partie et le $background (plateau de jeux)
        return $this->json(['background' => $background, 'items' => $items, 'game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }

    /**
     * Endpoint permettant au Front de mettre fin à une partie en cours
     * 
     * @Route("/update/{id<\d+>}", name="api_game_update", methods={"PUT","PATCH"})
     */
    public function update(Game $game = null, EntityManagerInterface $em, ValidatorInterface $vi, GameEnd $gameEnd): Response
    {
        // Vérification si la game existe bien
        if (null === $game) {
            return new JsonResponse(
                ["message" => "Cette partie n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }        
    
        // On appelle le service EndGame pour terminer la partie
        $game = $gameEnd->endGame($game);

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($game);

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
