import React from 'react';
import PropTypes from 'prop-types';

import utils from 'src/utils';

import './win.scss';

const scenario = utils[3].scenarios[0];

const Win = ({ toggleDisplayComment }) => (
  <div className="win-container">
    <h2 className="win-title">BIEN JOUÉ !</h2>
    <h3 className="win-subtitle"> A toi le week-end !</h3>
    <p className="win-text">{scenario.contentwin} </p>
    <h3 className="win-subtitle">Tu as mis en prod en un temps de record de : {scenario.timer} minutes</h3>
    <div className="win-video-responsive"> {scenario.video} Ici data vidéo dans balise iframes responsive et autoplay
      {/* <iframe width="560" height="315" src="{scenario.src}" frameborder="0" autoplay/> */}
    </div>
    <button
      type="button"
      onClick={() => toggleDisplayComment()}
      className="win-button"
      id="comment"
    >Laisser un commentaire
    </button>
  </div>
);

Win.propTypes = {
  toggleDisplayComment: PropTypes.func.isRequired,
};

export default Win;

// Voir le tool React Youtube pour intégrer vidéos facilement
