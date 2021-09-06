# SYNOPSIS

On est stagiaire, c’est vendredi, on est le dernier au bureau histoire de faire du zèle, le collègue qui devait mettre en prod a baclé le travail, le code est cassé, la clé PEM a disparu, le client exige une mise en prod pour 18h. A nous de jouer.

## Règles du jeu

Intéragissez avec les objets cliquables pour trouver la réponse de l'énigme.

## Introduction

Il est 17h30, le bureau est déserté, le week-end commence... On s'apprête à récupérer notre veste quand on reçoit un message du boss.

Le client exige une mise en prod pour 18h, or Maurice, le collègue en charge du déploiement a laissé un code tout cassé. Le boss veut que le dernier au bureau s'en occupe.

Paf, c'est tombé sur nous, et on a 30 mn pour terminer. Va falloir entrer dans le bureau de Maurice pour s'en occuper!

## Scénario 1

On entre dans la pièce, il y a des objets interactifs partout dans la pièce. Certains sont cliquables, d’autres pas.

### Sur un post-it est inscrit une sorte de "charade" qui détermine les 5 mots à trouver pour former un chemin vers la clé .pem, qui elle-même est à trouver

1. Indice du post-it : RTFM ! Vous devez lire une doc en cliquant sur un des objets présents sur la scène, et trouver le mot qui n'a pas sa place (qui n'est pas correct).

** Vous avez trouvé le premier mot.

2. Indice du post-it: Way->fireCup()->Object->number(7)->find($answer). Vous devez repérer le 7ème mot sur le bon chemin du labyrinthe qui rejoint la coupe de feu.

** Vous avez trouvé le deuxième mot.

3. Indice du post-it: Marchandise de mauvaise qualité incomplète ! Vous devez repérer ce qui complèterait cette marchandise de mauvaise qualité! (qu'est ce qui manque ?).

** Vous avez trouvé le troisième mot.

4. Indice du post-it: 30 millions d'amis .... mais un préféré ! Vous devez repérer et trouver le nom de cet ami.

** Vous avez trouvé le quatrième mot.

5. Indice du post-it: Code réparé === réponse trouvée. Une erreur est présente dans un code sur VSC. Trouvez le mot et corrigez-le.

** Vous avez trouvé le cinquième mot.

6. Indice du post-it: Un bazar clé ... Dans les objets de la scène, une clé avec un nom est présente, trouvez-la.

** Vous avez trouvé le nom de la clé.pem. (le sixième mot).

7. Vous devez cliquer sur un objet qui vous permet de rentrer la réponse (les mots dans le bon ordre).

** Vous avez gagné si vous avez rentré la bonne réponse en moins de 30 min !

## Types d'action avec les objets

1. Etagère avec des livres, au clic, une page ouverte d'un livre apparaît avec de la doc.
2. Un labyrinth est présent, au clic il apparaît en grand.
3. Un poster est présent, au clic il est agrandi avec en + une description.
4. Cadre photo de chien, au clic, la photo est agrandie avec en + une description.
5. Un icone VSC, qui au clic, ouvre une image de fenêtre VSC en grand.
6. Une poignée de tiroir est cliquable, l'intérieur du tiroir apparaît en grand.
7. Au clic sur le coffre, un input se dévoile.
