# Projet-CodeBusters

## La Team :

- Scrum-master / Dev Front End React (Javascript) : Elena BATTISTI
- Lead Dev Front React (Javascript) : Geoffrey DECOBERT
- Lead Dev Back Symfony (PHP) : Sacha HUYNH VAN-HARDEBOLLE
- Product Owner / Dev Back Symfony (PHP) : Simon PEJAC
- Git Master / Dev Front End React (Javascript) : Valentin VAN WEYDEVELT

## Instructions :

- Cloner le projet :
```git clone git@github.com:O-clock-Trinity/projet-codebusters.git```

- Créer un .env.local à la racine du dossier "back" avec les informations de votre database :
```
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"
DATABASE_URL="postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=13&charset=utf8"
```

- Toujours à la racine du dossier "back", entrer dans le terminal la commande suivante :
```composer install```

- Créer votre database via Doctrine :
```php bin/console doctrine:database:create```

- Exécuter les migrations avec la commande suivante :
```php bin/console doctrine:migrations:migrate```

(Vérifier que les tables ont bien été créées en database)

- Il est possible, si vous le souhaitez, d'utiliser les fixtures présentes dans le projet pour remplir votre DB de données factices :
```php bin/console doctrine:fixtures:load```

- Le bundle ```Lexik\Bundle\JWTAuthenticationBundle\LexikJWTAuthenticationBundle``` étant présent sur le projet, vous devez générer une paire de clés JWT, grâce à la commande suivante :
```php bin/console lexik:jwt:generate-keypair```
(Vérifier que les 2 clés private et public se trouvent bien dans ```/config/jwt``` et qu'elles sont .gitignore)
(Déplacer les chemins vers ces clés du .env vers votre .env.local)

## Infos :

La liste des endpoints et des routes du Back Office sont listés dans le fichier routes-back.md qui se trouve dans le dossier sprint_0.

**Pour accéder aux endpoints de l'API ou au Back Office, vous devez avoir créé au préalable un user soit via les fixtures soit directement depuis la DB.**
**Seulement le ROLE_ADMIN est autorisé à naviguer dans les routes ^/back**.

NB: Le package symfony/apache-pack étant déjà présent dans le composer.json, vous pouvez l'utiliser pour accéder au Back Office, ou lancer un serveur de dev ```php -S localhost:8000 -t public```


## Documentation :

- [Symfony](https://symfony.com/doc/current/index.html)
- [JWT Token](https://github.com/lexik/LexikJWTAuthenticationBundle)
