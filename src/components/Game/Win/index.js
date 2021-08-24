import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/containers/Popup';
import utils from 'src/utils';

import './win.scss';

const scenario = utils[3].scenarios[0];

const Win = ({

  displayComment,
  toggleDisplayComment,
  changeField,
  comment,
  submitComment,

}) => (
  <div className="win-container">
    <h2 className="win-title">BIEN JOUÉ !</h2>
    <h3 className="win-subtitle"> A toi le week-end !</h3>
    <p className="win-text">{scenario.contentwin} </p>
    <h3 className="win-subtitle">Tu as mis en prod en un temps de record de : {scenario.timer} minutes</h3>
    <div className="win-video-responsive">Ici data vidéo dans balise iframes responsive et autoplay
      {/* <iframe width="560" height="315" src="{scenario.src}" frameborder="0" autoplay/> */}
    </div>
    {displayComment && (
    <Comment
      toggleDisplayComment={toggleDisplayComment}
      changeField={changeField}
      comment={comment}
      submitComment={submitComment}
      className="win-comment"
    />
    )}
  </div>
);

Win.propTypes = {
  displayComment: PropTypes.bool.isRequired,
  toggleDisplayComment: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Win;

// Voir le tool React Youtube pour intégrer vidéos facilement
