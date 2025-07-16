import React, { useState } from 'react'

const Character = () => {
  const [inputVal, setInputVal] = useState(''); 

  const handleTextarea = (e) => {
    setInputVal(() => {
        return e.target.value
    });
  }

  
  return (
    <div style={{textAlign:"center"}}>
      <textarea 
        cols={100} 
        rows={10} 
        onChange={
            (e) => {
                handleTextarea(e)
            }
        } 
        value={inputVal}
        style={{color:inputVal.length >= 100 ? 'red' : 'black'}}
        >
      </textarea>
      <span style={{display:'block', color:inputVal.length >= 100 ? 'red':'black'}}><span style={{color:"black"}}>Character Count: </span>{inputVal.length} / <span style={{color:"black"}}>100</span></span>
      <span style={{display:'block'}}><span>Word Count: </span>{inputVal.split(' ').length}</span>
    </div>
  )
}

export default Character
