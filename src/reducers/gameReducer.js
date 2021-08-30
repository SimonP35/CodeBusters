import {
  SAVE_DATA_GAME,
  SET_LOADING_GAME,
  TOGGLE_DISPLAY_PICTURE,
  SET_CURRENT_IMG,
  TOGGLE_DISPLAY_INPUT,
  SET_ANSWER,
  SET_WIN,
} from 'src/actions/game';
import { CHANGE_FIELD } from 'src/actions/popup';

const initialState = {
  status: 0,
  items: {},
  loadingGame: true,
  background: '',
  displayPicture: false,
  currentImg: '',
  displayInput: false,
  answer: '',
  win: false,
  loose: false,
  inputGameValue: '',
};

function gameReducer(state = initialState, action = {}) {
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
    case TOGGLE_DISPLAY_INPUT:
      return {
        ...state,
        displayInput: !state.displayInput,
      };
    case SET_ANSWER:
      return {
        ...state,
        answer: action.newAnswer,
      };
    case SET_WIN:
      return {
        ...state,
        win: true,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    default:
      return state;
  }
}

export default gameReducer;
