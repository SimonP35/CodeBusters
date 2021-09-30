import { connect } from 'react-redux';

// on importe le composant de présentation
import Profil from 'src/components/Profil';

import { toggleDisplayPopupSignin } from 'src/actions/buttonLog';
import { getUserScores } from '../../actions/auth';
import { toggleDisplayUpdatePassword } from '../../actions/popup';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  nickname: state.auth.nickname,
  password: state.auth.password,
  scores: state.auth.scores,
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleDisplaySignin: () => {
    dispatch(toggleDisplayPopupSignin());
  },
  toggleDisplayUpdatePassword: () => {
    dispatch(toggleDisplayUpdatePassword());
  },
  getUserScores: (scores) => {
    dispatch(getUserScores(scores));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
