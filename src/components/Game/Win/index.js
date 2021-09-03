import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import utils from 'src/utils';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './win.scss';

const scenario = utils[1].scenarios[0];

// Doc : yarn add react-youtube
// https://github.com/tjallingt/react-youtube

const Win = ({ endGame }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    endGame();
  }, []);

  return (
    <>
      <Header />
      <div className="win-container">
        <h2 className="win-title">BIEN JOUÉ !</h2>
        <h3 className="win-subtitle"> Ca y est tu peux ENFIN partir en week-end ! </h3>
        <p className="win-text">{scenario.contentwin} </p>
        <YouTube videoId={scenario.src} className="win-video-responsive" />
        <button
          type="button"
          onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_POPUP_COMMENT' })}
          className="win-button"
          id="comment"
        >Laisser un commentaire
        </button>
      </div>
      <Footer />
    </>
  );
};

Win.propTypes = {
  endGame: PropTypes.func.isRequired,
};
export default Win;
