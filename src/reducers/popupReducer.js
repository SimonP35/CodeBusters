import { TOGGLE_DISPLAY_POPUP_SIGNIN, TOGGLE_DISPLAY_POPUP_LOGIN, TOGGLE_DISPLAY_POPUP_COMMENT } from 'src/actions/buttonLog';
import { DISPLAY_ERRORMESSAGE, CLOSED_ERRORMESSAGE } from 'src/actions/popup';

const initialState = {
  displayLogin: false,
  displaySignin: false,
  displayComment: false,
  displayErrorMessage: false,
  errorContent: '',
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
    default:
      return state;
  }
};

export default popupReducer;
