import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from 'src/components/Header';
import PropTypes from 'prop-types';
import Footer from 'src/components/Footer';

import classNames from 'classnames';

import utils from 'src/utils';
import './scenarios.scss';

const { scenarios } = utils[1];

const Scenarios = ({ isLogged, displayErrorMessage }) => {
  const history = useHistory();
  // fonction permettant de rediriger l'utilisateur sur la page game.
  const makeRedirection = () => {
    const url = '/game';
    history.push(url);
  };
  // fonction permettant de modifier la réaction du clique
  // sur le scénario en fonction de la connexion de l'utilisateur
  const startGameCondition = () => {
    if (isLogged) {
      makeRedirection();
    }
    else {
      displayErrorMessage('Connectez-vous pour lancer le scenario');
    }
  };
  return (
    <>
      <Header />
      <main className="scenarios-container">
        <div className="scenarios-list">
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
                    className="scenarios-scenario"
                    key={scenario.id}
                  >
                    <h2 className="scenarios-title">{scenario.nom}</h2>
                    <img className="scenarios-image" src={scenario.pic} alt="scenario" />
                    <p className="scenarios-text">{scenario.description}</p>
                    <h3 className="scenarios-subtitle">L'avis des joueurs : </h3>

                    <section className="scenarios-comment">" {scenario.comment} "</section>
                    <div className="scenarios-rate">
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
                {
                isLogged && scenario.status === 1
                && (
                <Link to={`/game/${slug}`}>
                  <div className="scenarios-scenario" key={scenario.id} onClick={() => (startGameCondition())}>
                    <h2 className="scenarios-title">{scenario.nom}</h2>
                    <img className="scenarios-image" src={scenario.pic} alt="scenario" />
                    <p className="scenarios-text">{scenario.description}</p>
                    <h3 className="scenarios-subtitle">L'avis des joueurs : </h3>

                    <section className="scenarios-comment">" {scenario.comment} "</section>
                    <div className="scenarios-rate">
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
                <>
                  <div
                    className="scenarios-scenario"
                    key={scenario.id}
                    onClick={() => {
                      displayErrorMessage('Connectez-vous pour lancer le scénario');
                    }}
                  >
                    <h2 className="scenarios-title">{scenario.nom}</h2>
                    <img className="scenarios-image" src={scenario.pic} alt="scenario" />
                    <p className="scenarios-text">{scenario.description}</p>
                    <h3 className="scenarios-subtitle">L'avis des joueurs : </h3>

                    <section className="scenarios-comment">" {scenario.comment} "</section>
                    <div className="scenarios-rate">
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
};

Scenarios.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  displayErrorMessage: PropTypes.func.isRequired,
};

export default Scenarios;
