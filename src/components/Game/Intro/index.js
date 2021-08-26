import React from 'react';
import { useDispatch } from 'react-redux';

import utils from 'src/utils';

import './intro.scss';

const scenario = utils[3].scenarios[0];

const Intro = () => {
  const dispatch = useDispatch();
  return (

  // Ici on fait une request à l'API pour récupérer de la game :
  // son titre, son descriptif, son image, ...

    <div className="intro-container">
      <h2 className="intro-title">{scenario.nom}</h2>
      <img className="intro-pic" src={scenario.pic} alt="scenario" />
      <p className="intro-text">{scenario.description} </p>
      <button
        type="button"
        // Onclick déclenche une requête API pour lancer board et le timer
        onClick={() => dispatch({ type: 'START_GAME' })}
        className="intro-button"
        id="intro"
      >Lancer la partie
      </button>
    </div>
  );
};
export default Intro;

