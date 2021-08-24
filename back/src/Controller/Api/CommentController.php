<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
     * @Route("/", name="api_comment_list", methods={"GET"})
     */
    public function list(CommentRepository $commentRepository): Response
    {
        return $this->json(['comments' => $commentRepository->findAll()], Response::HTTP_OK);
    }

    /**
     * @Route("/create", name="api_comment_create", methods="POST")
     */
    public function create(Request $request, SerializerInterface $serializer, GameRepository $gr, UserRepository $ur, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        $jsonContent = $request->getContent();

        $comment = $serializer->deserialize($jsonContent, Comment::class, 'json');
        
        // On valide l'entité avec le service Validator
        $errors = $vi->validate($comment);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On persist, on flush
        $em->persist($comment);        
        $em->flush();

        return $this->json(['comment' => $comment], Response::HTTP_CREATED, [], ['groups' => 'new_comment']);
    }

    /**
     * @Route("/read/{id<\d+>}", name="api_comment_show", methods={"GET"})
     */
    public function show(Comment $comment): Response
    {
        return $this->json(['comment' => $comment], Response::HTTP_OK);
    }

    /**
     * @Route("/update/{id<\d+>}", name="api_comment_update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, Comment $comment = null, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        // On vérifie que le Comment existe bien
        if (null === $comment) {
            
            $error = 'Ce commentaire n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }

        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité User
        $comment = $serializer->deserialize($jsonContent, Comment::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $comment]);

        // On valide l'entité avec le service Validator
        $errors = $vi->validate($comment);

        // Si la validation rencontre des erreurs
        // ($errors se comporte comme un tableau et contient un élément par erreur)
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // On flush
        $em->flush();

        return $this->json(['comment' => $comment], Response::HTTP_OK, [], ['groups' => 'new_comment']);
    }

    /**
     * @Route("/delete/{id<\d+>}", name="api_comment_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Comment $comment = null, EntityManagerInterface $em): Response
    {
        // On vérifie que le USER existe bien
        if (null === $comment) {

            $error = 'Ce commentaire n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        
        // if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->request->get('_token'))) {
        //     $em->remove($comment);
        //     $em->flush();
        // }

        $em->remove($comment);
        $em->flush();

        // On renvoie l'affirmation de la suppression
        return $this->json(['message' => 'Le commentaire a bien été supprimé.'], Response::HTTP_OK);
        
        //! Le front doit rediriger vers HOME
    }
}
