import React from 'react';
import PropTypes from 'prop-types';

import './buttonlog.scss';

const ButtonLog = ({
  isLogged,
  toggleDisplaySignin,
  toggleDisplayLogin,
  handleLogOut,
}) => (
  <div className="log-container">
    {/* Display login and signin options when not logged  */}

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

    {/* Display user message when logged  */}

    {
    isLogged
    && (
      <>
        <h3 className="log-text">Bonjour !</h3>
        <button
          type="button"
          onClick={() => {
            handleLogOut();
          }}
          className="log-button"
          id="logout"
        >Déconnexion
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
  handleLogOut: PropTypes.func.isRequired,
};

export default ButtonLog;
