<?php

namespace App\Controller\Api;

use App\Entity\Game;
use App\Entity\Item;
use App\Repository\ItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/item")
 */
class ItemController extends AbstractController
{
    /**
     * @Route("/update/{name}", name="api_item_status", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, Item $item = null, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, ItemRepository $ir): Response
    {
        // Vérification si l'item existe bien
        if (null === $item) {
            return new JsonResponse(
                ["message" => "Cet objet n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }

        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();
        // On désérialise le JSON vers une entité Item
        
        $game = json_decode($jsonContent, true);

        $item = $ir->findItemByGameId($game['game_id']);

        // $item = $serializer->deserialize($jsonContent, Item::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $item]);

        dd($item);

        if ($item->getStatus() === 1) {
            $item->setStatus(0);
        } else {
            $item->setStatus(1);
        }

        // dd($item);

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($item);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush (enregistrement en BDD)
        $entityManager->flush();

        // On retourne en JsonResponse vu qu'il n'y a pas d'objet
        return new JsonResponse(["message" => "Statut objet modifié"], Response::HTTP_OK);
    
    }
}