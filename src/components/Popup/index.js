import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import Signin from './Signin';
import Mobile from './Mobile';
import Comment from './Comment';

import './popup.scss';

const Popup = ({
  displayLogin,
  displaySignin,
  displayComment,
  displayMobil,
  toggleDisplaySignin,
  toggleDisplayLogin,
  changeField,
  email,
}) => (
  <>
    {displayLogin && (
    <Login
      toggleDisplayLogin={toggleDisplayLogin}
      changeField={changeField}
      email={email}
    />
    )}
    {displaySignin && (
    <Signin
      toggleDisplaySignin={toggleDisplaySignin}
      changeField={changeField}
      email={email}
    />
    )}
    {displayMobil && <Mobile />}
    {displayComment && <Comment />}
  </>
);

Popup.propTypes = {
  displayLogin: PropTypes.bool.isRequired,
  displaySignin: PropTypes.bool.isRequired,
  displayComment: PropTypes.bool.isRequired,
  displayMobil: PropTypes.bool.isRequired,
  toggleDisplaySignin: PropTypes.func.isRequired,
  toggleDisplayLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default Popup;
