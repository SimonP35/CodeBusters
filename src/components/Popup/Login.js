import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './login.scss';

const Login = ({
  toggleDisplayLogin,
  changeField,
  email,
  password,
  submitLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
    toggleDisplayLogin();
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <button
          type="button"
          className="login-closed"
          onClick={() => {
            toggleDisplayLogin();
          }}
        >
          x
        </button>
        <form className="login-form" onSubmit={handleSubmit}>
          Me connecter
          <Field
            name="email"
            type="email"
            placeholder="Adresse email"
            manageChange={changeField}
            value={email}
            className="login-field"
          />
          <a className="login-password-info" href="http://3.238.70.10/reset-password" target="_blank">Mot de passe oublié ?</a>
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
            className="login-field"
          />
          <button className="login-button" type="submit">
            OK
          </button>
        </form>
      </div>
    </div>

  );
};

Login.propTypes = {

  toggleDisplayLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitLogin: PropTypes.func.isRequired,

};

export default Login;
