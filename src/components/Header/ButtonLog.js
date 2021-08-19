import React from 'react';

import './buttonlog.scss';

//  Ce composant apparait en haut à droite de la home page et les popup login / signin apparaissent via conditions

const ButtonLog = () => (
  <div className="log-container">
    <button type="button" className="log-button">Inscription</button>
    <button type="button" className="log-button">Connexion</button>
  </div>
);

export default ButtonLog;
