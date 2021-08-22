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
}) => (
  <>
    {displayLogin && <Login />}
    {displaySignin && <Signin />}
    {displayComment && <Comment />}
  </>
);

Popup.propTypes = {
  displayLogin: PropTypes.bool.isRequired,
  displaySignin: PropTypes.bool.isRequired,
  displayComment: PropTypes.bool.isRequired,
};

export default Popup;
