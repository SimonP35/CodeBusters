<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
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
        return $this->render('api/comment/list.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

    /**
     * @Route("/create", name="api_comment_create", methods="POST")
     */
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $vi): Response
    {
        $jsonContent = $request->getContent();

        $comment = $serializer->deserialize($jsonContent, Comment::class, 'json');

        $errors = $vi->validate($comment);

        $newErrors = [];

        foreach ($errors as $i => $error) {
            $newErrors[$i] = [$error->getPropertyPath(), $error->getMessage()];
        }

        if (count($errors) > 0) {

            return $this->json(['newErrors' => $newErrors], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    
        $em->persist($comment);
        $em->flush();

        return $this->json(['comment' => $comment], Response::HTTP_CREATED, ['Location' => $this->generateUrl( 'api_comment_list', [ 'id' => $comment->getId()] )]);
    }

    /**
     * @Route("/{id}", name="api_comment_show", methods={"GET"})
     */
    public function show(Comment $comment): Response
    {
        return $this->render('api/comment/show.html.twig', [
            'comment' => $comment,
        ]);
    }

    /**
     * @Route("/{id}/update", name="api_comment_update", methods={"GET","POST"})
     */
    public function update(Request $request, Comment $comment): Response
    {
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('api_comment_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('api/comment/edit.html.twig', [
            'comment' => $comment,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="api_comment_delete", methods={"POST"})
     */
    public function delete(Request $request, Comment $comment): Response
    {
        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($comment);
            $entityManager->flush();
        }

        return $this->redirectToRoute('api_comment_index', [], Response::HTTP_SEE_OTHER);
    }
}
