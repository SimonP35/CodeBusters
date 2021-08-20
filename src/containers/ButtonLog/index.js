import { connect } from 'react-redux';

import { toggleDisplayPopupSignin, toggleDisplayPopupLogin  } from 'src/actions/buttonLog';
// on importe le composant de présentation
import ButtonLog from 'src/components/Header/ButtonLog';


// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleDisplaySignin: () => {dispatch(toggleDisplayPopupSignin())},
  toggleDisplayLogin: () => {dispatch(toggleDisplayPopupLogin())}

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ButtonLog);
