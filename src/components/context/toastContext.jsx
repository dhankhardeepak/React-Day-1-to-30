import { createContext, useState } from "react";
import ToastContainer from "../ToastContainer";

export const toastContext = createContext();

const ToastProvider = ({children}) => {
    const [toastList, setToastList] = useState([]);
    
    const showToast = (type, message, duration=3000) => {
        const id = Date.now();
        const newToast = {
            type,
            message,
            id:id,
            timer:null,
            remaining:duration,
            startTime:Date.now(),
            duration
        }

        newToast.timer = setTimeout(() => {
            removeToast(id)
        }, duration)


        setToastList((prev) => [...prev, newToast]);
    }

    const setOnPause = (id) => {
        setToastList((prev) => {
            return prev.map((prevItem) => {
                if(prevItem.id === id){
                    clearTimeout(prevItem.timer)
                    return {
                        ...prevItem,
                        remaining:prevItem.remaining - (Date.now() - prevItem.startTime)
                    }
                }
                return prevItem;
            })
        })
    }

    const setOnResume = (id) => {
        setToastList((prev) => {
            return prev.map((prevItem) => {
                if(prevItem.id === id){
                    const timer = setTimeout(() => removeToast(id), prevItem.remining)
                    return {...prevItem, timer, startTime:Date.now()}
                }
                return prevItem;
            })
        })
    }

    const removeToast = (id) => {
        setToastList((prev) => [...prev].filter((val) => val.id !== id))
    }

    
    return (
        <toastContext.Provider value={[{showToast, toastList, removeToast, setOnPause, setOnResume}]}>
            {children}
        </toastContext.Provider>
    )
}

export default ToastProvider;