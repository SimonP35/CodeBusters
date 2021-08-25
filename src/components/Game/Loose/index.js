import React from 'react';
import { useDispatch } from 'react-redux';

import utils from 'src/utils';

import './loose.scss';

const scenario = utils[3].scenarios[0];

const Loose = () => {
  const dispatch = useDispatch();
  return (
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
        onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_POPUP_COMMENT' })}
        className="loose-button"
        id="comment"
      >Laisser un commentaire
      </button>
    </div>
  );
};

export default Loose;

// Voir le tool React Youtube pour intégrer vidéos facilement
