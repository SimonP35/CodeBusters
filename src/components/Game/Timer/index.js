import React from 'react';
import PropTypes from 'prop-types';

import { useTimer } from 'react-timer-hook';

import './timer.scss';

// Install react timer hook : yarn add react-timer-hook

function MyTimer({ expiryTimestamp }) {
// console.log(expiryTimestamp);

  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp });

  return (
    <div className="timer-container">
      <div className="timer-display">
        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

const Timer = () => {
  const time = new Date();
  // console.log(time);
  time.setSeconds(time.getSeconds() + 1800); // 1800 = 30 minutes
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

MyTimer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
};

export default Timer;
