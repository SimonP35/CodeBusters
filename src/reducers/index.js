import { combineReducers } from 'redux';

// on importe tous les reducers

import authReducer from './authReducer';
import gameReducer from './gameReducer';
import popupReducer from './popupReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  // on crée un tiroir qui s'appelle recipes, et c'est recipesReducer qui
  // va gérer les données dans ce tiroir
  auth: authReducer,
  popup: popupReducer,
  game: gameReducer,
});

export default rootReducer;
