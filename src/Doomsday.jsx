import React, { useState, useEffect } from 'react';

// Helper function to calculate the remaining time
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Doomsday = () => {
  const [timeLeft11, setTimeLeft11] = useState(calculateTimeLeft('2024-05-31T12:00:00'));
  const [timeLeft12, setTimeLeft12] = useState(calculateTimeLeft('2024-06-07T12:00:00'));
  const [timeLeft10, setTimeLeft10] = useState(calculateTimeLeft('2024-06-21T12:00:00'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft11(calculateTimeLeft('2024-05-31T12:00:00'));
      setTimeLeft12(calculateTimeLeft('2024-06-07T12:00:00'));
      setTimeLeft10(calculateTimeLeft('2024-06-21T12:00:00'));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft11, timeLeft12, timeLeft10]);

  const renderTimeLeft = (timeLeft) => {
    return timeLeft.days !== undefined ? 
      `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds` : 
      'Time is up!';
  };

  return (
    <div className="app">
      <h1>Countdown to 11. Klasse Exams</h1>
      <div className="time">{renderTimeLeft(timeLeft11)}</div>
      <h1>Countdown to 12. Klasse Exams</h1>
      <div className="time">{renderTimeLeft(timeLeft12)}</div>
      <h1>Countdown to 10. Klasse Exams</h1>
      <div className="time">{renderTimeLeft(timeLeft10)}</div>
    </div>
  );
};

export default Doomsday;
