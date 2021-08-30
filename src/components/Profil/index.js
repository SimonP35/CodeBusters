import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './profil.scss';

const Profil = ({ email, nickname, toggleDisplaySignin }) => (
  <>
    <Header />
    <main className="profil-main">
      <div className="profil-container">
        <h2 className="profil-title">Mon profil</h2>
        <ul className="profil-list">
          <li className="profil-list-item">Pseudo :</li>
          <li className="profil-list-info">{nickname}</li>
          <li className="profil-list-item">Email :</li>
          <li className="profil-list-info">{email}</li>
          <li className="profil-list-item">Mes scores :</li>
          <li className="profil-list-info">Mon meilleur temps est de x mn sur xx</li>
        </ul>
        {/* Au clic sur un bouton on affiche un popup signin form */}
        <button
          type="button"
          onClick={() => {
            toggleDisplaySignin();
          }}
          className="profil-button"
          id="signin-update"
        >Mettre mes informations à jour
        </button>
        {/* Au clic sur le lien on ouvre une fenêtre avec le lien pour changer son mdp */}
        <a className="profil-link-password" href="#">Changer mon mot de passe</a>
      </div>
    </main>
    <Footer />
  </>
);

Profil.propTypes = {
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  toggleDisplaySignin: PropTypes.func.isRequired,
};

export default Profil;
