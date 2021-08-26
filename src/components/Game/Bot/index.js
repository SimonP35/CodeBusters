import React from 'react';

import bot from 'src/assets/images/bot.svg';

import './bot.scss';

// Le bot est une image avec une div à l'intérieur qui affiche avec un set time - des messages - avec une transition css qui va bien

const Bot = () => (
  <>
    <div>
      <img className="bot-pic" src={bot} alt="bot" />
    </div>
    <div className="bot-message">
      <p className="bot-text">J'essaie de m'afficher sur le téléphone</p>
    </div>
  </>
);

export default Bot;
