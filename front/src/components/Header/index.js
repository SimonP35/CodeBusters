import React from 'react';

import Nav from 'src/containers/Nav';
import ButtonLog from 'src/containers/ButtonLog';
import Title from './Title';
import Logo from './Logo';

import './header.scss';

const Header = () => (
  <header className="header-container">
    <div className="header-top">
      <Logo />
      <Title />
      <ButtonLog />
    </div>
    <div className="header-bottom">
      <Nav />
    </div>

  </header>
);

export default Header;
