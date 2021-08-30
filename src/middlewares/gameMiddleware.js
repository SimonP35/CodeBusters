import axios from 'axios';
import { START_GAME, saveDataGame, setLoadingGame } from 'src/actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case START_GAME: {
      const { id } = store.getState().auth;
      axios.post('http://3.238.70.10/api/game/create', { user: id },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveDataGame(
            response.data.game.status,
            response.data.items,
            response.data.background,
          ));
          store.dispatch(setLoadingGame());
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          store.dispatch(setLoadingGame());
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default gameMiddleware;
