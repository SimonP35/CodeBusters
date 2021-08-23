// === action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLICK_ON_LOGOUT = 'CLICK_ON_LOGOUT';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';

// === action creators
export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue: newValue,
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

export const handleLogOut = () => ({
  type: CLICK_ON_LOGOUT,
});

export const submitSignin = () => ({
  type: SUBMIT_LOGIN,
});
