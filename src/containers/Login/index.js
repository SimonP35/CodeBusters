import { connect } from 'react-redux';

// on importe le composant de présentation
import Login from 'src/components/Popup/Login';

import { updateLoginField, logIn } from '../../actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateLoginField(newValue, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
