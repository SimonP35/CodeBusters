import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import utils from 'src/utils';

import './profil.scss';

const { users } = utils[1];

const Profil = () => (
  <>
    <Header />
    <main className="profil-main">
      <div className="profil-container">
        <h2 className="profil-title">Votre profil</h2>
        <ul className="profil-list">
          <li className="profil-list-item">pseudo: {users[0].pseudo}</li>
          <li className="profil-list-item">email: {users[0].email}</li>
        </ul>
        <a href="#">Changer votre mot de passe</a>
      </div>
    </main>
    <Footer />
  </>
);

export default Profil;
