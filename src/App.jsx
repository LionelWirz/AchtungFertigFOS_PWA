// App.js
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Controls from './Controls';
import Settings from './Settings';

function App() {
  const [time, setTime] = useState(1500); // Initial time in seconds (25 minutes)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          // Timer is done, reset to the break time
          setIsRunning(false);
          // You can add logic to switch between work and break here
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(1500); // Reset to the initial time
  };

  const handleSetWorkDuration = (duration) => {
    // Handle setting work duration
  };

  const handleSetBreakDuration = (duration) => {
    // Handle setting break duration
  };

  return (
    <div>
      <Timer time={time} isRunning={isRunning} />
      <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} />
      <Settings
        onSetWorkDuration={handleSetWorkDuration}
        onSetBreakDuration={handleSetBreakDuration}
      />
    </div>
  );
}

export default App;
