# Cahier des charges

## Présentation du projet

CodeBusters est une plateforme d’Escape Games en ligne qui gravitent dans l’univers du développement web. Sur un ton décalé, le produit se veut divertissant tout autant que réaliste dans ses énigmes, le propos étant de plonger le joueur dans le milieu en l’invitant à résoudre des énigmes décalées mais instructives. Chaque scénario est possible en multijoueurs et permet à l'utilisateur d'inviter des amis à participer à sa partie.

Le principe du jeu est de terminer le parcours d’énigmes dans un temps donné maximal.  L'équipe de joueurs, soumise à la pression du temps, sera invitée à retenter sa chance en cas d’échec, afin d’améliorer son score.

Chaque partie démarre avec une mise en contexte et l'équipe de joueurs est accompagnée par un timer et un chatbot qui la guide dans son évolution.

## Besoins

La particularité de ce projet est qu’il ne répond pas à une problématique ou un manque pratique, mais vient s’inscrire dans l’univers du divertissement en ligne. Au-delà de l’aspect ludique, le produit se veut fédérateur de la communauté francophone du développement web et de manière plus élargie, des métiers du numériques grâce à sa volonté d’inscrire un aspect instructif et didactique des langages informatiques. Dans sa version bêta, le produit pourra faire découvrir au joueur et son équipe quelques rudiments de code et de l’univers professionnel du développement web.

## Fonctionnalités du MVP

* Plateforme de jeux en ligne :

1. Le site permet au visiteur d'avoir accès aux descriptifs (synopsis, niveau, thématique, commentaires utilisateurs) des scénarios disponibles (1 seul scénario en V1)
2. Une fonctionnalité d'authentification de l'utilisateur
3. Un formulaire de contact et mentions légales
4. Les 4 scénarios les plus populaires apparaissent sur la homepage
5. Un scénario de jeu (réservé aux utilisateurs connectés)
6. Un back office pour que les utilisateurs les utilisateurs

* Jeu :

1. Plateau de jeu interactif dynamique (4 faces) partagé par les joueurs
2. Des objets interactifs qui déclenchent des événements
3. 5 énigmes à résoudre
4. Une introduction animée
5. Un Timer
6. Un Bot de guidage
7. Un bandeau "team" où apparaissent les nicknames des joueurs

* Espace utilisateur authentifié qui donne accès à :

1. Création et modification d'un compte & profil ( nickname, email, mot de passe, récupération du mot de passe oublié )
2. Historique des scores et classement via tableau High Scores
3. Rating et commentaire des scénarios
4. Accès aux scénarios de jeu
5. Création de partie multijoueurs
6. Invitation pour autres joueurs (création d'un slug à partager)
7. Salle d'attente de la partie multijoueurs avec pseudos des joueurs
  
## Evolution potentielle

Les évolutions potentielles sont multiples, d’un point de vue fonctionnel, comme d’un point de vue conceptuel.

1. Implémentation d'un chatbot pour que les joueurs puissent communiquer
2. Implémentation de nouveaux scénarios (niveaux, thématiques)
3. Ajout de son pour améliorer l'immersion et l'UX
4. Ajout de trophées pour les scores

## Cible

La cible du site CodeBusters rassemble aussi bien les amateurs de jeux en ligne de tous horizons, que les passionnés d’Escape game, qui représentent un potentiel communautaire très important grâce au basculement du genre dans les parties dématérialisées. De même, l’univers du développement web de manière large (amateurs, passionnés, professionnels) représente une cible conséquente. 
La contrainte actuelle étant que le jeu est en français et donc, inaccessible pour ceux qui ne le comprennent pas un minimum.