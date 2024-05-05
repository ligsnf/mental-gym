"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';

interface StopwatchProps {
  isRunning: boolean;
  onToggleRunning: Dispatch<SetStateAction<boolean>>;
}

function Stopwatch({ isRunning, onToggleRunning }: StopwatchProps) {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    }

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    }
  }, [isRunning, elapsedTime]);

  function formatTime(): string {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    // let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div className="stopwatch h-full flex items-center justify-center"> {/* Flex container with centering */}
      <div className="display font-mono w-full text-center">{formatTime()}</div> {/* Text centering */}
    </div>
  );
}

export default Stopwatch;
