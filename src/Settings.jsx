// Settings.js
import React, { useState } from 'react';

function Settings({ onSetWorkDuration }) {
  const [workDuration, setWorkDuration] = useState(25);

  return (
    <div>
      <label>
        Dauer:
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
