import React from 'react';
// import PropTypes from 'prop-types';

import './buttonlog.scss';

const displayLoginForm = () => {
  console.log('click sur login');
};

const displaySigninForm = () => {
  console.log('click sur signin');
};

const ButtonLog = ({}) => (
  <div className="log-container">
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
  </div>
);

// ButtonLog.propTypes = {
//   displaySigninForm: PropTypes.func.isRequired,
//   displayLoginForm: PropTypes.func.isRequired,
// };

export default ButtonLog;
