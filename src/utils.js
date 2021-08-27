import games from 'src/assets/images/games.png';
import sudo from 'src/assets/images/sudo.png';
import vendredi from 'src/assets/images/vendredi.png';
import mathmax from 'src/assets/images/mathmax.png';
import smith from 'src/assets/images/smith.png';
import ano from 'src/assets/images/ano.svg';
import git from 'src/assets/images/github.svg';
import linkedin from 'src/assets/images/linkedin.svg';
import twitter from 'src/assets/images/twitter.svg';

export default [
  {
    fourMostPopularScenarios: [
      {
        id: 1,
        image: games,
        story: 'une histoire',
        comment: 'un commentaire',
        description: 'Viens incarner le stagiaire qui devra assurer la mise en prod !',
        rate: 5,
      },
      {
        id: 2,
        image: games,
        story: 'deux histoire',
        comment: 'deux commentaire',
        description: 'Viens donc te gâcher le week-end à débugger le code dégueulasse de tonton Maurice !',
        rate: 4,
      },
      {
        id: 3,
        image: games,
        story: 'trois histoire',
        comment: 'trois commentaire',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        rate: 4,
      },
      {
        id: 4,
        image: games,
        story: 'quatre histoire',
        comment: 'quatre commentaire',
        description: ' Vivamus at nunc hendrerit, imperdiet tellus sit amet, imperdiet tellus. ',
        rate: 3,
      },
    ],

  },
  {
    teamList: [
      {
        id: 1,
        image: [ano, git, twitter, linkedin],
        name: 'Simon Pejac',
        describe: 'Product Owner - developpeur PHP (symfony)',
        contact: ['https://github.com/SimonP35', 'https://twitter.com/el_coco_corvo', 'https://www.linkedin.com/in/simon-pejac-04305645/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAlwjbMBxiU73fwhR6UYa96eOAvqCIbNz80'],
      },
      {
        id: 2,
        image: [ano, git, twitter, linkedin],
        name: 'Geoffrey Decobert',
        describe: 'Lead Dev Front - developpeur Javascript (react)',
        contact: ['https://github.com/Geoffrey-Dct', 'https://twitter.com/DecobertG', 'https://www.linkedin.com/in/geoffrey-decobert-2a61951bb/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMbOF4Bwz4M3bU5YuE8OA572tgWtCHCv4M'],
      },
      {
        id: 3,
        image: [ano, git, twitter, linkedin],
        name: 'Sasha Huynh Van-Hardebolle',
        describe: 'Lead Dev Back - developpeur PHP (symfony)',
        contact: ['https://github.com/Sacha-HH', 'https://twitter.com/HuynhSacha', 'https://www.linkedin.com/in/sacha-huynh-van-hardebolle-9840b591/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABNp8jQBuqeAxL7ascW8ed-QTxeV0nOnu0U'],
      },
      {
        id: 4,
        image: [ano, git, twitter, linkedin],
        name: 'Elena Battisti',
        describe: 'Scrum Master - developpeuse Javascript (react)',
        contact: ['https://github.com/Elenaaab', 'https://twitter.com/Elena_NellZerah', 'https://www.linkedin.com/in/elenabattisti/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAW6aUIBuD7Zp0dk4-vg-kLtXQfVNBhbFvY'],
      },
      {
        id: 5,
        image: [ano, git, twitter, linkedin],
        name: 'Valentin Van Weydevelt - developpeur Javascript (react)',
        describe: 'Git master',
        contact: ['https://github.com/ValtentinVW', 'https://twitter.com/valentinvw', 'https://www.linkedin.com/in/valentin-van-weydevelt-3146b7208/'],
      },
    ],
  },
  {
    users: [
      {
        id: 1,
        pseudo: 'jojo',
        email: 'jojo@gmail.com',
        password: 'coucou',
      },
      {
        id: 2,
        pseudo: 'bibi',
        email: 'bibi@gmail.com',
        password: 'hello',
      },
    ],
  },

  {
    scenarios: [
      {
        id: 1,
        nom: 'vendredi maudit',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'Le code de Maurice est réparé, tu passes lead dev, gégé !',
        contentloose: 'C\'est fou ce que t\'es nul purée',
        timer: 30,
        description: 'Vendredi, 17h30...Tu t\'apprêtes à partir en weekend quand soudain. Tak Tak. Tu reçois un message de ton boss sur Schlag. Parait que le client exige la mise en prod du code que Maurice a laissé tout cassé pour 18h. Et t\'es le dernier au bureau. Tu sais ce qu\'on dit sur les mises en prod du vendredi...',
        pic: vendredi,
        comment: 'Jeu très cool, j\'ai adoré ! ',
        rate: '3',
      },
      {
        id: 2,
        nom: 'git reverse',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'Incroyable mais vrai ! Ton git reverse a fonctionné !',
        contentloose: 'C\'est dingue la honte que tu te tapes',
        timer: 30,
        description: 'Bienvenue dans l\'enfer de git : vous pensez être le plus fort avec vos git add-git commit ? Attendez de découvrir les pires commandes jamais inventées...',
        pic: sudo,
        comment: 'C\'est possible de finir ce truc? Horrible j\'ai tenté 13 fois d\'affilée',
        rate: '5',
      },
      {
        id: 3,
        nom: 'Math Max',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'TypeScript sacré vainqueur !',
        contentloose: 'Comment on peut foirer autant un escpae game ?',
        timer: 30,
        description: 'Plus violent que Predator, plus cruel qu\'Alien, plus destructeur que Godzilla: le combat ultime entre Javascript le Givré et Typescript le Titan. Un seul des deux survivra.',
        pic: mathmax,
        comment: 'je savais pas ce que c\était typescript mais ca a l\'air trop balese en fait',
        rate: '4',
      },
      {
        id: 4,
        nom: 'L\'instance de trop',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'Le roi de l\'abstract en PHP !',
        contentloose: 'On va pas se mentir, va falloir réviser les classes...',
        timer: 30,
        description: 'Crack.Boum.Abstract. Les classes en PHP, c\'est comme Amour, Gloire et Beauté. Y a moyent de se taper tout le monde, mais quand ça pète derrière, faut pas s\'étonner',
        pic: smith,
        comment: 'c\'est quoi ce truc de dingue encore ? Ils sont vraiment loin les gars qui ont écrit le scénar !',
        rate: '5',
      },

    ],
  },

  {
    messages: [

      {
        id: 1,
        content: 'Bon le stagiaire, je compte sur toi pour montrer que t\'es à la hauteur, surtout si t\'as prévu de venir mendier un CDI derrière',

      },
      {
        id: 2,
        content: 'Alors ça avance ? Même mon chien en hypothermie coderait plus vite',
      },
      {
        id: 3,
        content: 'Pourquoi le site est toujours pas déployé ? Les stagiaires vous savez vraiment rien faire tout seuls',
      },
      {
        id: 4,
        content: 'Bon t\'as prévu de déployer aujourd\'hui ? Fallait que je te précise le vendredi de quel mois peut-être?',
      },
      {
        id: 5,
        content: 'Cette fois y\'en a marre, je te préviens si je suis obligé de revenir au bureau, t\'es viré ! ',
      },
      {
        id: 6,
        content: 'Espèce d\'incapable, t\'es fini dans le métier, je vais te pourrir',
      },
    ],
  },
];
