<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ItemController extends AbstractController
{
    /**
     * @Route("/api/item", name="api_item")
     */
    public function index(): Response
    {
        return $this->render('api/item/index.html.twig', [
            'controller_name' => 'ItemController',
        ]);
    }
}
