import React from 'react';

import Nav from 'src/components/Nav';
import Title from './Title';
import Logo from './Logo';
import ButtonLog from './ButtonLog';

const Header = () => (
  <header className="header-container">
    <Title />
    <Logo />
    <ButtonLog />
    <Nav />
  </header>
);

export default Header;
