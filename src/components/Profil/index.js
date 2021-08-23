import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './profil.scss';

const Profil = () => (
  <>
    <Header />
    <main className="profil-main">
      <div className="profil-container">
        <h2 className="profil-title">Votre profil</h2>
        <ul className="profil-list">
          <li className="profil-list-item">pseudo: xxxx</li>
          <li className="profil-list-item">email: xxxx</li>
        </ul>
        <a href="#">Changer votre mot de passe</a>
      </div>
    </main>
    <Footer />
  </>
);

export default Profil;
