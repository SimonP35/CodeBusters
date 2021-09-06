import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import utils from 'src/utils';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './loose.scss';

const scenario = utils[1].scenarios[0];

const Loose = ({ endGame }) => {
  useEffect(() => {
    endGame();
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Header />
      <div className="loose-container">
        <h2 className="loose-title">NUL ! </h2>
        <h3 className="loose-subtitle"> Médaille d'or toutes catégories de loose...</h3>
        <p className="loose-text">{scenario.contentloose} </p>
        <h3 className="loose-subtitle">Tu n'as pas pu finir dans le temps imparti </h3>
        <div className="loose-pic">
          <img src={scenario.img} alt="loose" />
        </div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_POPUP_COMMENT' })}
          className="loose-button"
          id="comment"
        >Laisser un commentaire
        </button>
      </div>
      <Footer />
    </>
  );
};

Loose.propTypes = {
  endGame: PropTypes.func.isRequired,
};

export default Loose;
