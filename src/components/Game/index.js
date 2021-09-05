import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import NotFound from 'src/components/NotFound';
import Intro from './Intro';
import Board from './Board';
import Win from './Win';
import Loose from './Loose';

import './game.scss';

const Game = ({
  startGame,
  items,
  background,
  displayPicture,
  toggleDisplayPicture,
  setCurrentImg,
  currentImg,
  toggleDisplayInput,
  displayInput,
  inputGameValue,
  win,
  setWin,
  changeField,
  endGame,
  toggleDisplayDescription,
  currentDescription,
  setCurrentDescription,
  displayDescription,
  setMinutes,
  setSeconds,
  seconds,
  minutes,
  submitAnswer,
  isLogged,
}) => (
  // Ici on switch sur les différentes routes de la game
  // On passe d'abord par l'intro ensuite par le plateau
  // et pour finir une page win ou loose
  <Switch>
    <Route path="/game/:slug" exact>
      <Intro setWin={setWin} setMinutes={setMinutes} setSeconds={setSeconds} isLogged={isLogged} />
    </Route>
    <Route path="/game/:slug/board">
      <Board
        items={items}
        startGame={startGame}
        background={background}
        displayPicture={displayPicture}
        toggleDisplayPicture={toggleDisplayPicture}
        setCurrentImg={setCurrentImg}
        currentImg={currentImg}
        toggleDisplayInput={toggleDisplayInput}
        displayInput={displayInput}
        inputGameValue={inputGameValue}
        win={win}
        changeField={changeField}
        toggleDisplayDescription={toggleDisplayDescription}
        currentDescription={currentDescription}
        setCurrentDescription={setCurrentDescription}
        displayDescription={displayDescription}
        seconds={seconds}
        minutes={minutes}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        submitAnswer={submitAnswer}
      />
    </Route>
    <Route path="/game/:slug/win">
      {win ? <Win endGame={endGame} /> : <NotFound />}
    </Route>
    <Route path="/game/:slug/loose">
      {minutes === 0 && seconds === 0 ? <Loose endGame={endGame} /> : <NotFound />}
    </Route>
  </Switch>
);

Game.propTypes = {
  startGame: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
  displayPicture: PropTypes.bool.isRequired,
  toggleDisplayPicture: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
  setCurrentImg: PropTypes.func.isRequired,
  toggleDisplayInput: PropTypes.func.isRequired,
  displayInput: PropTypes.bool.isRequired,
  inputGameValue: PropTypes.string.isRequired,
  win: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  toggleDisplayDescription: PropTypes.func.isRequired,
  currentDescription: PropTypes.string.isRequired,
  setCurrentDescription: PropTypes.func.isRequired,
  displayDescription: PropTypes.bool.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
  setWin: PropTypes.func.isRequired,
  seconds: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Game;
