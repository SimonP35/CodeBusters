import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import games from 'src/assets/images/games.png';

import './profil.scss';

const Profil = ({ email, nickname }) => (
  <>
    <Header />
    <main className="profil-main">
      <div className="profil-container">
        <h2 className="profil-title">Votre profil</h2>
        <img className="profil-pic" src={games} alt="banniere-img" />
        <ul className="profil-list">
          <li className="profil-list-item">Pseudo: {nickname}</li>
          <li className="profil-list-item">Email: {email}</li>
        </ul>
        <a className="profil-button" href="#">Mettre mes informations à jour</a>
        <a className="profil-button" href="#">Changer votre mot de passe</a>
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
