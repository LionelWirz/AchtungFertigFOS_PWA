// Timer.js
import React from 'react';

function Timer({ time, isRunning }) {
  return (
    <div>
      <h1>AchtungFertigFOS</h1>
      <p>Sprint: {time} seconds</p>
      <p>{isRunning ? 'GO!' : 'PAUSIERT'}</p>
    </div>
  );
}

export default Timer;
