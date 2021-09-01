import {
  SAVE_USER_DATA,
  SAVE_USER_UPDATE,
  CLICK_ON_LOGOUT,
  SUBMIT_LOGIN,
  SUBMIT_SIGNIN,
  SUBMIT_USER_UPDATE,
  SAVE_USER_SCORES,
  GET_USER_SCORES,
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
  scores: [],
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
        id: '',
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
        email: '',
        password: '',
        nickname: '',
      };
    case SAVE_USER_UPDATE:
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        email: '',
        password: '',
        nickname: '',
      };
    case SAVE_USER_SCORES:
      return {
        ...state,
        scores: action.scores,
      };
    case GET_USER_SCORES:
      return {
        ...state,
        scores: action.scores,
      };
    default:
      return state;
  }
}

export default authReducer;
