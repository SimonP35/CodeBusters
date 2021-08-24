<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityController extends AbstractController
{
    /**
     * Si le login réussi, Symfony appelle cette méthode
     * 
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login()
    {
        
    }
}
