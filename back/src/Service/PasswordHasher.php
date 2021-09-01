<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class PasswordHasher
{
    private $hasherPassword;

    public function __construct(UserPasswordHasherInterface $hasherPassword)
    {
        $this->hasherPassword = $hasherPassword;
    }

    /**
     * Hash un password donné
     *
     * @param string $password
     * @return string le password hashé
     */
    public function hasher(User $user,string $password): string
    {
        return $this->hasherPassword->hashPassword($user, $password);
    }
}