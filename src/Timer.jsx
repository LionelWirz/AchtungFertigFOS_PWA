import React, { useState, useEffect } from 'react';

function Timer({ time, setTime, inputValue, setInputValue, isRunning, setIsRunning }) {

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            handleFinish();
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, setTime]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(parseTime(inputValue));
    setIsRunning(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFinish = () => {
    alert('Countdown Finished!');
  };

  const parseTime = (input) => {
    const [hours, minutes, seconds] = input.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="time-display">{time}s</div>
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

export default Timer;
