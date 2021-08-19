<?php

namespace App\Controller\Api;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * @Route("/api/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/register", name="back_user_register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        $user = $serializer->deserialize($jsonContent, User::class, 'json');

        // On hash le mot de passe
        $hashedPassword = $userPasswordHasher->hashPassword($user, $user->getPassword());
        // On le remet dans $user->password
        $user->setPassword($hashedPassword);

        $user->setRoles(['ROLE_USER']);

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($user);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $entityManager->persist($user);
        $entityManager->flush();

        // REST nous demande un statut 201 et un header Location: url
        // Si on le fait "à la mano"
        return $this->json(
            // Le user que l'on retourne en Json directement au front
            $user,
            //Le status code
            Response::HTTP_CREATED,
            [],
            // Le groupe de sérialisation pour que $user soit sérialisé sans erreur de référence circulaire

            ['groups' => 'user_get']
        );
    }

    /**
     * @Route("/read/{id<\d+>}", name="api_user_read", methods={"GET"})
     */
    public function show(User $user): Response
    {
        return $this->json($user, Response::HTTP_OK);
    }

    /**
     * @Route("/update/{id<\d+>}", name="api_user_update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, User $user = null, UserPasswordHasherInterface $userPasswordHasher, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {

        // User non trouvé
        if ($user === null) {
            return new JsonResponse(
                ["message" => "Cet utilisateur n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }

        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité User
        $user = $serializer->deserialize($jsonContent, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        // Hashage du mot de passe que si on a renseigné le champ mot de passe
        // Si le mot de passe du form n'est pas vide
        // c'est qu'on veut le changer !

        if (!empty($user->getPassword())) {
            // C'est là qu'on encode le mot de passe du User (qui se trouve dans $user)
            $hashedPassword = $userPasswordHasher->hashPassword($user, $user->getPassword());
            // On réassigne le mot passe encodé dans le User
            $user->setPassword($hashedPassword);
        }

        // On valide l'entité avec le service Validator
        $errors = $validator->validate($user);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush (enregistrement en BDD)
        $entityManager->flush();

        return new JsonResponse(["message" => "Utilisateur modifié"], Response::HTTP_OK);
    }

    /**
     * @Route("/delete/{id<\d+>}", name="api_user_delete", methods="DELETE")
     */
    public function delete(User $user = null, EntityManagerInterface $em)
    {
        // if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
        //     $entityManager = $this->getDoctrine()->getManager();
        //     $entityManager->remove($user);
        //     $entityManager->flush();
        // }

        // On vérifie que le USER existe bien
        if (null === $user) {

            $error = 'Cet utilisateur n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        // Il existe bien, donc on envoie la demande de suppression
        $em->remove($user);
        $em->flush();
        // On renvoie l'affirmation de la suppression
        return $this->json(['message' => 'L\'utilisateur a bien été supprimé.'], Response::HTTP_OK);

        //! Le front doit rediriger vers HOME
    }
}
