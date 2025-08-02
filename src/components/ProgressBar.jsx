import React, { useEffect, useRef, useState } from 'react'
import './css/progressbar.css'

const ProgressBar = ({duration=5000}) => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const frame = useRef();

  const updateProgress = (timestamp) => {
    if(!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsedTime = timestamp - startTimeRef.current;
    const percentage = Math.min((elapsedTime / duration) * 100, 100)
    setProgress(percentage)
    if(percentage < 100){
        frame.current = requestAnimationFrame(updateProgress)
    }
    else{
        setIsRunning(false);
    }

  }

  const handleStart = () => {
    if(!isRunning && progress < 100){
        setIsRunning(true);
        startTimeRef.current = null;
        frame.current = requestAnimationFrame(updateProgress);
    }
  }

  const handlePause = () => {
    setIsRunning(false);
    cancelAnimationFrame(frame.current);
  }

  const reset = () => {
    setIsRunning(false);
    setProgress(0);
    cancelAnimationFrame(frame.current)
    startTimeRef.current = null;
  }
  return (
    <div>
        <div className='progressBar'>
            <span style={{width:`${progress}%`}} className='progress'></span>
        </div>
        <div className="controls">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default ProgressBar
