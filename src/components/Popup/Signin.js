import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './signin.scss';

const Signin = ({
  toggleDisplaySignin,
  email,
  changeField,
  password,
  nickname,
  submitSignin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if islogged = false / sinon submitUserData via authmiddleware
    submitSignin();
    toggleDisplaySignin();
  };
  return (
    <div className="signin-background">
      <div className="signin-container">
        <button
          type="button"
          className="signin-closed"
          onClick={() => {
            toggleDisplaySignin();
          }}
        >       x
        </button>
        <form className="signin-form" onSubmit={handleSubmit}>
          Mes informations personnelles
          <Field
            name="nickname"
            type="nickname"
            placeholder={`nom ${nickname}`}
            manageChange={changeField}
            value={nickname}
            className="signin-field"
          />
          <Field
            type="email"
            name="email"
            placeholder={`email ${email}`}
            manageChange={changeField}
            value={email}
            className="signin-field"
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
            className="signin-field"
          />
          <p className="signin-password-info">* Le mot de passe doit contenir 1 majuscule, 1 chiffre et 1 caractère spécial.</p>
          <button className="signin-button" type="submit">
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

Signin.propTypes = {

  toggleDisplaySignin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitSignin: PropTypes.func.isRequired,

};

export default Signin;
