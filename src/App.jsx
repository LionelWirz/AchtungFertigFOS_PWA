
// App.js
import React, { useState, useEffect } from 'react';
import Timer from './Timer';

function App() {
  const [time, setTime] = useState(1500); // Initial time in seconds (25 minutes)
  const [inputValue, setInputValue] = useState('00:25:00'); // Initial input value (25 minutes)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false); // Pause the timer
    } else {
      setIsRunning(true); // Start the timer
    }
  };

  const handleReset = () => {
    setTime(parseTime(inputValue)); // Set timer to the input value
    setIsRunning(true); // Start the timer immediately
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const parseTime = (input) => {
    const [hours, minutes, seconds] = input.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds; // Convert hours, minutes, and seconds to seconds
  };

  return (
    <div className="app">
      <Timer time={time} />
      <div className="controls">
        <button onClick={handleToggle}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="hh:mm:ss"
        />
      </div>
    </div>
  );
}

export default App;
