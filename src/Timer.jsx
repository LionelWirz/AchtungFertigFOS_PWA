// Timer.js
import React from 'react';

function Timer({ time, isRunning }) {
  const totalTime = 1500; // Adjust based on actual total time
  const circumference = 2 * Math.PI * 45; // Example for a circle with radius 45
  const timeFraction = time / totalTime;
  const offset = circumference * (1 - timeFraction);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#ccc"
          strokeWidth="10"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#ffa500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
        />
        <text
          x="100"
          y="105" // Adjust y for better vertical alignment
          textAnchor="middle"
          fill="#333"
          fontSize="20"
          fontFamily="Calibri, sans-serif"
        >
          {formattedTime}
        </text>
      </svg>
      <div className="controls">
        {/* Controls here */}
      </div>
      <div className="settings">
        {/* Settings here */}
      </div>
    </div>
  );
}

export default Timer;
