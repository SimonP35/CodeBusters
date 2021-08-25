import { connect } from 'react-redux';

import { toggleDisplayPopupComment } from 'src/actions/popup';

// on importe le composant de présentation
import Win from 'src/components/Game/Win';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  displayComment: state.popup.displayComment,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleDisplayComment: () => {
    dispatch(toggleDisplayPopupComment());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Win);
