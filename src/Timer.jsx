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

  // Helper function to convert seconds into HH:MM:SS format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Helper function to pad numbers with leading zeros if needed
  const pad = (num) => num.toString().padStart(2, '0');

  return (
    <div className="timer">
      <h3>AchtungFertigFOS</h3>
      <div className="time-display">{formatTime(time)}</div>
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
