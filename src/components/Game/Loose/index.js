import React from 'react';

import Comment from 'src/components/Popup/Comment';
import utils from 'src/utils';

import './loose.scss';

const scenario = utils[3].scenarios[1];

const Loose = () => (
  <div className="win-container">
    <h2 className="win-title">Un échec sanglant</h2>
    <h3 className="win-subtitle"> Grosse affiche... </h3>
    <p className="win-text">{scenario.contentloose} </p>
    <div className="win-video-responsive">Ici data vidéo dans balise iframes responsive et autoplay
      {/* <iframe width="560" height="315" src="{scenario.src}" frameborder="0" autoplay/> */}
    </div>
    <Comment />
  </div>
);

export default Loose;

// Voir le tool React Youtube pour intégrer vidéos facilement
