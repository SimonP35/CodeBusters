import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Win from 'src/containers/Win';
import Loose from 'src/containers/Loose';

import Intro from './Intro';
import Board from './Board';
import './game.scss';

const Game = ({
  startGame,
  items,
  background,
  displayPicture,
  toggleDisplayPicture,
  setCurrentImg,
  currentImg,
}) => (
  // Ici on switch sur les différentes routes de la game
  // On passe d'abord par l'intro ensuite par le plateau
  // et pour finir une page win ou loose
  <Switch>
    <Route path="/game" exact>
      <Intro startGame={startGame} />
    </Route>
    <Route path="/game/board">
      <Board
        items={items}
        startGame={startGame}
        background={background}
        displayPicture={displayPicture}
        toggleDisplayPicture={toggleDisplayPicture}
        setCurrentImg={setCurrentImg}
        currentImg={currentImg}
      />
    </Route>
    <Route path="/game/win">
      <Win />
    </Route>
    <Route path="/game/loose">
      <Loose />
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
};

export default Game;
