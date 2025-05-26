import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start a timer that updates the seconds every 1000ms (1 second)
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function: clear the timer if component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array = run only once (on mount)

  return (
    <div className="timer">
        <h2>Timer</h2>
        <p>Time Elapsed: {seconds} seconds</p>
    </div>

  );
}

export default Timer;
