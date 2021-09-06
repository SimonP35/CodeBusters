import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

import Field from './Field';
import './comment.scss';

const Comment = ({
  toggleDisplayComment,
  changeField,
  comment,
  rating,
  submitComment,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitComment();
    toggleDisplayComment();
  };
  return (
    <div className="comment-background">
      <div className="comment-container">
        <button
          type="button"
          className="popup-button-close"
          onClick={() => {
            toggleDisplayComment();
          }}
        >       +
        </button>
        <form className="comment-form" onSubmit={handleSubmit}>
          <h3 className="comment-title">Ton commentaire :</h3>
          <Field
            className="comment-textarea"
            type="texte"
            placeholder="Mon commentaire..."
            manageChange={changeField}
            value={comment}
            name="comment"
          />
          {/* <Field
            className="comment-textarea"
            type="number"
            placeholder="Mon vote"
            manageChange={changeField}
            value={rating}
            name="rating"
          /> */}
          <ReactStars
            value={rating}
            onChange={(newValue) => {
              changeField(newValue, 'rating');
            }}
          />
          <button className="comment-button" type="submit">ENVOYER</button>
        </form>
      </div>
    </div>
  );
};

Comment.propTypes = {
  toggleDisplayComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
};
export default Comment;
