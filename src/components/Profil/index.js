import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './profil.scss';

const Profil = ({ email, nickname }) => (
  <>
    <Header />
    <main className="profil-main">
      <div className="profil-container">
        <h2 className="profil-title">Votre profil</h2>
        <ul className="profil-list">
          <li className="profil-list-item">pseudo: {nickname}</li>
          <li className="profil-list-item">email: {email}</li>
        </ul>
        <a href="#">Changer votre mot de passe</a>
      </div>
    </main>
    <Footer />
  </>
);

Profil.propTypes = {
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default Profil;
