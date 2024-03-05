// Timer.js
import React from 'react';

function Timer({ time }) {
  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;
