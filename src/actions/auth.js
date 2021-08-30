// === action types
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLICK_ON_LOGOUT = 'CLICK_ON_LOGOUT';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';

// === action creators

export const saveUserData = (id, nickname, email, token) => ({
  type: SAVE_USER_DATA,
  id: id,
  nickname: nickname,
  email: email,
  token: token,
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
