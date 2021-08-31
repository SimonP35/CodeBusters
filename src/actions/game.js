export const START_GAME = 'START_GAME';

export const SAVE_DATA_GAME = 'SAVE_DATA_GAME';

export const SET_LOADING_GAME = 'SET_LOADING_GAME';

export const TOGGLE_DISPLAY_PICTURE = 'TOGGLE_DISPLAY_PICTURE';

export const SET_CURRENT_IMG = 'SET_CURRENT_IMG';

export const TOGGLE_DISPLAY_INPUT = 'TOGGLE_DISPLAY_INPUT';

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const SET_ANSWER = 'SET_ANSWER';

export const SET_WIN = 'SET_WIN';

export const END_GAME = 'END_GAME';

export const TOGGLE_DISPLAY_DESCRIPTION = 'TOGGLE_DISPLAY_DESCRIPTION';

export const SET_CURRENT_DESCRIPTION = 'SET_CURRENT_DESCRIPTION';

export const startGame = () => ({
  type: START_GAME,
});
export const saveDataGame = (status, items, background, id) => ({
  type: SAVE_DATA_GAME,
  status: status,
  items: items,
  background: background,
  id: id,
});

export const setLoadingGame = () => ({
  type: SET_LOADING_GAME,
});
export const toggleDisplayPicture = () => ({
  type: TOGGLE_DISPLAY_PICTURE,
});
export const setCurrentImg = (newImg) => ({
  type: SET_CURRENT_IMG,
  newImg: newImg,
});
export const toggleDisplayInput = () => ({
  type: TOGGLE_DISPLAY_INPUT,
});

export const submitAnswer = () => ({
  type: SUBMIT_ANSWER,
});

export const setAnswer = (newAnswer) => ({
  type: SET_ANSWER,
  newAnswer: newAnswer,
});

export const setWin = () => ({
  type: SET_WIN,
});

export const endGame = () => ({
  type: END_GAME,
});

export const toggleDisplayDescription = () => ({
  type: TOGGLE_DISPLAY_DESCRIPTION,
});

export const setCurrentDescription = (newDescription) => ({
  type: SET_CURRENT_DESCRIPTION,
  newDescription: newDescription,
});
