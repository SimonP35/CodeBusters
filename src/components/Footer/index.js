// == Import npm
import React from 'react';
import './footer.scss';
import copyright from 'src/assets/img/copyright.svg';
// == Composant
const Footer = () => (
  <footer className="footer">
      <img src={copyright} alt="copyright"/>
      <span className="footer-date">2021</span>
      <span className="footer-link">Contacts</span>
      <span className="footer-link">Mentions légales</span>
  </footer>
);

// == Export
export default Footer;
