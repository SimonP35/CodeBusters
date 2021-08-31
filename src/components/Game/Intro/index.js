import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import utils from 'src/utils';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './intro.scss';

const { scenarios } = utils[3];

const Intro = () => {
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

export default Intro;
