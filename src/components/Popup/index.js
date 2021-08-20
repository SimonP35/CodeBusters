import React from 'react';

import Login from './Login';
import Signin from './Signin';
import Mobile from './Mobile';

import './popup.scss';

const Popup = () => (
  <div className="popup-container">
    <Login />
    <Signin />
    <Mobile />
  </div>
);

export default Popup;
