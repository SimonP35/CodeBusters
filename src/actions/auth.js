// === action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

// === action creators
export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  // valeur saisi dans l'input
  newValue: newValue,
  // identifiant permettant de cibler l'input
  name: identifier,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUserData = (token, nickname, isLogged) => ({
  type: SAVE_USER_DATA,
  token: token,
  nickname: nickname,
  logged: isLogged,
});
