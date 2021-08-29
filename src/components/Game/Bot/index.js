import React, { useState, useEffect, useRef } from 'react';

import bot from 'src/assets/images/bot.png';
import utils from 'src/utils';

import './bot.scss';

// Custom hook for setInterval :
// SOURCE INFO :  https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const displayMessages = utils[4].messages;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback :
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval :
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Bot = () => {
  const [idCount, setidCount] = useState(1);
  // UseInterval increments id every 5mn starting at 1 in useState :
  useInterval(() => {
    setidCount(idCount + 1);
  }, 300000); // = 5mn
  // Array Find display the object matching id incremented :
  const displayMessage = displayMessages.find((message) => message.id === idCount);
  return (
    <div className="bot-container">
      <img className="bot-pic" src={bot} alt="bot" />
      <div className="bot-message">
        <p className="bot-text-sender">BIG BOSS : </p>
        <p className="bot-text" key={displayMessage.id}> {displayMessage.content}</p>
      </div>
    </div>
  );
};

export default Bot;
