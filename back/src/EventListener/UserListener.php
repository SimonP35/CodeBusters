<?php

namespace App\EventListener;

use App\Entity\User;
use App\Service\PasswordHasher;
use Doctrine\ORM\Event\LifecycleEventArgs;

class UserListener
{
    private $passwordHasher;

    public function __construct(PasswordHasher $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;  
    }

    public function prePersist(User $user, LifecycleEventArgs $event): void
    {
        $user = $event->getObject();
        
        if (true === property_exists($user, 'password') && $user instanceof User) 
        {
            $password = $user->getPassword();
            $user->setPassword($this->passwordHasher->hasher($password));
        }
    }

    // public function preUpdate(User $user): void
    // {
    //         $password = $user->getPassword();
    //         $user->setPassword($this->passwordHasher->hasher($user, $password)); 
    // }
}
