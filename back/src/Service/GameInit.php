<?php

namespace App\Service;

use App\Entity\Game;
use App\Entity\Item;
use Symfony\Component\Yaml\Yaml;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpKernel\KernelInterface;

class GameInit
{
    public function __construct(SerializerInterface $serializer, EntityManagerInterface $em, KernelInterface $ki, Security $security)
    {
        $this->serializer = $serializer;
        $this->em = $em;
        $this->ki = $ki;
        $this->security = $security;
    }

    public function initGame()
    {
        return $this->setGame($user);
    }

    public function parseYaml()
    {
        $items = Yaml::parseFile( $this->ki->getProjectDir() . '/config/init/items.yaml');
        return $items;
    }

    public function setGame($user)
    {
        // Si $user est bien une instance de Request (C'est qu'on appelle le service depuis le GameController)
        if ($user instanceof Security) {

            // On récupère le contenu de la requête (du JSON)
            $user = $this->security->getUser();
        
        // Sinon (C'est qu'on appelle le service depuis les Fixtures)
        } else {

            // On instancie un objet Game et on set l'entité User reçue
            $game = new Game();
            $game->setUser($user);
        }
        
        $game
        ->setStatus(1)
        ->setScenario(1);
        $this->createItems($game);
        return $game;
    }

    public function createItems($game)
    {
        $items = $this->parseYaml();

        // On créé les items spécifiques à chaque partie
        foreach($items as $key => $item) {

            // On créé un objet Item
            $newItem = new Item();

            // On set son statut et son nom
            $newItem
            ->setStatus($item['status'])
            ->setName($key);

            // On persist, on flush
            $this->em->persist($newItem);
            $game->addItem($newItem);
        }
    }
}