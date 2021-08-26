import React from 'react';
import PropTypes from 'prop-types';

import './intro.scss';

const Intro = ({ startGame }) => (
  <>
    <h2 className="intro-title">Ici bientôt l'intro du scénario</h2>
    <button
      type="button"
      onClick={() => {
        startGame();
      }}
    >Lancez la partie
    </button>
  </>
);

Intro.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default Intro;
