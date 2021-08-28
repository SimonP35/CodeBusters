import { connect } from 'react-redux';

// on importe le composant de présentation
import Game from 'src/components/Game';
import { startGame, toggleDisplayPicture, setCurrentImg } from 'src/actions/game';

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
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Game);
