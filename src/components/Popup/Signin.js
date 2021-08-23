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
    submitSignin();
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
          Formulaire d'inscription
          <Field
            name="nickname"
            type="nickname"
            placeholder="Nom"
            manageChange={changeField}
            value={nickname}
            className="signin-field"
          />
          <Field
            type="email"
            name="email"
            placeholder="Adresse Email"
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
          <button className="signin-button" type="submit">
            S'inscrire
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
