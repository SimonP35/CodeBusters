import React from 'react';

import Login from './login';
import Signin from './signin';

import './popup.scss';

//  Ce composant apparait en haut à droite de la home
// page et les popup login / signin apparaissent via conditions

const Popup = () => (
  <div className="popup-container">
    <button type="button" className="popup-button">Inscription</button>
    <button type="button" className="popup-button">Connexion</button>
  </div>
);

export default Popup;
