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
          +
        </button>
        <form className="login-form" onSubmit={handleSubmit}>
          Formulaire de connexion
          <Field
            name="email"
            type="email"
            placeholder="Adresse Email"
            manageChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="mot de passe"
            manageChange={changeField}
            value={password}
          />
          <button className="login-button" type="submit">
            Se connecter
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
