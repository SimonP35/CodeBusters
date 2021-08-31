import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveUserData,
  saveUserUpdate,
  SUBMIT_SIGNIN,
  SUBMIT_USER_UPDATE,
  GET_USER_SCORES,
  saveUserScores,
} from 'src/actions/auth';
import { toggleDisplayPopupLogin } from 'src/actions/buttonLog';
import { displayErrormessage, SUBMIT_COMMENT, clearInput } from 'src/actions/popup';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/login', { username: email, password: password })
        .then((response) => {
        // Lorsqu'on reçoit la réponse, on enregistre le pseudo et la valeur true à islogged
          // console.log(response.data.user);
          // Lorsqu'on reçoit la réponse, on enregistre le pseudo et l'email
          store.dispatch(saveUserData(
            response.data.user.id,
            response.data.user.nickname,
            response.data.user.email,
            response.data.token,
          ));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    }
    case SUBMIT_SIGNIN: {
      const { nickname, email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/user/register', { nickname: nickname, email: email, password: password })
        .then(() => {
          // console.log(response);
          // si la création se passe bien
          // alors on affiche automatiquement le formulaire de connexion
          store.dispatch(toggleDisplayPopupLogin());
          // on nettoie les champs
          store.dispatch(clearInput());
        })
        .catch((error) => {
          // console.log(error);
          // console.log(error.response);
          store.dispatch(displayErrormessage(error.response.data.errors.detail));
        });
      break;
    }
    case SUBMIT_USER_UPDATE: {
      const { nickname, email } = store.getState().auth;
      // On peut modifier son pseudo
      axios.patch('http://3.238.70.10/api/user/update', { nickname: nickname, email: email },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then((response) => {
          // console.log(response);
          // Lorsqu'on reçoit la réponse, on enregistre le pseudo et l'email
          store.dispatch(saveUserUpdate(
            response.data.user.nickname,
            response.data.user.email,
          ));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    }
    case SUBMIT_COMMENT: {
      const { comment, rating } = store.getState().popup;
      axios.post('http://3.238.70.10/api/comment/create', { content: comment, rating: rating })
      // Lorsqu'on reçoit la réponse, on enregistre le commentaire
      // de l'utilisateur (à lier au scénario)
        .then((response) => {
          // console.log(response);
          // si la création se passe bien on nettoie le champs
          store.dispatch(clearInput());
        })
        .catch((error) => {
          // console.log(error.response);
          // store.dispatch(displayErrormessage(error.response.data.errors.detail));
        });
      break;
    }
    case GET_USER_SCORES: {
      axios.get('http://3.238.70.10/api/user/read',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
      // Lorsqu'on reçoit la réponse, on envoie le tableau de scores
        .then((response) => {
          // console.log(response.data.user.games);
          store.dispatch(saveUserScores(response.data.user.games));
        })
        .catch((error) => {
          // console.log(error.response);
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default authMiddleware;
