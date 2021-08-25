import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
// import Loader from 'src/components/Loader';
import games from 'src/assets/images/games.png';
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
      <div className="home-page">
        <main className="home-main">
          <div className="home-banniere">
            <img className="home-banniere-img" src={games} alt="banniere-img" />
          </div>
          <div className="popular-scenarios-container">
            {scenarios.map((scenario) => (
              <div className="popular-scenarios-scenario" key={scenario.id} onClick={() => (startGameCondition())}>
                <img className="popular-scenarios-scenario-image" src={scenario.image} alt="scenario-img" />
                <p className="popular-scenarios-scenario-text">SCENARIO X. Viens donc te gâcher le week-end à débugger le code dégueulasse de tonton Maurice !
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
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
