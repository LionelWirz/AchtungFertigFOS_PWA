// Timer.js
import React, { useEffect, useState } from 'react';

function Timer({ time, isRunning }) {
  const [percentageRemaining, setPercentageRemaining] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setPercentageRemaining((time / 1500) * 100); // Assuming 1500 seconds for 25 minutes
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [time, isRunning]);

  // Function to format time in HH:MM:SS format
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#AED6F1" // Light blue color for the circle
          strokeWidth="10"
          className="remaining-circle" // Add class name for remaining time circle
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#2C3E50" // Black background color
          strokeWidth="10"
          strokeDasharray="565.48" // Circumference of the circle (2 * π * radius)
          strokeDashoffset={(100 - percentageRemaining) / 100 * 565.48} // Offset to show remaining time
          transform="rotate(-90 100 100)"
          className="background-circle" // Add class name for background circle
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="40" fontFamily="Digital-7, sans-serif">
          {formatTime(time)}
        </text>
      </svg>
    </div>
  );
}

export default Timer;
