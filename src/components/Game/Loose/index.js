import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/containers/Popup';
import utils from 'src/utils';

import './loose.scss';

const scenario = utils[3].scenarios[0];

const Loose = ({

  displayComment,
  toggleDisplayComment,
  changeField,
  comment,
  submitComment,

}) => (
  <div className="loose-container">
    <h2 className="loose-title">NUL ! </h2>
    <h3 className="loose-subtitle"> Médaille d'or toutes catégories de loose sur le coup</h3>
    <p className="loose-text">{scenario.contentloose} </p>
    <h3 className="loose-subtitle">Tu n'as su finir dans le temps imparti </h3>
    <div className="loose-video-responsive">Ici data vidéo dans balise iframes responsive et autoplay
      {/* <iframe width="560" height="315" src="{scenario.src}" frameborder="0" autoplay/> */}
    </div>
    {displayComment && (
    <Comment
      toggleDisplayComment={toggleDisplayComment}
      changeField={changeField}
      comment={comment}
      submitComment={submitComment}
    />
    )}
  </div>
);

Loose.propTypes = {
  displayComment: PropTypes.bool.isRequired,
  toggleDisplayComment: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Loose;

// Voir le tool React Youtube pour intégrer vidéos facilement
