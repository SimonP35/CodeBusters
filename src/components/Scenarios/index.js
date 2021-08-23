import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './scenarios.scss';

const Scenarios = () => (
  <>
    <Header />
    <main className="scenarios-main">
      <div className="scenarios-container">
        <h2 className="scenarios-title">Coucou les scenarios</h2>
      </div>
    </main>
    <Footer />
  </>
);

export default Scenarios;
