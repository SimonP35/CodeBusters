import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/Popup';
import { toggleDisplayPopupSignin, toggleDisplayPopupLogin } from 'src/actions/buttonLog';
import {
  changeField,
  submitLogin,
  handleLogOut,
  submitSignin,
} from 'src/actions/auth';
import { closedErrormessage } from 'src/actions/popup';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  displayLogin: state.popup.displayLogin,
  displaySignin: state.popup.displaySignin,
  displayComment: state.popup.displayComment,
  displayErrorMessage: state.popup.displayErrorMessage,
  errorContent: state.popup.errorContent,
  email: state.auth.email,
  password: state.auth.password,
  nickname: state.auth.nickname,
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
  closedErrormessage: () => {
    dispatch(closedErrormessage());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
