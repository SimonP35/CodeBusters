import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({
  isLogged,
}) => (
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
    {/* Display user profil when logged  */}
    {
isLogged
&& (
<NavLink
  exact
  to="/profil"
  className="nav-link"
  activeClassName="nav-link-active"
>
  Profil
</NavLink>
)
}
  </nav>
);

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Nav;

