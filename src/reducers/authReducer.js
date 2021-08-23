import { SAVE_USER_DATA, CHANGE_FIELD, CLICK_ON_LOGOUT, SUBMIT_LOGIN, SUBMIT_SIGNIN } from 'src/actions/auth';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  isLogged: false,
  token: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        isLogged: action.isLogged,
        token: action.token,
        nickname: action.nickname,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
    case CLICK_ON_LOGOUT:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
      };
    case SUBMIT_SIGNIN:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        nickname: '',
      };
  }
};

export default authReducer;
