import React from 'react';

import Nav from 'src/components/Nav';
import Title from './Title';
import Logo from './Logo';

const Header = () => (
  <header className="header-container">
    <Title />
    <Logo />
    <Nav />
  </header>
);

export default Header;
