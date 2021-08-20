<?php

namespace App\Form;

use App\Entity\Game;
use App\Entity\User;
use App\Entity\Comment;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => 'Votre commentaire',
            ])
            ->add('rating', ChoiceType::class, [
                'label' => 'Votre note sur 5',
                'placeholder' => 'Choisissez votre note ci-dessous !',
                'choices' => [
                    // Label => valeur
                    'Excellent' => 5,
                    'Très bon' => 4,
                    'Bon' => 3,
                    'Peut mieux faire' => 2,
                    'A éviter' => 1,
                ],
            ])
            ->add('user', EntityType::class, [
                'class' => User::class,
                'query_builder' => function (UserRepository $ur) {
                    return $ur->createQueryBuilder('u')
                        ->orderBy('u.nickname', 'ASC');
                },
                'label' => 'Sélection de l\'utilisateur',
                'choice_label' => 'nickname',
                'multiple' => false,
                'expanded' => false,
            ])
            ->add('game', EntityType::class, [
                'class' => Game::class,
                'query_builder' => function (GameRepository $gr) {
                    return $gr->createQueryBuilder('g')
                        ->orderBy('g.id', 'ASC');
                },
                'label' => 'Sélection de la game',
                'choice_label' => 'id',
                'multiple' => false,
                'expanded' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
