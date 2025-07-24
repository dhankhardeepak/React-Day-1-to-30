import React from 'react'

const Toast = ({toast, removeToast}) => {
  return (
    <div className={`${toast.type} toastmain`}>
        <p>{toast.message}</p>
        <span onClick={() => removeToast(toast.id)}>X</span>
        <span className='bar'></span>
    </div>
  )
}

export default Toast;
