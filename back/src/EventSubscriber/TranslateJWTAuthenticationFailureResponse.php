<?php

namespace App\EventSubscriber;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationFailureEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationFailureResponse;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class TranslateJWTAuthenticationFailureResponse implements EventSubscriberInterface
{
    /** @var TranslatorInterface */
    private $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'lexik_jwt_authentication.on_authentication_failure' => 'onAuthenticationFailureResponse',
        ];
    }

    public function onAuthenticationFailureResponse(AuthenticationFailureEvent $event): void
    {
        /** @var JWTAuthenticationFailureResponse $response */
        $response = $event->getResponse();

        $response->setMessage(
            $this->translator->trans(
                $response->getMessage()
            )
        );
    }
}