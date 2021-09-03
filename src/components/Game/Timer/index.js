import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimer } from 'react-timer-hook';

import './timer.scss';

// Install react timer hook : yarn add react-timer-hook

function MyTimer({ expiryTimestamp, setMinutes, setSeconds }) {
// console.log(expiryTimestamp);

  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp });
  useEffect(() => {
    setMinutes(minutes);
    setSeconds(seconds);
  }, [minutes, seconds]);
  return (
    <div className="timer-container">
      <div className="timer-display">
        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

const Timer = ({ setSeconds, setMinutes }) => {
  const time = new Date();
  // console.log(time);
  time.setSeconds(time.getSeconds() + 10); // 1800 = 30 minutes

  return (
    <div>
      <MyTimer expiryTimestamp={time} setSeconds={setSeconds} setMinutes={setMinutes} />
    </div>
  );
};

MyTimer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
};

Timer.propTypes = {
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
};

export default Timer;
