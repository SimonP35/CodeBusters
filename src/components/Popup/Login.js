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
  clearInput,
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
            clearInput('password', '');
          }}
        >
          +
        </button>
        <form className="login-form" onSubmit={handleSubmit}>
          Me connecter
          <Field
            name="email"
            type="email"
            placeholder="Adresse email"
            manageChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
          />
          <button className="login-button" type="submit">
            OK
          </button>
          <a className="login-password-info" href="http://3.238.70.10/reset-password" target="_blank" rel="noreferrer">Mot de passe oublié ?</a>
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
  clearInput: PropTypes.func.isRequired,

};

export default Login;
