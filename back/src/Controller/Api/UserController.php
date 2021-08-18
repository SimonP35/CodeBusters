<?php

namespace App\Controller\Api;

use DateTime;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * @Route("/api/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/api/user", name="api_user")
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/Api/UserController.php',
        ]);
    }
    /**
     * @Route("/register", name="back_user_register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        // On désérialise le JSON vers une entité User
        $user = $serializer->deserialize($jsonContent, User::class, 'json');

            // // On hash le mot de passe
            // $hashedPassword = $userPasswordHasher->hashPassword($user, $user->getPassword());
            // // On le remet dans $user->password
            // $user->setPassword($hashedPassword);

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
     * @Route("/back/user/read/{id}", name="back_user_show", methods={"GET"})
     */
    public function show(User $user): Response
    {
        return $this->render('back/user/show.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/back/user/edit/{id<\d+>}", name="back_user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        // Le form va transmettre les données de la requête
        // à l'entité, sauf le password qui est non mappé
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Hashage du mot de passe que si on a renseigné le champ mot de passe
            // Si le mot de passe du form n'est pas vide
            // c'est qu'on veut le changer !
            if (!empty($form->get('password')->getData())) {
                // C'est là qu'on encode le mot de passe du User (qui se trouve dans $user)
                $hashedPassword = $userPasswordHasher->hashPassword($user, $form->get('password')->getData());
                // On réassigne le mot passe encodé dans le User
                $user->setPassword($hashedPassword);
            }

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('back_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/back/user/delete/{id<\d+>}", name="back_user_delete", methods={"POST"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('back_user_index', [], Response::HTTP_SEE_OTHER);
    }
}
