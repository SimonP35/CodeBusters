import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './updatePassword.scss';

const UpdatePassword = ({
  toggleDisplayUpdatePassword,
  changeField,
  password,
  submitUserPassword,
  isLogged,
}) => {
// if islogged = true submitUserPassword via authmiddleware

  const handlePassword = (evt) => {
    evt.preventDefault();
    submitUserPassword();
  };
  return (
    <div className="signin-background">
      <div className="signin-container">
        <button
          type="button"
          className="signin-closed"
          onClick={() => {
            toggleDisplayUpdatePassword();
          }}
        >       +
        </button>
        {
         isLogged
        && (
        <form className="signin-form" onSubmit={handlePassword}>
          Changer mon mot de passe
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={changeField}
            value={password}
            className="signin-field"
          />
          <p className="signin-password-info">* Vous devrez vous reconnecter suite aux modifications du profil.</p>
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

UpdatePassword.propTypes = {

  toggleDisplayUpdatePassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitUserPassword: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,

};

export default UpdatePassword;
