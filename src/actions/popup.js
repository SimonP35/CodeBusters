// === action types
export const CHANGE_FIELD = 'CHANGE_FIELD';

// === action creators
export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  // valeur saisi dans l'input
  newValue: newValue,
  // identifiant permettant de cibler l'input
  name: identifier,
});
