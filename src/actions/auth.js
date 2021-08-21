/* actions qui concernent l'authentification */

// === action types
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

// === action creators
export const updateLoginField = (newValue, name) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue: newValue,
  name: name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserData = (token, nickname, isLogged) => ({
  type: SAVE_USER_DATA,
  token: token,
  nickname: nickname,
  logged: isLogged,
});
