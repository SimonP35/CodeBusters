// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './noticeContact.scss';

// == Composant
const LegalNoticeContact = () => (
  <>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <Header />
    <div className="notice-container">
      <h2 className="notice-title">Mentions légales</h2>
      <h3 className="notice-subtitle">Éditeur</h3>
      <p className="notice-text">
        L'édition du site est assurée par le groupe d'étudiants
        CodeBusters celui-ci n'a pas d'intention commerciale,
        mais sert de projet de fin d'étude.
      </p>
      <h3 className="notice-subtitle">Cookies</h3>
      <p className="notice-text">
        Le site CodeBusters n'utilise pas de cookies.
      </p>
      <h3 className="notice-subtitle">Collecte des données</h3>
      <p className="notice-text">
        Le site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés.
      </p>
      <h3 className="notice-subtitle">Propriété intellectuelle</h3>
      <p className="notice-text">
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de tout ou partie du site CodeBusters, sans autorisation
        de l'Éditeur est prohibé.
      </p>
      <h3 className="notice-subtitle" href="">Contact</h3>
      <p className="notice-text">codebusters.trinity@gmail.com</p>
    </div>
    <Footer />
  </>
);

// == Export
export default LegalNoticeContact;
