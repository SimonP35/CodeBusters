<?php

namespace App\EventListener;

use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Serializer\SerializerInterface;

class AuthenticationSuccessListener
{
    private $serializer;

    public function __construct( SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

/**
 * @param AuthenticationSuccessEvent $event
 */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $token = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

    //     $token['user'] = array(
    //     'email' => $user->getUserIdentifier(),
    //     'roles' => $user->getRoles(),
    // );
        $user = $this->serializer->serialize($user, 'json', ['groups' => 'user']);

        $token['data'] = [
            'user' => $user,
        ];

        $event->setData($token);
    }
}