# SYNOPSIS

On est stagiaire, c’est vendredi, on est le dernier au bureau histoire de faire du zèle, le collègue qui devait mettre en prod a baclé le travail, le code est cassé, la clé PEM a disparu, le client exige une mise en prod pour 18h. A nous de jouer.

## Règles du jeu

Les interactions avec les objets apparaitront au fil du jeu en fonction de la résolution des énigmes (n’hésitez pas à refaire un tour pour cliquer sur les objets).

## Introduction

Il est 17h30, le bureau est déserté, le week-end commence... On s'apprête à récupérer notre veste quand on reçoit un message du boss sur le scalp / schlag d’équipe...

Le client exige une mise en prod pour 18h, or Maurice, le collègue en charge du déploiement a laissé un code tout cassé. Le boss veut que le dernier au bureau s'en occupe.

Paf, c'est tombé sur nous, et on a 30 mn pour terminer. Va falloir entrer dans le bureau de Maurice pour s'en occuper!

## Partie (en 5 énigmes / étapes)

On entre dans la pièce, il y a des objets interactifs partout dans la pièce. Certains sont cliquables, d’autres pas, certains deviendront cliquables au fil du jeu.

* 1. Allumer l’ordi et trouver le mot de passe : interface classique utilisateur (fond d’écran rigolo avec photo de sacha en vacances + input pour entrer le mdp). Il y a un indice proposé qui oriente (phrase : « encore oublié ton mot de passe ? » au clic, tu reçois l’indice (bout de code qui oriente vers un chien) et le cadre devient cliquable. Il est caché derrière le cadre avec la photo du chien.

** Ca déverouille le bureau, on voit les dossiers affichés.

* 2. Trouver le bon dossier (icône de terminal) : faux terminal sur lequel on doit taper le path du dossier qu’on trouve grâce à un labyrinthe (en image fixe, poster sur un mur), le joueur doit écrire le bon chemin en revenant sur le terminal.

** Ca débloque des nouveaux fichiers, dont le code cassé, on l’ouvre et on voit plein d’erreurs PHP.

* 3. Trouver les 7 différences : un fichier doit être corrigé (via clavier) pour faire correspondre avec un code valide que le joueur trouve quelque part dans la pièce (notes brouillon quelque part en puzzle, il faut remettre dans le bon ordre).

** Le code est bon, y a plus d’erreurs PHP. Ca débloque deux autres fichiers dont un « localhost :8080 » qui affiche un rendu fond noir et un fichier CSS avec un indice « arrête de broyer du noir, utilise plutôt la couleur favorite de Sacha », le bot donne une indication.

* 4. Corriger le CSS : On va dans la bibli, il y a un « dictionnaire des couleurs hexa décimales », on ouvre le livre, on tourne les pages et la couleur à choisir est entourée. On va changer le code hexa dans le fichier css sur l’ordi, le bot nous dit quelque chose qui nous invite à aller voir le rendu du site, on découvre le texte noir qui était caché par le background noir. (ex : du f0f)

** Le code est nickel, c’est le moment de déployer. Le bot nous demande de mettre en prod via la clé PEM.

* 5. Trouver la clé PEM : une vraie clé physique avec l’inscription « PEM » dessus, qui n’était pas là auparavant, qui apparaît quelque part (il faut la trouver), qui ouvre un coffre transparent avec une serrure qu’on ne pouvait pas ouvrir sans la clé, à l’intérieur un gros bouton avec écrit dessus « mise en prod ».

** Partie terminée !

## Types d'action avec les objets

1. Cadre avec photo du chien qui peut être retourné.

2. Livres cliquables (dont un pour l’énigme 4)

3. Coffre avec serrure qui contient le bouton « mise en prod »

4. Clé cachée dans un tiroir, armoire, etc

5. A étoffer
