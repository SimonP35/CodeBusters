export const DISPLAY_ERRORMESSAGE = 'DISPLAY_ERRORMESSAGE';

export const CLOSED_ERRORMESSAGE = 'CLOSED_ERRORMESSAGE';

export const displayErrormessage = (content) => ({
  type: DISPLAY_ERRORMESSAGE,
  content: content,
});
export const closedErrormessage = () => ({
  type: CLOSED_ERRORMESSAGE,
});
