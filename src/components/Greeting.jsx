import React, { useEffect, useRef, useState } from 'react'

const Greeting = () => {
  const [inputVal, setInputVal] = useState('');
  const [greet, setGreet] = useState(null);
  const inputref = useRef();
  
  const onShowGreet = () => {
    setGreet(inputVal);
  }

  useEffect(() => {
    inputref.current.focus();
  }, []) 
  return (
    <div>
      <div>
        <input ref={inputref} type='text' value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        <button disabled={inputVal.trim() === ''} onClick={onShowGreet}>Show Greeting</button>
        <button onClick={() => { setInputVal(''); setGreet(null); }}>Reset</button>
      </div>  
      {greet && <p>{`Hello ${greet}`}</p>}
    </div>
  )
}

export default Greeting;