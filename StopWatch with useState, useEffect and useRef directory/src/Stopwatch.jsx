import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  const [Time, setTime] = useState([]);

  // Load records from local storage on mount
  useEffect(() => {
    const storedTimes = JSON.parse(localStorage.getItem("stopwatchRecords")) || [];
    setTime(storedTimes);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function resetAddTime() {
    reset();
    AddTime();
  }

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  function AddTime() {
    if (elapsedTime !== 0) {
      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      let seconds = Math.floor((elapsedTime / 1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);

      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      milliseconds = String(milliseconds).padStart(2, "0");

      const newTime = { name: `${minutes}:${seconds}:${milliseconds}` };
      const updatedTimes = [...Time, newTime];
      setTime(updatedTimes);

      // Save to local storage
      localStorage.setItem("stopwatchRecords", JSON.stringify(updatedTimes));
    }
  }

  function DeleteTask(index) {
    const updatedTimes = Time.filter((_, i) => i !== index);
    setTime(updatedTimes);

    // Save to local storage
    localStorage.setItem("stopwatchRecords", JSON.stringify(updatedTimes));
  }

  return (
    <div>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">Start</button>
          <button onClick={stop} className="stop-button">Stop</button>
          <button onClick={resetAddTime} className="reset-button">Reset</button>
        </div>
      </div>
      <div className="List">
        <ol>
          {Time.map((time, index) => (
            <li key={index}>
              Time: {time.name}{" "}
              <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Stopwatch;
