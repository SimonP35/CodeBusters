<?php

namespace App\Controller\Api;

use DateTime;
use App\Entity\Game;
use App\Entity\Item;
use Symfony\Component\Yaml\Yaml;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/game")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/create", name="api_game_create", methods="POST")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi, UserRepository $ur): Response
    {
        $items = Yaml::parseFile('init/items.yaml');

        $jsonContent = $request->getContent();

        $user = json_decode($jsonContent, true);

        $user = $ur->find($user);

        $game = new Game();

        $game
        ->setStatus(1)
        ->setUser($user)
        ->setScenario(1);

        foreach($items as $key => $item) {

            $newItem = new Item();

            $newItem
            ->setStatus($item['status'])
            ->setName($key);

            $em->persist($newItem);
            $game->addItem($newItem);

        }

        $em->persist($game);
        $em->flush();

        return $this->json(['items' => $items, 'game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }

    /**
     * @Route("/update/{id}", name="api_game_update", methods={"PUT","PATCH"})
     */
    public function update(Game $game, Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi, UserRepository $ur): Response
    {
        $game->setEndedAt(new DateTime());

        $end = $game->getEndedAt();
        
        $score = $end->getTimestamp() - ($game->getCreatedAt())->getTimestamp();

        $game
        ->setStatus(0)
        ->setScore($score);

        foreach($game->getItems() as $item) {

            $em->remove($item);
        }

        $em->persist($game);
        $em->flush();

        return $this->json(['game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }
}
