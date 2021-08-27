import React from 'react';
// import PropTypes from 'prop-types';

import { useTimer } from 'react-timer-hook';

import './timer.scss';

// Install react timer hook : yarn add react-timer-hook

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,

  } = useTimer({ expiryTimestamp });

  return (
    <div className="timer-container">
      <div className="timer-display">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // 30 minutes
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

// Timer.propTypes = {
//   expiryTimestamp: PropTypes.number.isRequired,
// };
