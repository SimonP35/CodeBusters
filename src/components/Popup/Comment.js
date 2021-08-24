import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import './comment.scss';

const Comment = ({
  toggleDisplayComment,
  changeField,
  comment,
  submitComment,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitComment();
    toggleDisplayComment();
  };
  return (
    <div className="comment-container">
      <button
        type="button"
        className="popup-button-close"
        onClick={() => {
          toggleDisplayComment();
        }}
      >       x
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
        <button className="comment-button" type="submit">ENVOYER</button>
      </form>
    </div>
  );
};

Comment.propTypes = {
  toggleDisplayComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
};
export default Comment;
