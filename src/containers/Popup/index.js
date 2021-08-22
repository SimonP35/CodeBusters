import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/Popup';
import { toggleDisplayPopupSignin, toggleDisplayPopupLogin } from 'src/actions/buttonLog';
import { changeField } from 'src/actions/popup';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  displayLogin: state.popup.displayLogin,
  displaySignin: state.popup.displaySignin,
  displayComment: state.popup.displayComment,
  displayMobil: state.popup.displayMobil,
  email: state.auth.email,
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
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
