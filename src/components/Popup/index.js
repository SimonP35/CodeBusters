import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import Signin from './Signin';
import Comment from './Comment';

import './popup.scss';

const Popup = ({
  displayLogin,
  displaySignin,
  displayComment,
  toggleDisplaySignin,
  toggleDisplayLogin,
  changeField,
  email,
  password,
}) => (
  <>
    {displayLogin && (
    <Login
      toggleDisplayLogin={toggleDisplayLogin}
      changeField={changeField}
      email={email}
      password={password}
    />
    )}
    {displaySignin && (
    <Signin
      toggleDisplaySignin={toggleDisplaySignin}
      changeField={changeField}
      email={email}
    />
    )}
    {displayComment && <Comment />}
  </>
);

Popup.propTypes = {
  displayLogin: PropTypes.bool.isRequired,
  displaySignin: PropTypes.bool.isRequired,
  displayComment: PropTypes.bool.isRequired,
  toggleDisplaySignin: PropTypes.func.isRequired,
  toggleDisplayLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Popup;
