import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Win from 'src/containers/Win';

import Intro from './Intro';
import Board from './Board';
import Loose from './Loose';
import './game.scss';

const Game = () => (
  // Ici on switch sur les différentes routes de la game
  // On passe d'abord par l'intro ensuite par le plateau
  // et pour finir une page win ou loose
  <Switch>
    <Route path="/game" exact>
      <Intro />
    </Route>
    <Route path="/game/board">
      <Board />
    </Route>
    <Route path="/game/win">
      <Win />
    </Route>
    <Route path="/game/loose">
      <Loose />
    </Route>
  </Switch>
);

export default Game;
