import {
  SAVE_DATA_GAME,
  SET_LOADING_GAME,
  TOGGLE_DISPLAY_PICTURE,
  SET_CURRENT_IMG,
} from 'src/actions/game';

const initialState = {
  status: 0,
  items: {},
  loadingGame: true,
  background: '',
  displayPicture: false,
  currentImg: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_DATA_GAME:
      return {
        ...state,
        status: action.status,
        items: action.items,
        background: action.background,
      };
    case SET_LOADING_GAME:
      return {
        ...state,
        loadingGame: !state.loadingGame,
      };
    case TOGGLE_DISPLAY_PICTURE:
      return {
        ...state,
        displayPicture: !state.displayPicture,
      };
    case SET_CURRENT_IMG:
      return {
        ...state,
        currentImg: action.newImg,
      };
    default:
      return state;
  }
}

export default authReducer;
