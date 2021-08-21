import React from 'react';
import Login from 'src/components/Popup/Login';
// import Loader from 'src/components/Loader';
import games from 'src/assets/images/games.png';
import utils from 'src/utils';

import './home.scss';

const scenarios = utils[0].fourMostPopularScenarios;
// console.log(scenarios);
const Home = () => (
  <>
    <div className="home-page">
      <main className="home-main">
        <div className="home-banniere">
          <img className="home-banniere-img" src={games} alt="banniere-img" />
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
    </div>
    <Login />
    {/* <Loader /> */}
  </>
);

export default Home;
