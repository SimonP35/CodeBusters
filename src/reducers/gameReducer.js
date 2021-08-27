import { START_GAME } from 'src/actions/game';

const initialState = {
  gamePlay: false,
};

const gameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gamePlay: !state.gamePlay,
      };

    default:
      return state;
  }
};

export default gameReducer;
