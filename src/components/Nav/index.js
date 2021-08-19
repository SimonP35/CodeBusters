import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav-container">
    <NavLink
      exact
      to="/"
      className="nav-link"
      activeClassName="nav-link-active"
    >
      Accueil
    </NavLink>
    <NavLink
      exact
      to="/about"
      className="nav-link"
      activeClassName="nav-link-active"
    >
      A propos
    </NavLink>
    <NavLink
      exact
      to="/scenarios"
      className="nav-link"
      activeClassName="nav-link-active"
    >
      Scénarios
    </NavLink>
    <NavLink
      exact
      to="/profil"
      className="nav-link"
      activeClassName="nav-link-active"
    >
      Profil
    </NavLink>
  </nav>
);

export default Nav;
