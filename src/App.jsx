import React, { useState } from 'react';
import Doomsday from './Doomsday';
import Timer from './Timer';
import './App.css';

function App() {
  const [time, setTime] = useState(1500); // Initial time in seconds (25 minutes)
  const [inputValue, setInputValue] = useState('00:25:00'); // Initial input value (25 minutes)
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="App">
      <Doomsday />
      <Timer
        time={time}
        setTime={setTime}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default App;
