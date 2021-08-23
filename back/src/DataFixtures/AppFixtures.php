<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Game;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\Comment;
use Symfony\Component\Yaml\Yaml;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Provider\DataProvider;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $items = Yaml::parseFile('./public/init/items.yaml');

        // Notre fournisseur de données, ajouté à Faker
        $faker->addProvider(new DataProvider());

        // 2 users "en dur" : USER, ADMIN
        // mot de passe = user, admin

        $usersList = [];

        $user = new User();
        $user
        ->setEmail('user@user.com')
        // user via "bin/console security:hash-password"
        ->setPassword('$2y$13$zc9R3kF0dAbLkaTmM0/K/.Z5OR7t1FKSmkmHMQadksxvHjdN8W1JC')
        ->setRoles(['ROLE_USER'])
        ->setNickname('user');

        $admin = new User();
        $admin
        ->setEmail('admin@admin.com')
        // admin via "bin/console security:hash-password"
        ->setPassword('$2y$13$DgyJQTjS6PDQaUROWQdzN.fAS8C9g97/q0VJ/U0Q7MGUpoRH0.13a')
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

            $game = new Game();

            $game
            ->setStatus(1)
            ->setUser($usersList[array_rand($usersList)])
            ->setScenario(1);
            // On créé les items spécifiques à chaque partie
            foreach($items as $key => $item) {

                $newItem = new Item();

                $newItem
                ->setStatus($item['status'])
                ->setName($key);

                $manager->persist($newItem);
                $game->addItem($newItem);

            }

            $manager->persist($game);
        }

        $gamesList = [];

        // 15 Games terminées
        for ($i = 1; $i <= 15; $i++ ) {

            $game = new Game();

            $game
            ->setStatus(0)
            ->setUser($usersList[array_rand($usersList)])
            ->setScore(mt_rand(0, 1800))
            ->setEndedAt($faker->dateTimeBetween('-10 years', 'now'))
            ->setScenario(1);

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
