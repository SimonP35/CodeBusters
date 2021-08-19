import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import games from 'src/assets/images/games.png';
import utils from 'src/utils';

import './home.scss';

const scenarios = utils[0].fourMostPopularScenarios;
console.log(scenarios);
const Home = () => (
  <>
    <Header />
    <main className="home-main">
      <div className="home-banniere">
        <img className="home-banniere-img" src={games} alt="banniere-img" />
        <p className="home-banniere-text">CodeBusters le supergénérator d'escape game qui se moquent justement ce qu'on est entrain de vivre. Aka tartiner le viewport de colle avant d'y coller plein de paillettes.</p>
      </div>
      <div className="popular-scenarios-container">
        {scenarios.map((scenario) => (
          <div className="popular-scenarios-scenario" key={scenario.id}>
            <img className="popular-scenarios-scenario-image" src={scenario.image} alt="scenario-img" />
            <p className="popular-scenarios-scenario-text">Viens donc te gâcher le week-end à débugger le code dégueulasse de tonton Maurice !
            </p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
