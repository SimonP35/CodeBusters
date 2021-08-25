import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveUserData,
  SUBMIT_SIGNIN,
  clearInput,
} from 'src/actions/auth';
import { toggleDisplayPopupLogin } from 'src/actions/buttonLog';
import { displayErrormessage, SUBMIT_COMMENT } from 'src/actions/popup';

const authMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/login', { username: email, password: password })
        .then((response) => {
        // Lorsqu'on reçoit la réponse, on enregistre le pseudo et la valeur true à islogged
          // console.log(response.data.user);
          // Lorsqu'on reçoit la réponse, on enregistre le pseudo et l'email
          store.dispatch(saveUserData(
            response.data.user.nickname,
            response.data.user.email,
          ));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    }
    case SUBMIT_SIGNIN: {
      const { nickname, email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/comment/read/40', { nickname: nickname, email: email, password: password })
        .then((response) => {
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
        })
        .then((response) => {
          // console.log(response);
        });
      break;
    }
    case SUBMIT_COMMENT: {
      const { comment, rating } = store.getState().popup;
      axios.post('http://3.238.70.10/api/comment/create', { content: comment, rating: rating })
       // Lorsqu'on reçoit la réponse, on enregistre le commentaire de l'utilisateur (à lier au scénario)
        .then((response) => {
          console.log(response);
          // si la création se passe bien on nettoie le champs
          store.dispatch(clearInput());
        })
        .catch((error) => {
          // console.log(error.response);
          // store.dispatch(displayErrormessage(error.response.data.errors.detail));
        })
        .then((response) => {
          // console.log(response);
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default authMiddleware;
