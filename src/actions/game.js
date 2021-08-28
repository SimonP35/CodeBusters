export const START_GAME = 'START_GAME';

export const SAVE_DATA_GAME = 'SAVE_DATA_GAME';

export const SET_LOADING_GAME = 'SET_LOADING_GAME';

export const TOGGLE_DISPLAY_PICTURE = 'TOGGLE_DISPLAY_PICTURE';

export const SET_CURRENT_IMG = 'SET_CURRENT_IMG';

export const startGame = () => ({
  type: START_GAME,
});
export const saveDataGame = (status, items, background) => ({
  type: SAVE_DATA_GAME,
  status: status,
  items: items,
  background: background,
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
