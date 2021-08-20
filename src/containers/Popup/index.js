import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/Popup';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  displayLogin: state.popup.displayLogin,
  displaySignin: state.popup.displaySignin,
  displayComment: state.popup.displayComment,
  displayMobil: state.popup.displayMobil,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = () => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
