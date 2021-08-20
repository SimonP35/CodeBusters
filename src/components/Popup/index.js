import React from 'react';

import displayLoginForm from 'src/components/ButtonLog/index.js';

import Login from './Login';
import Signin from './Signin';
import Mobile from './Mobile';
import Comment from './Comment';

import './popup.scss';

const Popup = () => (
  <div className="popup-container">
    {(displayLoginForm) && <Login />}
    <Signin />
    <Mobile />
    <Comment />
  </div>
);

export default Popup;
