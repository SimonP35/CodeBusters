import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import utils from 'src/utils';
import './intro.scss';

const scenarios = utils[0].fourMostPopularScenarios;

const Intro = () => {
  const { slug } = useParams();
  const result = scenarios.find((item) => item.slug === slug);

  const history = useHistory();
  // fonction permettant de rediriger l'utilisateur sur la page plateau.
  const redirectionToBoard = () => {
    const url = `/game/${slug}/board`;
    history.push(url);
  };
  return (
    <>
      <h2 className="intro-title">Introduction</h2>
      <p className="intro-description">{result.description}</p>
      <button
        type="button"
        onClick={() => {
          // startGame();
          redirectionToBoard();
        }}
      >Lancez la partie
      </button>
      {/* {!loadingGame && }; */}
    </>
  );
};

export default Intro;

