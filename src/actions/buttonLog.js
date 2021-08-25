// === action types

export const TOGGLE_DISPLAY_POPUP_SIGNIN = 'TOGGLE_DISPLAY_POPUP_SIGNIN';
export const TOGGLE_DISPLAY_POPUP_LOGIN = 'TOGGLE_DISPLAY_POPUP_LOGIN';
export const TOGGLE_DISPLAY_POPUP_COMMENT = 'TOGGLE_DISPLAY_POPUP_COMMENT';

// === action creators

export const toggleDisplayPopupSignin = () => ({
  type: TOGGLE_DISPLAY_POPUP_SIGNIN,
});

export const toggleDisplayPopupLogin = () => ({
  type: TOGGLE_DISPLAY_POPUP_LOGIN,
});

export const toggleDisplayPopupComment = () => ({
  type: TOGGLE_DISPLAY_POPUP_COMMENT,
});
