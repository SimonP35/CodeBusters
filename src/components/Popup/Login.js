import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './login.scss';

const Login = ({ toggleDisplayLogin, changeField, email }) => (
  <div className="login-background">
    <div className="login-container">
      <button
        type="button"
        className="signin-closed"
        onClick={() => {
          toggleDisplayLogin();
        }}
      >
        +
      </button>
      <form className="login-form">
        Formulaire de login
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          manageChange={changeField}
          value={email}
        />
        <input type="email" name="email" />
        <input className="login-button" type="submit" />
      </form>
    </div>
  </div>

);

Login.propTypes = {
  toggleDisplayLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default Login;
