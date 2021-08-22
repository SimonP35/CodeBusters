// == Import npm
import React from 'react';

// == Import
import Pages from 'src/components/Pages';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <div className="mobile-container">
      <h2 className="mobile-title">Bienvenue sur CodeBusters</h2>
      <h3 className="mobile-subtitle">La plateforme d'escape games</h3>
      <p className="mobile-text">CodeBusters n'est pas disponible en version mobile afin de garantir des conditions d'utilisation optimales.</p>
    </div>
    <Pages />
  </div>
);

// == Export
export default App;
