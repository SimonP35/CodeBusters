import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import utils from 'src/utils';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './intro.scss';

const { scenarios } = utils[1];

const Intro = ({ setWin, setSeconds, setMinutes }) => {
  const { slug } = useParams();
  const result = scenarios.find((item) => item.slug === slug);

  const history = useHistory();
  // fonction permettant de rediriger l'utilisateur sur la page plateau.
  const redirectionToBoard = () => {
    const url = `/game/${slug}/board`;
    history.push(url);
  };
  return (
    <>
      {/* on s'assure que win soit false pour que lorsqu'on rejoue,
      win  ne soit pas true et le temps soit comme en initialstate */}
      {useEffect(() => {
        setWin(false);
        setSeconds(1);
        setMinutes(1);
      })}
      <Header />
      <div className="intro-container">
        <h2 className="intro-title">{result.nom}</h2>
        <img src={result.pic} alt="scenario" />
        <p className="intro-description">{result.description}</p>
        <button
          type="button"
          className="intro-button"
          onClick={() => {
            // startGame();
            redirectionToBoard();
          }}
        >Lancez la partie
        </button>
        {/* {!loadingGame && }; */}
      </div>
      <Footer />
    </>
  );
};

Intro.propTypes = {
  setWin: PropTypes.func.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
};

export default Intro;
