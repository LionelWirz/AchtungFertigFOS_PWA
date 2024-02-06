// Settings.js
import React, { useState } from 'react';

function Settings({ onSetWorkDuration, onSetBreakDuration }) {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div>
      <label>
        Work Duration (minutes):
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(parseInt(e.target.value))}
        />
      </label>
      <label>
        Break Duration (minutes):
        <input
          type="number"
          value={breakDuration}
          onChange={(e) => setBreakDuration(parseInt(e.target.value))}
        />
      </label>
      <button onClick={() => onSetWorkDuration(workDuration)}>
        Set Work Duration
      </button>
      <button onClick={() => onSetBreakDuration(breakDuration)}>
        Set Break Duration
      </button>
    </div>
  );
}

export default Settings;
