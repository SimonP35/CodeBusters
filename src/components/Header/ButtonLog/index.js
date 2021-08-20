import React from 'react';
import PropTypes from 'prop-types';

import './buttonlog.scss';

const displayLoginForm = () => {
  console.log('click sur login');
};

const displaySigninForm = () => {
  console.log('click sur signin');
};

const ButtonLog = ({ isLogged }) => (
  <div className="log-container">
    {
    !isLogged
    && (
      <>
        <button
          type="button"
          onClick={displaySigninForm}
          className="log-button"
          id="signin"
        >Inscription
        </button>
        <button
          type="button"
          onClick={displayLoginForm}
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
};

export default ButtonLog;

// export displayLoginForm;

// export displaySigninForm;

// SILOGGED : si istrue, on enlève le bouton d'inscription.
