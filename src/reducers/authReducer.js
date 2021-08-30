import {
  SAVE_USER_DATA,
  CLICK_ON_LOGOUT,
  SUBMIT_LOGIN,
  SUBMIT_SIGNIN,
  SUBMIT_USER_UPDATE,

} from 'src/actions/auth';
import {
  CHANGE_FIELD,
  CLEAR_INPUT,
} from 'src/actions/popup';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  isLogged: false,
  token: '',
  id: '',
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
        id: action.id,
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
    case SUBMIT_USER_UPDATE:
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
        password: '',
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
