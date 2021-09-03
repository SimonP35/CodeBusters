import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import utils from 'src/utils';

import './home.scss';

const { scenarios } = utils[1];

const Home = ({
  isLogged,
  displayErrorMessage,
}) => (
  <>
    <Header />
    <main className="home-main">
      <p className="home-text">La plateforme d'escape game pour les devs</p>
      <div className="popular-scenarios-container">
        {scenarios.map((scenario) => {
          // renvoi true si la valeur est vrai ce qui permet, à l'aide de className,
          // de conditionner la l'utilisation de la classe qui donne la couleur jaune à l'étoile.
          const one = scenario.rate >= 1;
          const two = scenario.rate >= 2;
          const three = scenario.rate >= 3;
          const four = scenario.rate >= 4;
          const five = scenario.rate === 5;
          const { slug } = scenario;
          return (
            <div key={scenario.id}>
              {
                isLogged && scenario.status === 1
                && (
                <Link to={`/game/${slug}`}>
                  <div className="popular-scenarios-scenario" key={scenario.id}>
                    <img className="popular-scenarios-scenario-image" src={scenario.pic} alt="scenario-img" />
                    <h3 className="popular-scenarios-subtitle">{scenario.nom}</h3>
                    <p className="popular-scenarios-scenario-text">{scenario.description}</p>
                    <div className="popular-scenarios-scenario-rate">
                      <ul>
                        <li className={classNames({ '--gold': one })}>&#9733;</li>
                        <li className={classNames({ '--gold': two })}>&#9733;</li>
                        <li className={classNames({ '--gold': three })}>&#9733;</li>
                        <li className={classNames({ '--gold': four })}>&#9733;</li>
                        <li className={classNames({ '--gold': five })}>&#9733;</li>
                      </ul>
                    </div>
                  </div>
                </Link>
                )
              }
              {
                !isLogged && scenario.status === 1
                && (
                <div
                  className="popular-scenarios-scenario"
                  key={scenario.id}
                  onClick={() => {
                    displayErrorMessage('Connectez-vous pour lancer le scénario');
                  }}
                >
                  <img className="popular-scenarios-scenario-image" src={scenario.pic} alt="scenario-img" />
                  <h3 className="popular-scenarios-subtitle">{scenario.nom}</h3>
                  <p className="popular-scenarios-scenario-text">{scenario.description}</p>
                  <div className="popular-scenarios-scenario-rate">
                    <ul>
                      <li className={classNames({ '--gold': one })}>&#9733;</li>
                      <li className={classNames({ '--gold': two })}>&#9733;</li>
                      <li className={classNames({ '--gold': three })}>&#9733;</li>
                      <li className={classNames({ '--gold': four })}>&#9733;</li>
                      <li className={classNames({ '--gold': five })}>&#9733;</li>
                    </ul>
                  </div>
                </div>
                )
              }
              {
               scenario.status === 0
                && (
                  <>
                    <div
                      className="unavailable"
                      onClick={() => {
                        displayErrorMessage('Désolé mais ce scénario est actuellement indisponible');
                      }}
                    />
                    <div
                      className="popular-scenarios-scenario"
                      key={scenario.id}
                    >
                      <img className="popular-scenarios-scenario-image" src={scenario.pic} alt="scenario-img" />
                      <h3 className="popular-scenarios-subtitle">{scenario.nom}</h3>
                      <p className="popular-scenarios-scenario-text">{scenario.description}</p>
                      <div className="popular-scenarios-scenario-rate">
                        <ul>
                          <li className={classNames({ '--gold': one })}>&#9733;</li>
                          <li className={classNames({ '--gold': two })}>&#9733;</li>
                          <li className={classNames({ '--gold': three })}>&#9733;</li>
                          <li className={classNames({ '--gold': four })}>&#9733;</li>
                          <li className={classNames({ '--gold': five })}>&#9733;</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          );
        })}
      </div>
    </main>
    <Footer />
  </>
);

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  displayErrorMessage: PropTypes.func.isRequired,
};

export default Home;
