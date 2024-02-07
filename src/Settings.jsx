// Settings.js
import React, { useState } from 'react';

function Settings({ onSetWorkDuration, onSetBreakDuration }) {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div>
      <label>
        Duration:
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Settings;
