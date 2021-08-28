import React from 'react';
import { useHistory } from 'react-router-dom';

import './intro.scss';

const Intro = () => {
  const history = useHistory();
  // fonction permettant de rediriger l'utilisateur sur la page plateau.
  const redirection = () => {
    const url = '/game/board';
    history.push(url);
  };

  return (
    <>
      <h2 className="intro-title">Ici bientôt l'intro du scénario</h2>
      <button
        type="button"
        onClick={() => {
          // startGame();
          redirection();
        }}
      >Lancez la partie
      </button>
      {/* {!loadingGame && }; */}
    </>
  );
};

export default Intro;
