// == Import npm
import React from 'react';
import './noticeContact.scss';

// == Composant
const LegalNoticeContact = () => (
  <div className="notice-container">
    <h2 className="notice-title">Politique sur les Cookies</h2>
      <p className="notice-paragraph">Les cookies serviont à vous identifier</p>
    <h2 className="notice-title">Données personnelles</h2>
      <p className="notice-paragraph">CodeBusters est un projet de fin de formation vos données personnelles seront stockée en base de donnée pour vous identifier</p>
  </div>
);

// == Export
export default LegalNoticeContact;
