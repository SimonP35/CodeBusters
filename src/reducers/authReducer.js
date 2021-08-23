import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: true,
  token: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        isLogged: action.isLogged,
        token: action.token,
      };
    default:
      return state;
    // case CLICK_ON_LOGOUT:
    //   return {
    //     ...state,
    //     isLogged: false,
    //     email: '',
    //     password: '',
    //   };
  }
}

export default authReducer;
