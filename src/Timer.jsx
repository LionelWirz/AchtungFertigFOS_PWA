// Timer.js
import React from 'react';

function Timer({ time, isRunning }) {
  return (
    <div>
      <h1>Pomodoro Clock</h1>
      <p>Time: {time} seconds</p>
      <p>{isRunning ? 'Running' : 'Paused'}</p>
    </div>
  );
}

export default Timer;
