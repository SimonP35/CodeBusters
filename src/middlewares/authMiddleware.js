import axios from 'axios';
import { SUBMIT_LOGIN, saveUserData, SUBMIT_SIGNIN } from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().auth;
      axios.post('http://localhost:3001/login', { email: email, password: password })
        .then((response) => {
        console.log(response);
        // Lorsqu'on reçoit la réponse, on enregistre le pseudo et la valeur true à islogged
          store.dispatch(saveUserData(
            response.data.logged,
            response.data.email,
            response.data.nickname,
          ));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case SUBMIT_SIGNIN: {
      const { nickname, email, password } = store.getState().auth;
      axios.post('http://3.238.70.10/api/user/register', { nickname: nickname, email: email, password: password })
        .then((response) => {
          console.log('coucou');
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('finally ok');
        });
      break;
    }
    default:
      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default authMiddleware;
