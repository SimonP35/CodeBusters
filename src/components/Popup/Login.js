import React from 'react';

import './login.scss';

const Login = () => (
  <div className="login-container">
    <form className="login-form">
      Formulaire de login
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input className="login-button" type="submit" />
    </form>
  </div>
);

export default Login;
