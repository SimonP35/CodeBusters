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
  submitSignin
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
      >       +
      </button>
      <form className="signin-form" onSubmit={handleSubmit}>
        Formulaire d'inscription
        <Field
          name="nickname"
          type="nickname"
          placeholder="Nom"
          manageChange={changeField}
          value={nickname}
        />
        <Field
          type="email"
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
        <button className="login-button" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  </div>
);

Signin.propTypes = {

  toggleDisplaySignin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitSignin: PropTypes.func.isRequired,

};

export default Signin;
