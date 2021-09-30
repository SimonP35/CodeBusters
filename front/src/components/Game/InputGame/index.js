import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field';
import './inputGame.scss';

const InputGame = ({
  inputGameValue,
  changeField,
  toggleDisplayInput,
  submitAnswer,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitAnswer();
    toggleDisplayInput();
  };
  return (
    <div className="inputgame-background">
      <div className="inputgame-container">
        <button type="button" className="inputgame-closed" onClick={() => (toggleDisplayInput())}>x</button>
        <form className="login-form" onSubmit={handleSubmit}>
          <Field
            name="inputGameValue"
            type="text"
            placeholder="Votre réponse: /1/2/3/4/5/6.pem"
            manageChange={changeField}
            value={inputGameValue}
            className="InputGame-field"
          />
          <button className="inputgame-button" type="submit">
            Ok
          </button>
        </form>
      </div>
    </div>
  );
};

InputGame.propTypes = {
  changeField: PropTypes.func.isRequired,
  inputGameValue: PropTypes.string.isRequired,
  toggleDisplayInput: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default InputGame;
