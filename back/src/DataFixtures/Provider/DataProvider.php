<?php

namespace App\DataFixtures\Provider;

class DataProvider
{
    private $roles = [
        'ROLE_USER',
        'ROLE_ADMIN',
    ];

    /**
     * Retourne un role au hasard
     */
    public function roleName()
    {
        return $this->roles[array_rand($this->roles)];
    }
}