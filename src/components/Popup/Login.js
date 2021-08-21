import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';

const Login = ({ toggleDisplayLogin }) => (
  <div className="login-container">
    <button
      type="button"
      className="signin-closed"
      onClick={() => {
        toggleDisplayLogin();
      }}
    >       +
    </button>
    <form className="login-form">
      Formulaire de login
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input className="login-button" type="submit" />
    </form>
  </div>
);

Login.propTypes = {
  toggleDisplayLogin: PropTypes.func.isRequired,
};

export default Login;
