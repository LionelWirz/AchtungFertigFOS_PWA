// Settings.js
import React, { useState } from 'react';

function Settings({ onSetWorkDuration }) {
  const [workDuration, setWorkDuration] = useState(25);

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setWorkDuration(newDuration);
    onSetWorkDuration(newDuration); // Pass the new duration to the parent component
  };

  return (
    <div>
      <label>
        Dauer:
        <input
          type="number"
          value={workDuration}
          onChange={handleDurationChange}
        />
      </label>
    </div>
  );
}

export default Settings;
