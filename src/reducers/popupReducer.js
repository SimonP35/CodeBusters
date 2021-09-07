import { TOGGLE_DISPLAY_POPUP_SIGNIN, TOGGLE_DISPLAY_POPUP_LOGIN } from 'src/actions/buttonLog';
import {
  DISPLAY_ERRORMESSAGE,
  CLOSED_ERRORMESSAGE,
  TOGGLE_DISPLAY_POPUP_COMMENT,
  TOGGLE_DISPLAY_UPDATE_PASSWORD,
  SUBMIT_COMMENT,
  CHANGE_FIELD,
  CLEAR_INPUT,
  SAVE_ERROR_MESSAGE,
} from 'src/actions/popup';

const initialState = {
  displayLogin: false,
  displaySignin: false,
  displayComment: false,
  displayErrorMessage: false,
  displayUpdatePassword: false,
  errorContent: '',
  errorEmail: '',
  errorPassword: '',
  errorNickname: '',
  comment: '',
  rating: 0,
  email: '',
  nickname: '',
  password: '',
};

const popupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_POPUP_SIGNIN:
      return {
        ...state,
        displaySignin: !state.displaySignin,
      };
    case TOGGLE_DISPLAY_POPUP_LOGIN:
      return {
        ...state,
        displayLogin: !state.displayLogin,
      };
    case TOGGLE_DISPLAY_POPUP_COMMENT:
      return {
        ...state,
        displayComment: !state.displayComment,
      };
    case TOGGLE_DISPLAY_UPDATE_PASSWORD:
      return {
        ...state,
        displayUpdatePassword: !state.displayUpdatePassword,
      };
    case DISPLAY_ERRORMESSAGE:
      return {
        ...state,
        displayErrorMessage: true,
        errorContent: action.content,
      };
    case CLOSED_ERRORMESSAGE:
      return {
        ...state,
        displayErrorMessage: false,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        comment: '',
        rating: '',
      };
    case CLEAR_INPUT:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SAVE_ERROR_MESSAGE:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    default:
      return state;
  }
};

export default popupReducer;
