// == Import npm
import React from 'react';
import './noticeContact.scss';

// == Composant
const LegalNoticeContact = () => (
  <div className="notice-container">
    <h2 className="notice-title">TITRE PAGE</h2>
    <h3 className="notice-subtitle">SOUS TITRE OPTIONNEL</h3>
    <p className="notice-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <a className="notice-link" href="">LIEN OPTIONNEL</a>
  </div>
);

// == Export
export default LegalNoticeContact;
