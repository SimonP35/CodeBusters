import axios from 'axios';

import { startGame } from 'src/actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le GAMEmiddleware: ', action);

  switch (action.type) {
    case startGame: {
      const { gamePlay} = store.getState().game;
      axios.get('http://3.238.70.10/api/login', { gamePlay: gamePlay })
        .then((response) => {
        // Lorsqu'on reçoit la réponse, on enregistre le pseudo et la valeur true à islogged
          console.log('on a reçu le board');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default gameMiddleware;
