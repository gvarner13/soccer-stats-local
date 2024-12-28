import React, { useState, useEffect, useRef } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export default function StopWatchTimer({ gameTime, setGameTime }) {
  const startTimeRef = useRef(0);
  //   const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const elapsedRef = useRef(0); // Track elapsed time when paused

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(
        () =>
          setGameTime(Date.now() - startTimeRef.current + elapsedRef.current),
        1
      );
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(gameTime / HOUR);
  const minutes = Math.floor((gameTime / MINUTE) % 60);
  const seconds = Math.floor((gameTime / SECOND) % 60);
  const milliseconds = gameTime % SECOND;

  const start = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now();
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
    elapsedRef.current = gameTime; // Save the elapsed time
  };

  const reset = () => {
    stop();
    setGameTime(0);
    elapsedRef.current = 0; // Reset elapsed time
  };

  return (
    <div>
      <div style={{ fontFamily: "monospace" }} className="text-4xl text-center">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}.
        {milliseconds.toString().padStart(3, "0")}
      </div>
      <div className="mt-5 flex gap-4 justify-center">
        <button
          onClick={start}
          className="w-32 rounded-lg border-lime-700 border-2 p-4"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="w-32 rounded-lg border-lime-700 border-2 p-4"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="w-32 rounded-lg border-lime-700 border-2 p-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
