import React from 'react';
import PropTypes from 'prop-types';

import './signin.scss';

const Signin = ({ toggleDisplaySignin }) => (
  <div className="signin-container">
    <button
      type="button"
      className="signin-closed"
      onClick={() => {
        toggleDisplaySignin();
      }}
    >       +
    </button>
    <form className="signin-form">Formulaire d'inscription</form>
  </div>
);

Signin.propTypes = {
  toggleDisplaySignin: PropTypes.func.isRequired,
};
export default Signin;
