import React from 'react';

import './comment.scss';

const Comment = () => (
  <div className="comment-container">
    <form className="comment-form">
      <h3 className="comment-title">Laisse un commentaire :</h3>
      <input className="comment-textarea" type="texte" placeholder="Mon commentaire..." />
      <input className="comment-button" type="submit" />
    </form>
  </div>
);

export default Comment;
