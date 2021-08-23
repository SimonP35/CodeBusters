import React from 'react';
// import PropTypes from 'prop-types';
import Field from './Field';

import './signin.scss';

const Signin = ({

  email,
  password,
  nickname,
  changeField,
  handleLogin,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

  <div className="signin-container">
    <a className="popup-button-close" href="">+</a>
    <form autoComplete="off" className="signin-form"onSubmit={handleSubmit}>
      <h3 className="signin-title">Formulaire d'inscription</h3>
      <Field
        name="email"
        placeholder="Adresse Email"
        manageChange={changeField}
        value={email}
      />
      <Field
        name="nickname"
        type="name"
        placeholder="Nom"
        manageChange={changeField}
        value={nickname}
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
        C'est parti !
      </button>
    </form>
  </div>
);

// Login.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   nickname: PropTypes.string.isRequired,

//   /** called when onChange event is received by an input, two parameters :
//    * - new value
//    * - name
//    */
//   changeField: PropTypes.func.isRequired,
//   handleLogin: PropTypes.func.isRequired,
// };

export default Signin;
