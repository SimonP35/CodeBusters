<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/user")
 */
class UserController extends AbstractController
{
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * Endpoint permettant au Front d'enregistrer un utilisateur
     * 
     * @Route("/register", name="api_user_register", methods={"POST"})
     */
    public function register(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité User
        $user = $serializer->deserialize($jsonContent, User::class, 'json');

        // On définit le rôle du user
        $user->setRoles(['ROLE_USER']);

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($user);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {

            $errorsString = (string) $errors;

            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errorsString' => $errorsString], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $entityManager->persist($user);
        $entityManager->flush();

        // On retourne l'objet $user en JSON
        return $this->json(
            // Le user que l'on retourne en Json directement au front
            ["message" => "Utilisateur créé", "user" => $user],
            //Le status code
            Response::HTTP_CREATED,
            [],
            // Le groupe de sérialisation pour que $user soit sérialisé sans erreur de référence circulaire
            ['groups' => 'create_user']
        );
    }

    /**
     * Endpoint permettant au Front d'afficher un utilisateur spécifique (page profil)
     * 
     * @Route("/read", name="api_user_read", methods={"GET"})
     */
    public function read(): Response
    {
        $user = $this->security->getUser();
    
        // On retourne l'objet $user en JSON
        return $this->json(['user' => $user], Response::HTTP_OK, [], ['groups' => 'user_page']);
    }

    /**
     * Endpoint permettant au Front d'éditer un utilisateur spécifique sur la page Profil
     * 
     * @Route("/update", name="api_user_update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        $user = $this->security->getUser();

        // On vérifie que le user existe bien
        if (null === $user) {
            return new JsonResponse(
                ["message" => "Cet utilisateur n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }

        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité User déjà existante
        $user = $serializer->deserialize($jsonContent, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($user);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $entityManager->flush();

        // On retourne une JsonResponse (Aucun objet à transmettre)
        return new JsonResponse(["message" => "Utilisateur modifié"], Response::HTTP_OK);
    }

    /**
     * Endpoint permettant au Front de supprimer un utilisateur spécifique sur la page Profil
     * 
     * @Route("/delete", name="api_user_delete", methods="DELETE")
     */
    public function delete(EntityManagerInterface $em)
    {
        $user = $this->security->getUser();

        // On vérifie que le user existe bien
        if (null === $user) {
            return new JsonResponse(
                ["message" => "Cet utilisateur n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }

        // Il existe bien, donc on envoie la demande de suppression
        $em->remove($user);
        $em->flush();
        
        // On renvoie l'affirmation de la suppression
        return new JsonResponse(['message' => 'L\'utilisateur a bien été supprimé.'], Response::HTTP_OK);
    }
}
