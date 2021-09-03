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
  submitUserUpdate,
  isLogged,
}) => {
// if islogged = false submitSignin / sinon submitUserUpdate via authmiddleware
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitSignin();
    toggleDisplaySignin();
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    submitUserUpdate();
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
        {
        !isLogged
        && (
        <form className="signin-form" onSubmit={handleSubmit}>
          M'inscrire
          <Field
            name="nickname"
            type="nickname"
            placeholder="nom"
            manageChange={changeField}
            value={nickname}
          />
          <Field
            type="email"
            name="email"
            placeholder="email"
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
          <p className="signin-password-info">* Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 chiffre et 1 caractère spécial.</p>
          <button className="signin-button" type="submit">
            OK
          </button>
        </form>
        )
        }
        {
    isLogged
    && (
    <form className="signin-form" onSubmit={handleUpdate}>
      Mettre mon profil à jour
      <Field
        name="nickname"
        type="nickname"
        placeholder={nickname}
        manageChange={changeField}
        value={nickname}
      />
      <Field
        type="email"
        name="email"
        placeholder={email}
        manageChange={changeField}
        value={email}
      />
      <button className="signin-button" type="submit">
        OK
      </button>
    </form>
    )
    }
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
  submitUserUpdate: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,

};

export default Signin;
