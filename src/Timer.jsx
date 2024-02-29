// Timer.js
import React, { useEffect, useState } from 'react';

function Timer({ time, isRunning }) {
  const [percentageRemaining, setPercentageRemaining] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        const remainingTime = time / 1000; // Convert milliseconds to seconds
        const elapsedTime = 1500 - remainingTime; // Assuming 1500 seconds for 25 minutes
        setPercentageRemaining((elapsedTime / 1500) * 100);
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
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="#AED6F1"
          strokeWidth="10"
          className="remaining-circle"
        />
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="#2ecc71" // Change the stroke color to green
          strokeWidth="10"
          strokeDasharray="753.98"
          strokeDashoffset={(100 - percentageRemaining) / 100 * 753.98}
          transform="rotate(-90 150 150)"
          className="background-circle"
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="60" fontFamily="'Digital-7', sans-serif">
          {formatTime(time / 1000)}
        </text>
      </svg>
    </div>
  );
}

export default Timer;
