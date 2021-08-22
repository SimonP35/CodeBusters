<?php

namespace App\Controller\Back;

use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/game")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/score", name="back_score_list", methods={"GET"})
     */
    public function score(GameRepository $gr): Response
    {
        return $this->render('back/game/score.html.twig', [
            'games' => $gr->findOrderByScore(),
        ]);
    }
}
