import { connect } from 'react-redux';

// on importe le composant de présentation
import Game from 'src/components/Game';
import { startGame } from 'src/actions/game';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  startGame: () => {
    dispatch(startGame());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Game);
