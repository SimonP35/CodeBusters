<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Validator\Constraints\NotCompromisedPassword;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('email', EmailType::class, [
            'label' => "E-Mail",
        ])
        ->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $evt) {
                
            $user = $evt->getData();
            $form = $evt->getForm();

            if($user->getId() === null) {
                
                $form->add('password', RepeatedType::class, [
                    'type' => PasswordType::class,
                    'invalid_message' => 'Les mots de passe ne correspondent pas.',
                    'required' => true,
                    'constraints' => [
                        new NotCompromisedPassword(),
                        new Regex('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&-\/])[A-Za-z\d@$!%*#?&-\/]{8,}$/')
                    ],
                    'first_options'  => [
                        'constraints' => new NotBlank(),
                        'label' => 'Mot de passe',
                        'help' => "8 lettres, 1 chiffre et 1 caractère spécial (@$!%*#?&-\)"
                    ],
                    'second_options' => ['label' => 'Répéter le mot de passe'],
                ]);  
            } 
        })
        ->add('nickname',  TextType::class, [
            'label' => 'Pseudo',
        ])
        ->add('roles', ChoiceType::class, [
            'label' => "Role de l'utilisateur",
            'choices' => [
                "Utilisateur" => "ROLE_USER",
                "Administrateur" => "ROLE_ADMIN",
            ],
            'multiple' => true,
            'expanded' => true,
        ])
    ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
