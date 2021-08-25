import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from 'src/components/Header';
import PropTypes from 'prop-types';
import Footer from 'src/components/Footer';
import utils from 'src/utils';
import './scenarios.scss';

const scenarios = utils[0].fourMostPopularScenarios;

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
      <main className="scenarios-main">
        <p className="scenarios-describe">
          t is a long established fact that a rea
          er will be distracted by the readable content o
          f a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less nor
          mal distribution of letters, as opposed to using 'Co
          ntent here, content here', making it look like readab
          le English. Many desktop publishing packages and web pag
          e editors now use Lorem Ipsum as their default model tex
          t, and a search for 'lorem ipsum' will uncover many web s
          ites still in their infancy. Various versions have evolve
          d over the years, sometimes by accident, sometimes on purp
          ose (injected humour and the like).
        </p>
        <div className="scenarios-container">
          {scenarios.map((scenario) => (
            <div className="scenarios-map" key={scenario.id} onClick={() => (startGameCondition())}>
              <img className="scenarios-image" src={scenario.image} alt="illustred" />
              <h2 className="scenarios-title">{scenario.story}</h2>
              <section className="scenarios-comment">{scenario.comment}</section>
            </div>
          ))}
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
