import React, { useEffect } from 'react';

import bot from 'src/assets/images/bot.png';
import utils from 'src/utils';

import './bot.scss';

// Le bot est une image avec une div à l'intérieur qui affiche avec un set time out - des messages - avec une transition css qui va bien

// USEEFFECT - SETTIMEOUT à mettre en place sur le map d'un tableau d'objets "messages" toutes les 5mn

const message = utils[4].messages;

const Bot = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Ici on fait le map sur le message à la place de setcount
    setCount('Timeout called!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (

  <>
    <div className="bot-container">
      <img className="bot-pic" src={bot} alt="bot" />
      <div className="bot-message">
        <p className="bot-text">J'essaie de m'afficher sur le téléphone {message.content}</p>
      </div>
    </div>
  </>
);
};

export default Bot;
