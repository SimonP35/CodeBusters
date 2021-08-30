import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';

// import utils from 'src/utils';
// import background from 'src/assets/images/10V2.png';
import './board.scss';
import InputGame from '../InputGame';

// const { items } = utils[4];

const changeInArray = (object) => {
  const array = Object.values(object);
  return (array);
};

const Board = ({
  startGame,
  items,
  background,
  displayPicture,
  toggleDisplayPicture,
  setCurrentImg,
  currentImg,
  toggleDisplayInput,
  displayInput,
  answer,
  setAnswer,
  inputGameValue,
  setWin,
  win,
  changeField,
}) => {
  useEffect(() => {
    startGame();
  }, []);
  const { slug } = useParams();
  return (
    <>
      <img className="board-background" src={background} alt="" />
      {changeInArray(items).map((item) => (
        <div key={item.name}>
          {
          item.type === 'clickable'
          && (
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
          )
        }
          {
          item.type === 'inputable'
          && (
          <div
            key={item.name}
            className="board-item"
            onClick={() => {
              toggleDisplayInput();
              setAnswer(item.answer);
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
          )
        }
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
      {
        displayInput && (
          <InputGame
            inputGameValue={inputGameValue}
            changeField={changeField}
            toggleDisplayInput={toggleDisplayInput}
            answer={answer}
            setWin={setWin}
          />
        )
      }
      {
      win && !displayInput && (
        <Redirect to={`/game/${slug}/win`} />
      )
      }
    </>
  );
};

Board.propTypes = {
  startGame: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
  displayPicture: PropTypes.bool.isRequired,
  toggleDisplayPicture: PropTypes.func.isRequired,
  setCurrentImg: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
  toggleDisplayInput: PropTypes.func.isRequired,
  displayInput: PropTypes.bool.isRequired,
  answer: PropTypes.string.isRequired,
  setAnswer: PropTypes.func.isRequired,
  inputGameValue: PropTypes.string.isRequired,
  setWin: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default Board;
