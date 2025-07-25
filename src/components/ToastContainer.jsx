import React, { useContext } from 'react'
import { toastContext } from './context/toastContext'
import Toast from './Toast'
import { createPortal } from 'react-dom'
import './css/toast.css'


const ToastContainer = () => {
  const [{showToast, toastList, removeToast}] = useContext(toastContext) 
  
  return (
    <div>
        <div>
            <button onClick={() => showToast('success', 'this is a success toast')}>Success Toast</button>
            <button onClick={() => showToast('failed', 'this is a failure toast')}>Failure Toast</button>
        </div>
        {
            toastList ? toastList.map((toast) => {
                return createPortal(
                    <Toast toast={toast} removeToast={removeToast}/>, document.body
                )
            }) : null
        }
    </div>
  )
}

export default ToastContainer
