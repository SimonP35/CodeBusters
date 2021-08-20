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
      },
      {
        id: 2,
        image: games,
      },
      {
        id: 3,
        image: games,
      },
      {
        id: 4,
        image: games,
      },
    ],
  },

  {
    fivePeople: [
      {
        id: 1,
        image: [ano, git, twitter, linkedin],
        name: 'Simon',
        describe: 'description',
      },
      {
        id: 2,
        image: [ano, git, twitter, linkedin],
        name: 'Geoffrey',
        describe: 'description',
      },
      {
        id: 3,
        image: [ano, git, twitter, linkedin],
        name: 'Sasha',
        describe: 'description',
      },
      {
        id: 4,
        image: [ano, git, twitter, linkedin],
        name: 'Elena',
        describe: 'description',
      },
      {
        id: 5,
        image: [ano, git, twitter, linkedin],
        name: 'Valentin',
        describe: 'description',
      },
    ],
  },
];
