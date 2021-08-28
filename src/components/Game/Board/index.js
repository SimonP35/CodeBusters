import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import utils from 'src/utils';
import background from 'src/assets/images/10V2.png';
import './board.scss';

const { items } = utils[4];

const changeInArray = (object) => {
  const array = Object.values(object);
  return (array);
};

const Board = ({
  // startGame,
  // items,
  // background,
  displayPicture,
  toggleDisplayPicture,
  setCurrentImg,
  currentImg,
}) => (
  <>
    {/* {useEffect(() => {
      startGame();
    }, [])} */}

    <img className="board-background" src={background} alt="" />
    {changeInArray(items).map((item) => (

      <div
        key={item.name}
        className="board-item"
        onClick={() => {
          setCurrentImg(item.picture1);
          toggleDisplayPicture();
        }}
      >
        <style jsx>{`
            .board-item{
              position: absolute;
              top: ${item.y};
              left: ${item.x};
              width: 100px;
              height: 100px;
            }
        `}
        </style>
      </div>
    ))}
    {
    displayPicture && (
      <div className="image-container">
        <button
          type="button"
          onClick={() => {
            toggleDisplayPicture();
          }}
        >
          x
        </button>
        <img
          className="image"
          src={currentImg}
          alt=""
        />
      </div>
    )
    }
  </>
);

Board.propTypes = {
  startGame: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
  displayPicture: PropTypes.bool.isRequired,
  toggleDisplayPicture: PropTypes.func.isRequired,
  setCurrentImg: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
};
export default Board;
