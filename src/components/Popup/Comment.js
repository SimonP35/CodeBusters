import React from 'react';

import './comment.scss';

const Comment = () => (
  <div className="comment-container">
    <form className="comment-form">
      Laisse un commentaire :
      <input className="comment-textarea" type="texte" placeholder="Mon commentaire..." />
      <input className="comment-button" type="submit" />
    </form>
  </div>
);

export default Comment;
