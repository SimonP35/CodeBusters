import React from 'react';
import PropTypes from 'prop-types';

import './buttonlog.scss';

const ButtonLog = ({ isLogged, toggleDisplaySignin, toggleDisplayLogin }) => (
  <div className="log-container">
    {/* affichage des boutons inscription et connexion seulement si islogged vaut false */}
    {
    !isLogged
    && (
      <>
        <button
          type="button"
          onClick={() => {
            toggleDisplaySignin();
          }}
          className="log-button"
          id="signin"
        >Inscription
        </button>
        <button
          type="button"
          onClick={() => {
            toggleDisplayLogin();
          }}
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
  toggleDisplaySignin: PropTypes.func.isRequired,
  toggleDisplayLogin: PropTypes.func.isRequired,
};

export default ButtonLog;
