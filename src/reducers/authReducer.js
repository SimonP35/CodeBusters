import {
  SAVE_USER_DATA,
  CHANGE_FIELD,
  CLICK_ON_LOGOUT,
  SUBMIT_LOGIN,
  SUBMIT_SIGNIN,
  CLEAR_INPUT,

} from 'src/actions/auth';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  isLogged: false,
  token: '',
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
        isLogged: true,
        nickname: action.nickname,
        email: action.email,
        token: action.token,
        password: '',
      };
    case CLICK_ON_LOGOUT:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        nickname: '',
        token: '',
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };
    case SUBMIT_SIGNIN:
      return {
        ...state,
        email: '',
        password: '',
        nickname: '',
      };
    case CLEAR_INPUT:
      return {
        ...state,
        email: '',
        password: '',
        nickname: '',
      };
    default:
      return state;
  }
}

export default authReducer;
