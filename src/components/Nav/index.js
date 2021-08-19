import React from 'react';
// import { NavLink } from 'react-router-dom';

// import Home from 'src/components/Home';
// import About from 'src/components/About';
// import Scenarios from 'src/components/Scenarios';
// import Profil from 'src/components/Profil';

import './nav.scss';

const Nav = () => (
  <div className="nav-container">
    <span className="nav-link">Accueil</span>
    <span className="nav-link">A propos</span>
    <span className="nav-link">Scénarios</span>
    <span className="nav-link">Profil</span>
  </div>
);

// Nav.propTypes = 

export default Nav;

// const Nav = () => (
//   <nav className="nav-container">
//     <NavLink
//       to="/"
//       className="nav-link"
//       activeClassName="nav-item--active"
//       exact
//     >
//       Accueil
//     </NavLink>
//     <NavLink
//       to="/about"
//       className="nav-link"
//       activeClassName="nav-item--active"
//       exact
//     >
//       A propos
//     </NavLink>
//     <NavLink
//       to="/scenarios"
//       className="nav-link"
//       activeClassName="nav-item--active"
//       exact
//     >
//       Scénarios
//     </NavLink>
//     <NavLink
//       to="/profil"
//       className="nav-link"
//       activeClassName="nav-item--active"
//       exact
//     >
//       Profil
//     </NavLink>
//   </nav>
// );

