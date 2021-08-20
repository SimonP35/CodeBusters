import React from 'react';
import PropTypes from 'prop-types';

import './buttonlog.scss';

const ButtonLog = ({ isLogged, toggleDisplay }) => (
  <div className="log-container">
    {/* affichage des boutons inscription et connexion seulement si islogged vaut false */}
    {
    !isLogged
    && (
      <>
        <button
          type="button"
          // onClick={toggleDisplay()}
          className="log-button"
          id="signin"
        >Inscription
        </button>
        <button
          type="button"
          // onClick={toggleDisplay('displayLogin')}
          className="log-button"
          id="login"
        >Connexion
        </button>
      </>
    )
    }
  </div>
);

ButtonLog.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleDisplay: PropTypes.func.isRequired,
};

export default ButtonLog;

// export displayLoginForm;

// export displaySigninForm;

// SILOGGED : si istrue, on enlève le bouton d'inscription.
