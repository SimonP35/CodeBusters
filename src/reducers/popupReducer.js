import { CHANGE_FIELD } from 'src/actions/popup';

const initialState = {
  displayLogin: false,
  displaySignin: false,
  displayComment: false,
  displayMobil: false,
};

const popupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    // case SAVE_USER_DATA:
    //   return {
    //     ...state,
    //     isLogged: action.isLogged,
    //     token: action.token,
    //   };
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
