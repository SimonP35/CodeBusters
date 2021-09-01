<?php

namespace App\Controller\Api;

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
     * Endpoint permettant au Front de changer le status d'un item
     * 
     * @Route("/update/{name}", name="api_item_status", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, Item $item = null, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
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
        
        // On désérialise le JSON vers l'entité Item
        $item = $serializer->deserialize($jsonContent, Item::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $item]);

        // Condition qui modifie le status
        if ($item->getStatus() === 1) {
            $item->setStatus(0);
        } else {
            $item->setStatus(1);
        }

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($item);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $entityManager->flush();

        // On retourne le status de l'objet $item en JSON
        return $this->json(["message" => "Statut objet modifié", 'item' => $item], Response::HTTP_OK, [], ['groups' => 'item']);
    }
}