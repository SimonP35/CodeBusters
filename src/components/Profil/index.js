import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './profil.scss';

const Profil = ({
  nickname,
  email,
  scores,
  toggleDisplaySignin,
  getUserScores,
  isLogged,
}) => {
  useEffect(() => {
    getUserScores();
  }, []);

  return (
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
          </ul>
          <ul className="profil-list">
            <li className="profil-list-item">Mes résultats :</li>
            {/* Filter + Map sur les scores enregistrés en base qui sont fetch par le middleware */}
            {scores.filter((scoreResults) => scoreResults.score > 150).map((scoreResult) => (
              <li className="profil-list-info" key={scoreResult.created_at}>Mon score sur le scénario {scoreResult.scenario} : {Math.ceil(parseInt(scoreResult.score, 10) / 60)} minutes {parseInt(scoreResult.score, 10) % 60} secondes </li>
            ))}
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
          <a className="profil-link-password" href="http://3.238.70.10/reset-password" target="_blank" rel="noreferrer">Changer mon mot de passe</a>
        </div>
      </main>
      <Footer />
      {!isLogged && (<Redirect to="/" />)}
    </>
  );
};

Profil.propTypes = {
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  toggleDisplaySignin: PropTypes.func.isRequired,
  getUserScores: PropTypes.func.isRequired,
  scores: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Profil;
