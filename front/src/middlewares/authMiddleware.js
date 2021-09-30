import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveUserData,
  SUBMIT_SIGNIN,
  SUBMIT_USER_UPDATE,
  SUBMIT_USER_PASSWORD,
  GET_USER_SCORES,
  saveUserScores,
  handleLogOut,
} from 'src/actions/auth';
import { toggleDisplayPopupLogin, toggleDisplayPopupSignin } from 'src/actions/buttonLog';
import {
  displayErrormessage,
  SUBMIT_COMMENT,
  clearInput,
  toggleDisplayUpdatePassword,
  saveErrorMessage,
} from 'src/actions/popup';
import { setLoading } from 'src/actions/loading';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      store.dispatch(setLoading());
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
          store.dispatch(setLoading());
        })
        .catch((error) => {
          // console.log(error.response);
          store.dispatch(displayErrormessage(error.response.data.message));
          store.dispatch(clearInput('password', ''));
          store.dispatch(clearInput('email', ''));
          store.dispatch(setLoading());
        });
      break;
    }
    case SUBMIT_SIGNIN: {
      store.dispatch(setLoading());
      const { nickname, email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/user/register', { nickname: nickname, email: email, password: password })
        .then(() => {
          // console.log(response);
          // si la création se passe bien
          // alors on affiche automatiquement le formulaire de connexion
          store.dispatch(toggleDisplayPopupLogin());
          // on nettoie les champs
          store.dispatch(clearInput('email', ''));
          store.dispatch(clearInput('nickname', ''));
          store.dispatch(clearInput('password', ''));
          store.dispatch(setLoading());
        })
        .catch((error) => {
          // console.log(error);
          // console.log(error.response);
          // store.dispatch(displayErrormessage(error.response.data.newErrors));
          if (error.response.data.newErrors.email !== undefined) {
            store.dispatch(saveErrorMessage('errorEmail', error.response.data.newErrors.email));
          }
          if (error.response.data.newErrors.password !== undefined) {
            store.dispatch(saveErrorMessage('errorPassword', error.response.data.newErrors.password));
          }
          if (error.response.data.newErrors.nickname !== undefined) {
            store.dispatch(saveErrorMessage('errorNickname', error.response.data.newErrors.nickname));
          }
          const { errorEmail, errorPassword, errorNickname } = store.getState().popup;
          store.dispatch(displayErrormessage(`${errorEmail}\n${errorPassword}\n${errorNickname}`));
          store.dispatch(clearInput('errorEmail', ''));
          store.dispatch(clearInput('errorPassword', ''));
          store.dispatch(clearInput('errorNickname', ''));
          store.dispatch(clearInput('email', ''));
          store.dispatch(clearInput('nickname', ''));
          store.dispatch(clearInput('password', ''));
          store.dispatch(setLoading());
        });
      break;
    }
    case SUBMIT_USER_UPDATE: {
      store.dispatch(setLoading());
      const { nickname, email } = store.getState().auth;
      // On peut modifier son pseudo
      axios.patch('http://3.238.70.10/api/user/update', { nickname: nickname, email: email },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then(() => {
          // console.log(response);
          // Lorsqu'on reçoit la réponse, on enregistre le pseudo et l'email
          store.dispatch(toggleDisplayPopupSignin());
          store.dispatch(handleLogOut());
          store.dispatch(setLoading());
        })
        .catch(() => {
          // console.log(error);
          store.dispatch(displayErrormessage('une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(setLoading());
        });
      break;
    }
    case SUBMIT_USER_PASSWORD: {
      store.dispatch(setLoading());
      const { password } = store.getState().auth;
      // On peut modifier son mot de passe
      axios.patch('http://3.238.70.10/api/user/update', { password: password },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
        .then(() => {
          // console.log(response);
          // Lorsqu'on reçoit la réponse, on enregistre le mot de passe
          store.dispatch(toggleDisplayUpdatePassword());
          store.dispatch(handleLogOut());
          store.dispatch(setLoading());
        })
        .catch(() => {
          // console.log(error);
          store.dispatch(displayErrormessage('une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(setLoading());
        });
      break;
    }
    case SUBMIT_COMMENT: {
      store.dispatch(setLoading());
      const { comment, rating } = store.getState().popup;
      const { id } = store.getState().game;
      axios.post('http://3.238.70.10/api/comment/create', { content: comment, rating: rating, game: id },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
      // Lorsqu'on reçoit la réponse, on enregistre le commentaire
      // de l'utilisateur (à lier au scénario)
        .then(() => {
          // console.log(response);
          // si la création se passe bien on nettoie le champs
          store.dispatch(setLoading());
          store.dispatch(clearInput('comment', ''));
          store.dispatch(clearInput('rating', 0));
        })
        .catch(() => {
          // console.log(error.response);
          store.dispatch(displayErrormessage('Une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(setLoading());
        });
      break;
    }
    case GET_USER_SCORES: {
      store.dispatch(setLoading());
      axios.get('http://3.238.70.10/api/user/read',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        })
      // Lorsqu'on reçoit la réponse, on envoie le tableau de scores
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserScores(response.data.user.games));
          store.dispatch(setLoading());
        })
        .catch(() => {
          // console.log(error.response);
          store.dispatch(setLoading());
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default authMiddleware;
