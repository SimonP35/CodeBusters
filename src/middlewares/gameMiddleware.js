import axios from 'axios';
import {
  START_GAME,
  saveDataGame,
  setLoadingGame,
  END_GAME,
} from 'src/actions/game';
import { setLoading } from 'src/actions/loading';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case START_GAME: {
      store.dispatch(setLoading());
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
            response.data.game.id,
          ));
          store.dispatch(setLoadingGame());
          store.dispatch(setLoading());
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          store.dispatch(setLoadingGame());
        });
      break;
    }
    case END_GAME: {
      store.dispatch(setLoading());
      const { id } = store.getState().game;
      axios.put(`http://3.238.70.10/api/game/update/${id}`, {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setLoading());
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
