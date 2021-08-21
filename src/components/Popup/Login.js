import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

import './login.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-container">
      {isLogged && (
        <div className="login-container-logged">
          <p className="login-container-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
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
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;

      // <h4 className="login-field">Nom</h4>
      // <input type="text" name="name" placeholder="nom" />
      // <h4>Adresse email</h4>
      // <input type="email" name="email" placeholder="email" />
      // <h4>Mot de passe</h4>
      // <input type="password" name="password" placeholder="mot de passe" />
      // <input className="login-button" type="submit" />
