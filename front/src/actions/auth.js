// === action types
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLICK_ON_LOGOUT = 'CLICK_ON_LOGOUT';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';
export const SUBMIT_USER_UPDATE = 'SUBMIT_USER_UPDATE';
export const SUBMIT_USER_PASSWORD = 'SUBMIT_USER_PASSWORD';
export const GET_USER_SCORES = 'GET_USER_SCORES';
export const SAVE_USER_SCORES = 'SAVE_USER_SCORES';

// === action creators

export const saveUserData = (id, nickname, email, token) => ({
  type: SAVE_USER_DATA,
  id: id,
  nickname: nickname,
  email: email,
  token: token,
});

export const saveUserScores = (scores) => ({
  type: SAVE_USER_SCORES,
  scores: scores,
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
export const submitUserUpdate = () => ({
  type: SUBMIT_USER_UPDATE,
});
export const submitUserPassword = () => ({
  type: SUBMIT_USER_PASSWORD,
});
export const getUserScores = () => ({
  type: GET_USER_SCORES,
});
