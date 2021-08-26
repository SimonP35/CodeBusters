import axios from 'axios';

import { START_GAME } from 'src/actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case START_GAME: {
      const { id } = store.getState().auth;
      axios.post('http://3.238.70.10/api/game/create', { id: id },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then((response) => {
          console.log(response);
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
