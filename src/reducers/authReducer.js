import { CHANGE_FIELD } from 'src/actions/auth';

const initialState = {
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
