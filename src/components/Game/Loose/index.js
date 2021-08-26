import React from 'react';
import PropTypes from 'prop-types';

import utils from 'src/utils';

import './loose.scss';

const scenario = utils[3].scenarios[0];

const Loose = ({toggleDisplayComment}) => (
  <div className="loose-container">
    <h2 className="loose-title">NUL ! </h2>
    <h3 className="loose-subtitle"> Médaille d'or toutes catégories de loose sur le coup</h3>
    <p className="loose-text">{scenario.contentloose} </p>
    <h3 className="loose-subtitle">Tu n'as su finir dans le temps imparti </h3>
    <div className="loose-video-responsive">Ici data vidéo dans balise iframes responsive et autoplay
      {/* <iframe width="560" height="315" src="{scenario.src}" frameborder="0" autoplay/> */}
    </div>
    <button
      type="button"
      onClick={() => toggleDisplayComment}
      className="loose-button"
      id="comment"
    >Laisser un commentaire
    </button>
  </div>
);

Loose.propTypes = {
  toggleDisplayComment: PropTypes.func.isRequired,
};

export default Loose;

// Voir le tool React Youtube pour intégrer vidéos facilement
