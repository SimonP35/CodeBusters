export const DISPLAY_ERRORMESSAGE = 'DISPLAY_ERRORMESSAGE';
export const CLOSED_ERRORMESSAGE = 'CLOSED_ERRORMESSAGE';
export const TOGGLE_DISPLAY_POPUP_COMMENT = 'TOGGLE_DISPLAY_POPUP_COMMENT';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CLEAR_INPUT = 'CLEAR_INPUT';

export const displayErrormessage = (content) => ({
  type: DISPLAY_ERRORMESSAGE,
  content: content,
});
export const closedErrormessage = () => ({
  type: CLOSED_ERRORMESSAGE,
});
export const toggleDisplayPopupComment = () => ({
  type: TOGGLE_DISPLAY_POPUP_COMMENT,
});
export const submitComment = () => ({
  type: SUBMIT_COMMENT,
});

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue: newValue,
  name: identifier,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
