import React, { useRef, useState } from 'react'
import CircularProgressBar from './ui-component/circularProgressBar'

const CircularBar = ({duration = 5000}) => {
  const [progress, setProgress] = useState(100)
  const frameRef = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const timeref = useRef(null)

  const updateBar = (timeframe) => {
    if(!timeref.current) timeref.current = timeframe;
    const elapsed = timeref.current - timeframe;
    const percentage = Math.max(100 - (elapsed / duration) * 100, 0)

    setProgress(percentage)
    if(isRunning){
        frameRef.current = requestAnimationFrame(updateBar)
    }
  }

  const playAnimation = () => {
    setIsRunning(true);
    frameRef.current = requestAnimationFrame(updateBar);
  }

  const pauseAnimation = () => {
    setIsRunning(false);
    cancelAnimationFrame(frameRef.current);
  }

  const resetAnimation = () => {
    setIsRunning(false);
    setProgress(100);
    cancelAnimationFrame(frameRef.current)
  }

  console.log(progress)
  return (
    <div>
      <CircularProgressBar progress={progress}/>
      <button onClick={playAnimation}>Play</button>
      <button onClick={pauseAnimation}>Pause</button>
      <button onClick={resetAnimation}>Reset</button>
    </div>
  )
}

export default CircularBar
