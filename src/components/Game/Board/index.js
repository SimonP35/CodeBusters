import React from 'react';

import Bot from '../Bot';
import Timer from '../Timer';

import './board.scss';

const Board = () => (
  <>
    <Bot />
    <Timer />
    <h2 className="board-title">Ici bientôt le plateau de jeu</h2>
  </>
);

export default Board;
