// Timer.js
import React, { useEffect, useState } from 'react';

function Timer({ time, isRunning }) {
  const [formattedTime, setFormattedTime] = useState(formatTime(Math.ceil(time / 1000)));

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setFormattedTime(formatTime(Math.ceil(time / 1000)));
        } else {
          clearInterval(interval);
        }
      }, 1000); // Update every second
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time, isRunning]);

  return (
    <div className="timer">
      <span className="time">{formattedTime}</span>
    </div>
  );
}

// Function to format time in HH:MM:SS format
const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default Timer;
