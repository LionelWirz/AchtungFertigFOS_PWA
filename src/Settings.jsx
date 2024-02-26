// Settings.js
import React, { useState } from 'react';

function Settings({ onSetWorkDuration }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const handleHoursChange = (e) => {
    const newHours = parseInt(e.target.value);
    setHours(newHours);
    onSetWorkDuration((newHours * 3600) + (minutes * 60) + seconds);
  };

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    onSetWorkDuration((hours * 3600) + (newMinutes * 60) + seconds);
  };

  const handleSecondsChange = (e) => {
    const newSeconds = parseInt(e.target.value);
    setSeconds(newSeconds);
    onSetWorkDuration((hours * 3600) + (minutes * 60) + newSeconds);
  };

  return (
    <div>
      <label>
        Hours:
        <input
          type="number"
          value={hours}
          onChange={handleHoursChange}
        />
      </label>
      <label>
        Minutes:
        <input
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
        />
      </label>
      <label>
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
        />
      </label>
    </div>
  );
}

export default Settings;
