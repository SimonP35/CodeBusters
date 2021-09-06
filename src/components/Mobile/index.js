import React from 'react';

import './mobile.scss';

const Mobile = () => (
  <div className="mobile-back">
    <div className="mobile-container">
      <h2 className="mobile-title">Bienvenue sur CodeBusters</h2>
      <h3 className="mobile-subtitle">La plateforme d'escape games</h3>
      <p className="mobile-text">CodeBusters n'est pas disponible en version mobile afin de garantir des conditions d'utilisation optimales.</p>
      <a href="#volet" className="danger">Important</a>
    </div>
  </div>
);
export default Mobile;
