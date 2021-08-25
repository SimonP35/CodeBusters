import games from 'src/assets/images/games.png';
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
      },
      {
        id: 2,
        image: games,
        story: 'deux histoire',
        comment: 'deux commentaire',
      },
      {
        id: 3,
        image: games,
        story: 'trois histoire',
        comment: 'trois commentaire',
      },
      {
        id: 4,
        image: games,
        story: 'quatre histoire',
        comment: 'quatre commentaire',
      },
    ],
  },

  {
    fivePeople: [
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
        contact: ['https://github.com/Geoffrey-Dct', 'https://twitter.com/DecobertG', 'https://www.linkedin.com/in/geoffrey-decobert-2a61951bb/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADMbOF4Bwz4M3bU5YuE8OA572tgWtCHCv4M',],
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
        timer: 26,
        comment: '',
      },
      {
        id: 2,
        nom: 'git reverse',
        src: 'https://www.youtube.com/watch?v=1AnG04qnLqI',
        contentwin: 'Incroyable mais vrai ! Ton git reverse a fonctionné !',
        contentloose: 'C\'est dingue la honte que tu te tapes',
        timer: 19,
        comment: '',
      },

    ],
  },
];
