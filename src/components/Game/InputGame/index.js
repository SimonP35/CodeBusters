import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field';
import './inputGame.scss';

const InputGame = ({
  inputGameValue,
  changeField,
  toggleDisplayInput,
  answer,
  setWin,
  toggleDisplayDescription,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputGameValue === answer && inputGameValue !== '') {
      setWin();
    }
    if (inputGameValue !== answer) {
      toggleDisplayDescription();
    }
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
            placeholder="Votre réponse"
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
  answer: PropTypes.string.isRequired,
  setWin: PropTypes.func.isRequired,
  toggleDisplayDescription: PropTypes.func.isRequired,
};

export default InputGame;
