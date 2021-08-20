<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * @Route("/api")
 */
class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="api_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        // // return $this->render(//! chemin de la view à rendre, ['last_username' => $lastUsername, 'error' => $error]);
    }

    // /**
    //  * Si le login réussi, Symfony appelle cette méthode
    //  * 
    //  * @Route("/login", name="api_login", methods={"POST"})
    //  */
    // public function login(): Response
    // {
    //     // On renvoie les infos qu'on veut au client (front)

    //     // Par ex. des infos du User connecté
    //     $user = $this->getUser();

    //     dd($user);

    //     return $this->json([
    //         // On renvoie ce qu'on veut
    //         'email' => $user->getUserIdentifier(),
    //         'roles' => $user->getRoles(),
    //         // => à adapter selon les besoins
    //         'autre chose' => 'une valeur...',
    //     ]);
    // }
}
