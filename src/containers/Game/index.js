import { connect } from 'react-redux';

// on importe le composant de présentation
import Game from 'src/components/Game';

import {
  startGame,
  toggleDisplayPicture,
  setCurrentImg,
  toggleDisplayInput,
  setAnswer,
  setWin,
  submitAnswer,
  endGame,
  toggleDisplayDescription,
  setCurrentDescription,
} from 'src/actions/game';

import { changeField, toggleDisplayPopupComment } from 'src/actions/popup';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  status: state.game.status,
  items: state.game.items,
  loadingGame: state.game.loadingGame,
  background: state.game.background,
  displayPicture: state.game.displayPicture,
  currentImg: state.game.currentImg,
  displayInput: state.game.displayInput,
  answer: state.game.answer,
  inputGameValue: state.game.inputGameValue,
  win: state.game.win,
  displayDescription: state.game.displayDescription,
  currentDescription: state.game.currentDescription,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  startGame: () => {
    dispatch(startGame());
  },

  toggleDisplayPicture: () => {
    dispatch(toggleDisplayPicture());
  },

  setCurrentImg: (newImg) => {
    dispatch(setCurrentImg(newImg));
  },

  toggleDisplayInput: () => {
    dispatch(toggleDisplayInput());
  },

  setAnswer: (newAnswer) => {
    dispatch(setAnswer(newAnswer));
  },

  setWin: () => {
    dispatch(setWin());
  },

  submitAnswer: () => {
    dispatch(submitAnswer());
  },

  changeField: (newValue, identifier) => {
    dispatch(changeField(newValue, identifier));
  },

  toggleDisplayComment: () => {
    dispatch(toggleDisplayPopupComment());
  },

  toggleDisplayDescription: () => {
    dispatch(toggleDisplayDescription());
  },

  endGame: () => {
    dispatch(endGame());
  },

  setCurrentDescription: (newDescription) => {
    dispatch(setCurrentDescription(newDescription));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Game);
