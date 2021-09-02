import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import utils from 'src/utils';

import './loose.scss';

const scenario = utils[3].scenarios[0];

const Loose = ({ endGame }) => {
  useEffect(() => {
    endGame();
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="loose-container">
      <h2 className="loose-title">NUL ! </h2>
      <h3 className="loose-subtitle"> Médaille d'or toutes catégories de loose...</h3>
      <p className="loose-text">{scenario.contentloose} </p>
      <h3 className="loose-subtitle">Tu n'as su finir dans le temps imparti </h3>
      <div className="loose-video-responsive">
        <a href="https://www.commitstrip.com/fr/2018/11/06/experience-is-a-candle/image.gif">
          <img src="{scenario.img}" alt="loose" />
        </a>
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_POPUP_COMMENT' })}
        className="loose-button"
        id="comment"
      >Laisser un commentaire
      </button>
    </div>
  );
};

Loose.propTypes = {
  endGame: PropTypes.func.isRequired,
};

export default Loose;
