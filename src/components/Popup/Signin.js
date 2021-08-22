import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './signin.scss';

const Signin = ({ toggleDisplaySignin, email, changeField }) => (
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
      <form className="signin-form">
        <Field
          type="email"
          name="email"
          placeholder="Adresse Email"
          manageChange={changeField}
          value={email}
        />
      </form>
    </div>
  </div>

);

Signin.propTypes = {
  toggleDisplaySignin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default Signin;
