import React from 'react';
import PropTypes from 'prop-types';

import './errorMessage.scss';

const ErrorMessage = ({ errorContent, closedErrormessage }) => (
  <div className="errormessage-background">
    <div className="errormessage-container">
      <button type="button" className="errormessage-closed" onClick={() => (closedErrormessage())}>x</button>
      <p className="errormessage-content">{errorContent}</p>
    </div>
  </div>
);

ErrorMessage.propTypes = {
  errorContent: PropTypes.string.isRequired,
  closedErrormessage: PropTypes.func.isRequired,
};

export default ErrorMessage;
