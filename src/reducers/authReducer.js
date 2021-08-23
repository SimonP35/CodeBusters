import { SAVE_USER_DATA, CHANGE_FIELD } from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  nickname: '',
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
        nickname: action.nickname,
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
}

export default authReducer;
