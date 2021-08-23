import axios from 'axios';
import { SUBMIT_LOGIN, saveUserData } from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().auth;
      axios.post('http://localhost:3001/login', { email: email, password: password })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserData(response.data.logged, response.data.token));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    }
    default:

      next(action);
  }
};
  // on passe l'action au suivant (middleware suivant ou reducer)

export default authMiddleware;
