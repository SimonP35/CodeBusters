// == Import npm
import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

// == Composant
const Footer = () => (
  <footer className="footer-container">
    <p className="footer-date">2021</p>
    <Link className="footer-link" to="/LegalNoticeContact">Contact/Mentions légales</Link>
  </footer>
);

// == Export
export default Footer;
