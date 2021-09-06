<?php

namespace App\Service;

use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class GameEnd
{
    private EntityManagerInterface $em;
   
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function endGame($game, $user = null)
    {
        // On set le status de la game sur 0 (terminée)
        $game
        ->setStatus(0);

        // Si on a un user (On appelle le service depuis les fixtures)
        if ($user !== null) {
            // On le set
            $game
            ->setUser($user);  
            // On retourne la game (Calcul d'un fake score dans les fixtures)
            return $game;
        }
    
        // On appelle la méthode qui calcule le score et on le set
        $this->setScore($game);

        // On appelle la méthode qui permet la suppression d'items
        $this->removeItems($game);

        // On retourne la game
        return $game;
    }

    public function setScore($game)
    {
        // On set la fin de la partie
        $game->setEndedAt(new DateTime());

        // Calcul du score (Différence entre date de création et de mise à jour)
        $start = $game->getCreatedAt();
        $end = $game->getEndedAt();
        $score = $end->getTimestamp() - $start->getTimestamp();

        if ($score >= 1800) {
            $game
            ->setScore(0);  
        }

        // On set le score en seconde
        $game
        ->setScore($score);  
    }

    public function removeItems($game)
    {
        // On supprimes les items spécifiques à chaque partie
        foreach($game->getItems() as $key => $item) {

            $this->em->remove($item);
        }
    }
}