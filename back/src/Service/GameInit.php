<?php

namespace App\Service;

use App\Entity\Game;
use App\Entity\Item;
use Symfony\Component\Yaml\Yaml;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpKernel\KernelInterface;

class GameInit
{
    private EntityManagerInterface $em;

    private KernelInterface $ki;

    private Security $security;

    public function __construct(EntityManagerInterface $em, KernelInterface $ki, Security $security)
    {
        $this->em = $em;
        $this->ki = $ki;
        $this->security = $security;
    }

    public function setGame($user = null)
    {
        // On instancie un nouvel objet Game
        $game = new Game();

        // Si $user est null (C'est qu'on appelle le service depuis le GameController)
        if (null === $user) {
            // On récupère le user avec le bundle Security
            $user = $this->security->getUser();
        }

        // Sinon (C'est qu'on appelle le service depuis les Fixtures)
        // On set l'entité User
        $game->setUser($user);
    
        // On set le status de la game sur 1 (en cours) et le scénario lié (représenté par une table en DB dans les futures versions)
        $game
        ->setStatus(1)
        ->setScenario(1);

        // On appelle la méthode qui permet la création et l'ajout d'items
        $this->createItems($game);

        // On retourne la game
        return $game;
    }
    
    public function parseYaml()
    {
        // On parse le fichier .yaml contenant les informations sur les objets
        $items = Yaml::parseFile( $this->ki->getProjectDir() . '/config/init/items.yaml');
        return $items;
    }

    public function createItems($game)
    {
        // On parse le fichier .yaml en appelant la méthode ->parseYaml()
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