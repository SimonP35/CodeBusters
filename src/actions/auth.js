// === action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLICK_ON_LOGOUT = 'CLICK_ON_LOGOUT';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

// === action creators
export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue: newValue,
  name: identifier,
});

export const saveUserData = (nickname, email) => ({
  type: SAVE_USER_DATA,
  nickname: nickname,
  email: email,
});

export const handleLogOut = () => ({
  type: CLICK_ON_LOGOUT,
});

export const submitSignin = () => ({
  type: SUBMIT_SIGNIN,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitComment = () => ({
  type: SUBMIT_COMMENT,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
