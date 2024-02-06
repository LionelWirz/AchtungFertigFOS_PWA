// Controls.js
import React from 'react';

function Controls({ onStart, onPause, onReset }) {
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Controls;
