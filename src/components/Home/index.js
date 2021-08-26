import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Game from 'src/components/Game';
// import Loader from 'src/components/Loader';
import banniere from 'src/assets/images/banniere.png';
import utils from 'src/utils';

import './home.scss';

const scenarios = utils[0].fourMostPopularScenarios;
// console.log(scenarios);

const Home = ({ isLogged, displayErrorMessage }) => {
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
      displayErrorMessage('Connectez-vous pour lancer un scenario');
    }
  };

  return (
    <>
      <Header />
      <main className="home-main">
        <div className="home-banniere">
          <img className="home-banniere-img" src={banniere} alt="banniere-img" />
        </div>
        <div className="popular-scenarios-container">
          {scenarios.map((scenario) => {
            // renvoi true si la valeur est vrai ce qui permet, à l'aide de className,
            // de conditionner la l'utilisation de la classe qui donne la couleur jaune à l'étoile.
            const one = scenario.rate >= 1;
            const two = scenario.rate >= 2;
            const three = scenario.rate >= 3;
            const four = scenario.rate >= 4;
            const five = scenario.rate === 5;
            return (
              <div className="popular-scenarios-scenario" key={scenario.id} onClick={() => (startGameCondition())}>
                <img className="popular-scenarios-scenario-image" src={scenario.image} alt="scenario-img" />
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
            );
          })}
        </div>
      </main>
      <Game />
      {/* <Loader /> */}
      <Footer />
    </>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  displayErrorMessage: PropTypes.func.isRequired,
};

export default Home;
