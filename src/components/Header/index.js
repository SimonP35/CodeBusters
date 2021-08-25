import React from 'react';

import Nav from 'src/containers/Nav';
import ButtonLog from 'src/containers/ButtonLog';
import Title from './Title';
import Logo from './Logo';

const Header = () => (
  <header className="header-container">
    <div>
      <Title />
      <Logo />
      <ButtonLog />
    </div>
    <div>
      <Nav />
    </div>

  </header>
);

export default Header;
