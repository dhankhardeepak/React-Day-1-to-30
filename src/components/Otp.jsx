import React, { useRef, useState } from 'react'

const Otp = ({length}) => {
  const otpArray = new Array(length).fill(1);
  const [inputVal, setInputVal] = useState(new Array(length).fill(''))  
  const boxRef = useRef([]);
  
  const handleonInputChange = (e, idx) => {
    const value = e.target.value;
    setInputVal((prev) => {
        const newPrev = [...prev];
        newPrev[idx] = value;
        return newPrev;
    })
    if(value && idx < length - 1){
        boxRef.current[idx + 1].focus();
    }
  }

  const handleOnKeyDown = (event, idx) => {
    if(event.key === 'Backspace'){
        setInputVal((prev) => {
            const newPrev = [...prev];
            newPrev[idx] = '';
            return newPrev;
        })
        if(idx > 0){
            boxRef.current[idx - 1].focus();
        }
    }
    else if(event.key === 'ArrowRight'){
        if(idx < length - 1){
            boxRef.current[idx + 1].focus();
        }
    }
    else if(event.key === 'ArrowLeft'){
        if(idx > 0){
            boxRef.current[idx - 1].focus();
        }
    }
  }

  
  return (
    <div>
      {otpArray.map((otp, index) => {
        return (
            <input 
                key={index} 
                type='text' 
                maxLength={1} 
                ref={(el) => boxRef.current[index] = el} 
                value={inputVal[index]} 
                onChange={(event) => handleonInputChange(event, index)} 
                onKeyDown={(event) => handleOnKeyDown(event, index)}
            />
        )
      })}
    </div>
  )
}

export default Otp
