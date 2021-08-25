import axios from 'axios';

import { startGame } from 'src/actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le GAMEmiddleware: ', action);

  switch (action.type) {
    case startGame: {
      const { gamePlay} = store.getState().game;
      axios.post('http://3.238.70.10/api/game/create', { gamePlay: gamePlay })
        .then((response) => {
        // Lorsqu'on reçoit la réponse qui charge la board, on renvoie sur page board et on lance la requête sur le timer
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
