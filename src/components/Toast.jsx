import React from 'react'

const Toast = ({toast, removeToast, position, setOnPause, setOnResume}) => {
  return (
    <div className={`${toast.type} toastmain ${position}`} onMouseEnter={() => setOnPause(toast.id)} onMouseLeave={() => setOnResume(toast.id)}>
        <p>{toast.message}</p>
        <span onClick={() => removeToast(toast.id)}>X</span>
        <span className='bar' style={{animationDuration:  `${toast.duration / 1000}s`}}></span>
    </div>  
  )
}

export default Toast;
