import { connect } from 'react-redux';

// on importe le composant de présentation
import Home from 'src/components/Home';
import { displayErrormessage } from 'src/actions/popup';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  displayErrorMessage: (content) => {
    dispatch(displayErrormessage(content));
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
