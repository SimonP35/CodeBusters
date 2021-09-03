# Cahier des charges

## Présentation du projet

CodeBusters est une plateforme d’Escape Games en ligne qui gravite dans l’univers du développement web. Sur un ton décalé, le produit se veut divertissant tout autant que réaliste dans ses énigmes, le propos étant de plonger le joueur dans le milieu en l’invitant à résoudre des énigmes décalées mais instructives.

Le principe du jeu est de terminer le parcours d’énigmes dans un temps donné maximal. Le joueur, soumis à la pression du temps, sera invité à retenter sa chance en cas d’échec, afin d’améliorer son score.

Chaque partie démarre avec une mise en contexte et le joueur est accompagné par un timer et un bot qui lui envoie quelques punchlines dans son évolution.

## Besoins

La particularité de ce projet est qu’il ne répond pas à une problématique ou un manque pratique, mais vient s’inscrire dans l’univers du divertissement en ligne. Au-delà de l’aspect ludique, le produit se veut fédérateur de la communauté francophone du développement web et de manière plus élargie, des métiers du numériques grâce à sa volonté d’inscrire un aspect instructif et didactique des langages informatiques. Dans sa version bêta, le produit pourra faire découvrir au joueur quelques rudiments de code et de l’univers professionnel du développement web.

## Fonctionnalités du MVP

* Plateforme de jeux en ligne :

1. Le site permet au visiteur d'avoir accès aux descriptifs (synopsis, niveau, thématique, commentaires utilisateurs) des scénarios disponibles (1 seul scénario en V1)
2. Une fonctionnalité d'authentification de l'utilisateur
3. La page des mentions légales
4. Les 4 scénarios les plus populaires apparaissent sur la homepage
5. Un scénario de jeu (réservé aux utilisateurs connectés)
6. Un back office pour que les administrateurs gèrent les utilisateurs

* Jeu :

1. Plateau de jeu interactif dynamique (1 scène)
2. Des objets interactifs qui déclenchent des événements
3. 6 énigmes à résoudre
4. Une introduction
5. Un Timer
6. Un Bot (le patron qui met la pression au fil du temps)

* Espace utilisateur authentifié qui donne accès à :

1. Création et modification d'un compte & profil ( nickname, email, récupération du mot de passe oublié )
2. Rating et commentaire des scénarios
3. Accès aux scénarios de jeu
  
## Evolution potentielle

A terme, le back office permettra d'implémenter des nouveaux scénarios

* V2 :
  
1. Implémentation de nouveaux scénarios (niveaux, thématiques)
2. Ajout de trophées pour les scores
3. Historique des scores et classement via tableau High Scores
4. Ajout de son pour améliorer l'immersion et l'UX

## Cible

La cible du site CodeBusters rassemble aussi bien les amateurs de jeux en ligne de tous horizons, que les passionnés d’Escape game, qui représentent un potentiel communautaire très important grâce au basculement du genre dans les parties dématérialisées. De même, l’univers du développement web de manière large (amateurs, passionnés, professionnels) représente une cible conséquente. 
La contrainte actuelle étant que le jeu est en français et donc, inaccessible pour ceux qui ne le comprennent pas un minimum.
