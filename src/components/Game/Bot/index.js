import React, { useState, useEffect, useRef } from 'react';

import bot from 'src/assets/images/bot.png';
import utils from 'src/utils';

import './bot.scss';

// Le bot est une image avec une div à l'intérieur qui affiche des messages - avec une transition css qui va bien

// USEEFFECT - SET INTERVAL à mettre en place sur le map d'un tableau d'objets "messages" toutes les 5mn

// Je cherche à incrémenter l'id de l'objet à afficher toutes les x secondes donc ce qu'on peut imaginer c'est : 

// 1. Mettre en place un counter via setinterval, use effect, use state. Toutes les x secondes, il incrémente de 1.

// 2. Il incrémente quoi ? L'id d'un objet de mon tableau.

// 3. Comment j'affiche cet objet ? En faisant un array filter sur l'id de l'objet, qui s'incrémente de 1 toutes les x secondes.

// SOURCE INFO :  https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const displayMessages = utils[4].messages;

const Bot = () => {
  const displayMessage = displayMessages.find((message) => message.id === 1);
  return (
    <div className="bot-container">
      <img className="bot-pic" src={bot} alt="bot" />
      <div className="bot-message">
        <p className="bot-text-sender">BIG BOSS : </p>
        <p className="bot-text"> {displayMessage.content}</p>
      </div>
    </div>
  );
};

export default Bot;
