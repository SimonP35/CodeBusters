<?php

namespace App\EventListener;

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener
{
/**
 * @param AuthenticationSuccessEvent $event
 */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        // On récupère le token et l'entité User
        $token = $event->getData();
        $user = $event->getUser();

        // On vérifie que $user est bien une instance de User
        if (!$user instanceof User) {
            return;
        }

        // On ajoute le tableau "user" avec les propriétés à transmettre
        $token['user'] = array(
        'id'    => $user->getId(),
        'email' => $user->getUserIdentifier(),
        'nickname' => $user->getNickname(),
    );

        $event->setData($token);
    }
}