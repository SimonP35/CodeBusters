import React from 'react';

import bot from 'src/assets/images/bot.png';
import utils from 'src/utils';

import './bot.scss';

// Le bot est une image avec une div à l'intérieur qui affiche avec un set time out - des messages - avec une transition css qui va bien

// USEEFFECT - SET INTERVAL à mettre en place sur le map d'un tableau d'objets "messages" toutes les 5mn
// Je cherche à incrémenter l'id de l'objet à afficher toutes les x secondes

const message = utils[4].messages[0];

const Bot = () => (

  <>
    <div className="bot-container" key={message.id}>
      <img className="bot-pic" src={bot} alt="bot" />
      <div className="bot-message">
        <p className="bot-text-sender">BIG BOSS : </p>
        <p className="bot-text">{message.content}</p>
      </div>
    </div>
  </>
);

export default Bot;
