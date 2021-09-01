<?php

namespace App\Controller\Back;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Service\PasswordHasher;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/back/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="back_user_list", methods={"GET"})
     */
    public function list(UserRepository $userRepository): Response
    {
        return $this->render('back/user/list.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/create", name="back_user_create", methods={"GET","POST"})
     */
    public function create(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('back_user_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/create.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/read/{id<\d+>}", name="back_user_read", methods={"GET"})
     */
    public function read(User $user = null): Response
    {
        // On vérifie que le USER existe bien
        if (null === $user) {

            $error = 'Cet utilisateur n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        
        return $this->render('back/user/read.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/update/{id<\d+>}", name="back_user_update", methods={"GET","POST"})
     */
    public function update(Request $request, User $user = null, PasswordHasher $passwordHasher): Response
    {
        // On vérifie que le USER existe bien
        if (null === $user) {

            $error = 'Cet utilisateur n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $hashedPassword = $passwordHasher->hasher($user->getPassword());
            $user->setPassword($hashedPassword);
            
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_user_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/update.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/delete/{id<\d+>}", name="back_user_delete", methods={"POST"})
     */
    public function delete(Request $request, User $user = null, EntityManagerInterface $em): Response
    {
        // On vérifie que le USER existe bien
        if (null === $user) {

            $error = 'Cet utilisateur n\'existe pas';

            return $this->json(['error' => $error], Response::HTTP_NOT_FOUND);
        }
        
        // if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
        //     $em->remove($user);
        //     $em->flush();
        // }

        // Il existe bien, donc on envoie la demande de suppression
        $em->remove($user);
        $em->flush();

        return $this->redirectToRoute('back_user_list', [], Response::HTTP_SEE_OTHER);
    }
}
