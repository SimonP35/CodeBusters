<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Game;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\Comment;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Provider\DataProvider;
use App\Service\GameEnd;
use App\Service\GameInit;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private GameInit $gameInit;
    private GameEnd $gameEnd;

    public function __construct(UserPasswordHasherInterface $passwordHasher, GameInit $gameInit, GameEnd $gameEnd)
    {
        $this->passwordHasher = $passwordHasher;
        $this->gameInit = $gameInit;
        $this->gameEnd = $gameEnd;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        // Notre fournisseur de données, ajouté à Faker
        $faker->addProvider(new DataProvider());

        // 2 users "en dur" : USER, ADMIN
        // mot de passe = user, admin

        $usersList = [];

        $user = new User();
        $user
        ->setEmail('user@user.com')
        // user via "bin/console security:hash-password"
        ->setPassword('user')
        ->setRoles(['ROLE_USER'])
        ->setNickname('user');

        $admin = new User();
        $admin
        ->setEmail('admin@admin.com')
        // admin via "bin/console security:hash-password"
        ->setPassword('admin')
        ->setRoles(['ROLE_ADMIN'])
        ->setNickname('admin');

        $usersList[] = $user;
        $usersList[] = $admin;

        $manager->persist($user);
        $manager->persist($admin);

        // 10 Users
        for ($i = 1; $i <= 10; $i++ ) {

            $rolesList = [];
            $rolesList[] = $faker->roleName();

            $user = new User();
            $user
            ->setEmail($faker->unique->email())
            ->setPassword($this->passwordHasher->hashPassword(
                $user, $faker->unique->password()
            ))
            ->setRoles($rolesList)
            ->setNickname($faker->unique->lastname());

            $usersList[] = $user;

            $manager->persist($user);
        }

        // 15 Games en cours
        for ($i = 1; $i <= 15; $i++ ) {

            $game = $this->gameInit->setGame($usersList[array_rand($usersList)]);

            $manager->persist($game);
        }

        $gamesList = [];

        // 15 Games terminées
        for ($i = 1; $i <= 15; $i++ ) {

            $game = new Game();

            // On appelle le service EndGame pour créer une partie terminée
            $game = $this->gameEnd->endGame($game, $usersList[array_rand($usersList)]);

            $game
            ->setScore(mt_rand(0, 1800))
            ->setScenario(1)
            ->setEndedAt($faker->dateTimeBetween('-10 years', 'now'));

            $gamesList[] = $game;

            $manager->persist($game);
        }

        // 50 Comments
        for ($i = 1; $i <= 50; $i++ ) {

            $comment = new Comment();

            $comment
            ->setContent($faker->paragraph(5))
            ->setRating(mt_rand(1, 5))
            ->setUser($usersList[array_rand($usersList)])
            ->setGame($gamesList[array_rand($gamesList)]);

            $manager->persist($comment);
        }

        $manager->flush();
    }
}
