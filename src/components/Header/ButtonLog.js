import React from 'react';

import './buttonlog.scss';

//  Le composant popup apparait en haut à droite de la home page et les popup login / signin apparaissent via conditions (state avec action callback) : une seule action pour les deux qui fassent des modifications différentes pour afficher l'un ou l'autre formulaire + bouton pour fermer la popup et revenir sur home (avec un onclick)

const ButtonLog = () => (
  <div className="log-container">
    <button type="button" className="log-button">Inscription</button>
    <button type="button" className="log-button">Connexion</button>
  </div>
);

export default ButtonLog;
