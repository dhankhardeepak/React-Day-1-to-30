import React, { useState } from 'react'
import './styles/counter.css'
const Counter = () => {
  const [counter, setCounter] = useState(0);  

  const incrementCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  }

  const decrementCounter = () => {
    setCounter((prevCount) => {
        if(prevCount == 0){
            return 0
        }
        else{
            return prevCount - 1;
        }
    });
  }

  const resetCounter = () => {
    setCounter(0);
  }
  return (
    <div style={{textAlign:"center"}}>
      <div className='counterDiv'>{counter}</div>
      <div className='counterButton'>
        <button className='circle' onClick={incrementCounter}>+</button>
        <button className='oval' onClick={resetCounter}>Reset Counter</button>
        <button className='circle' onClick={decrementCounter}>-</button>
      </div>
    </div>
  )
}

export default Counter;
