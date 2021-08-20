import React from 'react';

import logo from 'src/assets/images/logocb.svg';

import './logo.scss';

const Logo = () => (
  <div className="logo-container">
    <img className="logo-logo" src={logo} alt="codebusters logo" />
  </div>
);

export default Logo;
