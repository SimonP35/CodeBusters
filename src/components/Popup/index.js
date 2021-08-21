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
}) => (
  <>
    {displayLogin && <Login toggleDisplayLogin={toggleDisplayLogin} />}
    {displaySignin && <Signin toggleDisplaySignin={toggleDisplaySignin} />}
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
};

export default Popup;
