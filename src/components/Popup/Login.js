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
    <>
      <div className="login-container">
        <a className="popup-button-close" href="">+</a>
        {isLogged && (
          <div className="login-container-logged">
            <p className="login-container-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="login-button-off"
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
              className="login-button-ok"
            >
              HOP !
            </button>
          </form>
        )}
      </div>
      <div className="login-container-bottom" />
    </>
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
