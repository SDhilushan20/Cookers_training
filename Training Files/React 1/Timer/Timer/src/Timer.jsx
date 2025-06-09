import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timer">
        <h2>Timer</h2>
        <p>Time Elapsed: {seconds} seconds</p>
    </div>

  );
}

export default Timer;
