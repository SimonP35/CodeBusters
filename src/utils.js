import games from 'src/assets/images/games.png';
import sudo from 'src/assets/images/sudo.png';
import vendredi from 'src/assets/images/vendredi.png';
import mathmax from 'src/assets/images/mathmax.png';
import smith from 'src/assets/images/smith.png';
import simon from 'src/assets/images/simon.png';
import geoffrey from 'src/assets/images/geoffrey.jpg';
import valentin from 'src/assets/images/valentin.png';
import elena from 'src/assets/images/elena.png';
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
        slug: 'vendredi-maudit',
      },
      {
        id: 2,
        image: games,
        story: 'deux histoire',
        comment: 'deux commentaire',
        description: 'Viens donc te gâcher le week-end à débugger le code dégueulasse de tonton Maurice !',
        rate: 4,
        slug: 'tonton-maurice',
      },
      {
        id: 3,
        image: games,
        story: 'trois histoire',
        comment: 'trois commentaire',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        rate: 4,
        slug: '',
      },
      {
        id: 4,
        image: games,
        story: 'quatre histoire',
        comment: 'quatre commentaire',
        description: ' Vivamus at nunc hendrerit, imperdiet tellus sit amet, imperdiet tellus. ',
        rate: 3,
        slug: '',
      },
    ],

  },
  {
    teamList: [
      {
        id: 1,
        image: [simon, git, twitter, linkedin],
        name: 'Simon Pejac',
        describe: 'Product Owner - developpeur PHP (symfony)',
        contact: ['https://github.com/SimonP35', 'https://twitter.com/el_coco_corvo', 'https://www.linkedin.com/in/simon-pejac-04305645/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAlwjbMBxiU73fwhR6UYa96eOAvqCIbNz80'],
      },
      {
        id: 2,
        image: [geoffrey, git, twitter, linkedin],
        name: 'Geoffrey Decobert',
        describe: 'Lead Dev Front - developpeur Javascript (react)',
        contact: ['https://github.com/Geoffrey-Dct', 'https://twitter.com/DecobertG', 'https://www.linkedin.com/in/geoffrey-decobert-2a61951bb/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMbOF4Bwz4M3bU5YuE8OA572tgWtCHCv4M'],
      },
      {
        id: 3,
        image: [ano, git, twitter, linkedin],
        name: 'Sacha Huynh Van-Hardebolle',
        describe: 'Lead Dev Back - developpeur PHP (symfony)',
        contact: ['https://github.com/Sacha-HH', 'https://twitter.com/HuynhSacha', 'https://www.linkedin.com/in/sacha-huynh-van-hardebolle-9840b591/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABNp8jQBuqeAxL7ascW8ed-QTxeV0nOnu0U'],
      },
      {
        id: 4,
        image: [elena, git, twitter, linkedin],
        name: 'Elena Battisti',
        describe: 'Scrum Master - developpeuse Javascript (react)',
        contact: ['https://github.com/Elenaaab', 'https://twitter.com/Elena_NellZerah', 'https://www.linkedin.com/in/elenabattisti/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAW6aUIBuD7Zp0dk4-vg-kLtXQfVNBhbFvY'],
      },
      {
        id: 5,
        image: [valentin, git, twitter, linkedin],
        name: 'Valentin Van Weydevelt',
        describe: 'Git master - developpeur Javascript (react)',
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
        rate: 4,
        slug: 'vendredi-maudit',
        status: 1,
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
        rate: 5,
        slug: 'tonton-maurice',
        status: 0,
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
        rate: 4,
        slug: '',
        status: 0,

      },
      {
        id: 4,
        nom: 'L\'instance de trop',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'Le roi de l\'abstract en PHP !',
        contentloose: 'On va pas se mentir, va falloir réviser les classes...',
        timer: 30,
        description: 'Crack.Boum.Abstract. Les classes en PHP, c\'est comme Amour, Gloire et Beauté. Y a moyen de se taper tout le monde, mais quand ça pète derrière, faut pas s\'étonner',
        pic: smith,
        comment: 'c\'est quoi ce truc de dingue encore ? Ils sont vraiment loin les gars qui ont écrit le scénar !',
        rate: 5,
        slug: '',
        status: 0,

      },

    ],
  },

  {
    messages: [

      {
        id: 1,
        content: 'Bon le stagiaire, je compte sur toi pour montrer que t\'es à la hauteur, surtout si t\'as prévu de venir mendier un CDI derrière !',
      },
      {
        id: 2,
        content: 'Alors ça avance ? Même mon chien en hypothermie coderait plus vite !',
      },
      {
        id: 3,
        content: 'Pourquoi le site est toujours pas déployé ? Les stagiaires vous savez vraiment rien faire tout seuls !!',
      },
      {
        id: 4,
        content: 'Bon t\'as prévu de déployer aujourd\'hui ? Fallait que je te précise le vendredi de quel mois peut-être ??',
      },
      {
        id: 5,
        content: 'Cette fois y\'en a marre, je te préviens si je suis obligé de revenir au bureau, t\'es viré ! ',
      },
      {
        id: 6,
        content: 'Espèce d\'incapable, t\'es fini dans le métier, je vais te pourrir !!!',
      },
      {
        id: 7,
        content: 'Franchement c\'est pathétique, t\'as pas honte de dire que t\'es dev toi ?',
      },
    ],
  },
  {
    items: {
      books: {
        id: 1,
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias distinctio corrupti autem doloremque beatae consequatur voluptatum. Reiciendis, eos. Laudantium voluptatibus nam itaque aliquid cupiditate hic laborum accusantium sed modi! Recusandae dolorem rem, officia perspiciatis dignissimos ex nemo quae facilis sunt delectus totam repellendus maxime, soluta dolores nihil aspernatur explicabo libero placeat! Corrupti quia expedita tenetur alias officiis, dolor eum?",
        name: "books",
        picture1: "http://3.238.70.10/images/book.png",
        pictureId: 11,
        statusName: 'booksStatus',
        status: 0,
        type: "clickable",
        x: "22px",
        y: "99px",
      },

      button: {
        id: 2,
        answer: "/xxx/xxx/xxx/xxx/xxx/yyy.pem",
        name: "button",
        statusName: 'buttonStatus',
        status: 0,
        type: "inputable",
        x: "152px",
        y: "99px",
      },

      carlin: {
        id: 3,
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias distinctio corrupti autem doloremque beatae consequatur voluptatum. Reiciendis, eos. Laudantium voluptatibus nam itaque aliquid cupiditate hic laborum accusantium sed modi! Recusandae dolorem rem, officia perspiciatis dignissimos ex nemo quae facilis sunt delectus totam repellendus maxime, soluta dolores nihil aspernatur explicabo libero placeat! Corrupti quia expedita tenetur alias officiis, dolor eum?",
        name: "carlin",
        picture1: "http://3.238.70.10/images/carlin.png",
        pictureId: 13,
        statusName: 'carlinStatus',
        status: 0,
        type: "clickable",
        x: "22px",
        y: "259px",
      },

      cat: {
        id: 4,
        description1: "Descriptif chat japonais",
        name: "cat",
        status: 0,
        type: "clickable",
        x: "452px",
        y: "399px",
      },
    },
  },
];
