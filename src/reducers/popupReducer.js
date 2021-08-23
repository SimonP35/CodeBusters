import { TOGGLE_DISPLAY_POPUP_SIGNIN, TOGGLE_DISPLAY_POPUP_LOGIN } from 'src/actions/buttonLog';

const initialState = {
  displayLogin: false,
  displaySignin: false,
  displayComment: false,
  displayMobil: false,
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
    default:
      return state;
  //   case CLICK_ON_LOGOUT:
  //     return {
  //       ...state,
  //       isLogged: false,
  //       email: '',
  //       password: '',
  //     };
  // }
  }
};

export default popupReducer;
