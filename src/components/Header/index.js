import React from 'react';

import Nav from 'src/components/Nav';
import ButtonLog from 'src/components/Header/ButtonLog';
import Title from './Title';
import Logo from './Logo';

const Header = () => (
  <header className="header-container">
    <Title />
    <Logo />
    <ButtonLog />
    <Nav />
  </header>
);

export default Header;
