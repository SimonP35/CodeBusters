import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Win from './Win';
import Loose from './Loose';
import Intro from './Intro';
import Board from './Board';

import './game.scss';

const Game = ({ startGame, toggleDisplayComment }) => (
  // Ici on switch sur les différentes routes de la game
  // On passe d'abord par l'intro ensuite par le plateau
  // et pour finir une page win ou loose
  <Switch>
    <Route path="/game" exact>
      <Intro startGame={startGame} />
    </Route>
    <Route path="/game/board">
      <Board />
    </Route>
    <Route path="/game/win">
      <Win toggleDisplayComment={toggleDisplayComment} />
    </Route>
    <Route path="/game/loose">
      <Loose toggleDisplayComment={toggleDisplayComment} />
    </Route>
  </Switch>
);

Game.propTypes = {
  startGame: PropTypes.func.isRequired,
  toggleDisplayComment: PropTypes.func.isRequired,
};

export default Game;
