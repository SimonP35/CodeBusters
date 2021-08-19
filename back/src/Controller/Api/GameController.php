<?php

namespace App\Controller\Api;

use DateTime;
use DateInterval;
use App\Entity\Game;
use App\Entity\Item;
use App\Entity\Comment;
use App\Form\CommentType;
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

        // dd($items);

        $jsonContent = $request->getContent();

        // dd($jsonContent);

        $user = json_decode($jsonContent, true);

        // dd($userId);

        $user = $ur->find($user);

        // dd($user);

        $game = new Game();

        $game
        ->setStatus(1)
        ->setUser($user)
        ->setScenario(1);

        // dd($game);

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
        // $jsonContent = $request->getContent();

        // $score = json_decode($jsonContent, true);

        $game->setEndedAt(new DateTime());

        $end = $game->getEndedAt();

        // dd($end);
        
        $score = $end->diff($game->getCreatedAt());

        // dd($score);

        $game
        ->setStatus(0)
        ->setScore($score);

        dd($game);

        foreach($game->getItems() as $item) {

            $em->remove($item);
        }

        $em->persist($game);
        $em->flush();

        dd($game);

        return $this->json(['items' => $items, 'game' => $game], Response::HTTP_CREATED, [], ['groups' => 'new_game']);
    }
}
