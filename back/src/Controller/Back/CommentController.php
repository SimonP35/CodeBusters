<?php

namespace App\Controller\Back;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/back/comment")
 */
class CommentController extends AbstractController
{
    /**
     * @Route("/", name="back_comment_list", methods={"GET"})
     */
    public function list(CommentRepository $commentRepository): Response
    {
        return $this->render('back/comment/list.html.twig', [
            'comments' => $commentRepository->findAll(),
        ]);
    }

    /**
     * @Route("/create", name="back_comment_create", methods={"GET","POST"})
     */
    public function create(Request $request): Response
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->redirectToRoute('back_comment_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/comment/create.html.twig', [
            'comment' => $comment,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/read/{id<\d+>}", name="back_comment_read", methods={"GET"})
     */
    public function read(Comment $comment = null): Response
    {   
        // On vérifie que le Comment existe bien
        if (null === $comment) {

            $error = 'Ce commentaire n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }

        return $this->render('back/comment/read.html.twig', [
            'comment' => $comment,
        ]);
    }

    /**
     * @Route("/update/{id<\d+>}", name="back_comment_update", methods={"GET","POST"})
     */
    public function update(Request $request, Comment $comment = null): Response
    {
        // On vérifie que le Comment existe bien
        if (null === $comment) {

            $error = 'Ce commentaire n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_comment_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/comment/update.html.twig', [
            'comment' => $comment,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/delete/{id<\d+>}", name="back_comment_delete", methods={"POST"})
     */
    public function delete(Request $request, Comment $comment = null, EntityManagerInterface $em): Response
    {
        // On vérifie que le Comment existe bien
        if (null === $comment) {

            $error = 'Ce commentaire n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        
        // if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->request->get('_token'))) {
        //     $em->remove($user);
        //     $em->flush();
        // }
                
        // Il existe bien, donc on envoie la demande de suppression
        $em->remove($comment);
        $em->flush();
        
        return $this->redirectToRoute('back_comment_list', [], Response::HTTP_SEE_OTHER);
    }
}
