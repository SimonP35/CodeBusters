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
    public function login(): Response
    {
        // On renvoie les infos qu'on veut au client (front)
        die;
        // Par ex. des infos du User connecté
        $user = $this->getUser();
        dd($user);
        return $this->json([
            // On renvoie ce qu'on veut
            'email' => $user->getUserIdentifier(),
            'roles' => $user->getRoles(),
            // => à adapter selon les besoins
            'autre chose' => 'une valeur...',
        ]);
    }
}
