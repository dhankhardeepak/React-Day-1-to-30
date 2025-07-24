import { createContext, useState } from "react";
import ToastContainer from "../ToastContainer";

export const toastContext = createContext();

const ToastProvider = ({children}) => {
    const [toastList, setToastList] = useState([{id:1, type:'success', message:'Success Message'}]);

    const showToast = (type, message) => {
        const id = Date.now();
        const newToast = {
            type,
            message,
            id:id
        }
        setToastList((prev) => [...prev, newToast]);

        setTimeout(() => {
            removeToast(id)
        }, 3000)
    }

    const removeToast = (id) => {
        setToastList((prev) => [...prev].filter((val) => val.id !== id))
    }
    

    return (
        <toastContext.Provider value={{showToast}}>
            {children}
            <ToastContainer toastList={toastList} removeToast={removeToast}/>
        </toastContext.Provider>
    )
}

export default ToastProvider;