<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Repository\CommentRepository;
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
 * @Route("/api/comment")
 */
class CommentController extends AbstractController
{
    /**
     * Endpoint permettant au Front d'accéder à la liste complète des commentaires
     * 
     * @Route("/", name="api_comment_list", methods={"GET"})
     */
    public function list(CommentRepository $commentRepository): Response
    {
        // On retourne les objets $comment en JSON
        return $this->json(['comments' => $commentRepository->findAll()], Response::HTTP_OK, [], ['groups' => 'new_comment']);
    }

    /**
     * Endpoint permettant au Front de créer un commentaire
     * 
     * @Route("/create", name="api_comment_create", methods="POST")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité Comment
        $comment = $serializer->deserialize($jsonContent, Comment::class, 'json');
        
        // On valide l'entité avec le service Validator
        $errors = $vi->validate($comment);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $em->persist($comment);        
        $em->flush();

        // On retourne l'objet $comment en JSON
        return $this->json(["message" => "Commentaire créé", 'comment' => $comment], Response::HTTP_CREATED, [], ['groups' => 'new_comment']);
    }

    /**
     * Endpoint permettant au Front d'afficher un commentaire spécifique
     * (Utilisation éventuelle pour un affichage aléatoire d'un commentaire sur la page home/scénarios)
     * 
     * @Route("/read/{id<\d+>}", name="api_comment_read", methods={"GET"})
     */
    public function read(Comment $comment = null): Response
    {
        // On retourne l'objet $comment en JSON
        return $this->json(['comment' => $comment], Response::HTTP_OK, [], ['groups' => 'new_comment']);
    }

    /**
     * Endpoint permettant au Front d'éditer un commentaire spécifique sur la page Profil
     * 
     * @Route("/update/{id<\d+>}", name="api_comment_update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, Comment $comment = null, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        // On vérifie que le comment existe bien
        if (null === $comment) {
            return new JsonResponse(
                ["message" => "Ce commentaire n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }
        
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers l'entité Comment
        $comment = $serializer->deserialize($jsonContent, Comment::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $comment]);

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($comment);

        // Si la validation rencontre des erreurs
        if (count($errors) > 0) {
            // On renvoie les différentes erreurs sous forme de tableau
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $em->flush();

        // On retourne l'objet $comment en JSON
        return $this->json(["message" => "Commentaire modifié", 'comment' => $comment], Response::HTTP_OK, [], ['groups' => 'new_comment']);
    }

    /**
     * Endpoint permettant au Front de supprimer un commentaire spécifique sur la page Profil
     * 
     * @Route("/delete/{id<\d+>}", name="api_comment_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Comment $comment = null, EntityManagerInterface $em): Response
    {
        // On vérifie que le comment existe bien
        if (null === $comment) {
            return new JsonResponse(
                ["message" => "Ce commentaire n'existe pas"],
                Response::HTTP_NOT_FOUND
            );
        }
                
        // Il existe bien, donc on envoie la demande de suppression
        $em->remove($comment);
        $em->flush();

        // On renvoie l'affirmation de la suppression
        return new JsonResponse(['message' => 'Le commentaire a bien été supprimé.'], Response::HTTP_OK);
    }
}
