import React from 'react';

import './timer.scss';

// Installer react timer hook

// Ce timer se lance via le composant board lorsque ce dernier est appelé via le bouton "démarrer la partie"

const Timer = () => (

  <div className="timer-container">
    <div className="timer-display" />
  </div>
);

export default Timer;
