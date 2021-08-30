import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/Popup';

import { toggleDisplayPopupSignin, toggleDisplayPopupLogin } from 'src/actions/buttonLog';
import {
  submitLogin,
  handleLogOut,
  submitSignin,
  submitUserUpdate,
} from 'src/actions/auth';
import {
  changeField,
  closedErrormessage,
  toggleDisplayPopupComment,
  submitComment,
} from 'src/actions/popup';
import { toggleDisplayInput, submitAnswer } from 'src/actions/game';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  displayLogin: state.popup.displayLogin,
  displaySignin: state.popup.displaySignin,
  displayComment: state.popup.displayComment,
  displayErrorMessage: state.popup.displayErrorMessage,
  comment: state.popup.comment,
  rating: state.popup.rating,
  isLogged: state.auth.isLogged,
  errorContent: state.popup.errorContent,
  email: state.auth.email,
  password: state.auth.password,
  nickname: state.auth.nickname,
  displayInput: state.game.displayInput,
  inputGameValue: state.popup.inputGameValue,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  toggleDisplaySignin: () => {
    dispatch(toggleDisplayPopupSignin());
  },
  toggleDisplayLogin: () => {
    dispatch(toggleDisplayPopupLogin());
  },
  changeField: (newValue, identifier) => {
    dispatch(changeField(newValue, identifier));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
  handleLogOut: () => {
    dispatch(handleLogOut());
  },
  submitSignin: () => {
    dispatch(submitSignin());
  },
  toggleDisplayComment: () => {
    dispatch(toggleDisplayPopupComment());
  },
  submitComment: () => {
    dispatch(submitComment());
  },
  closedErrormessage: () => {
    dispatch(closedErrormessage());
  },
  toggleDisplayInput: () => {
    dispatch(toggleDisplayInput());
  },
  submitAnswer: () => {
    dispatch(submitAnswer());
  },
  submitUserUpdate: () => {
    dispatch(submitUserUpdate());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
