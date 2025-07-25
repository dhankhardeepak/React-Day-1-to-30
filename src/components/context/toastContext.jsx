import { createContext, useState } from "react";
import ToastContainer from "../ToastContainer";

export const toastContext = createContext();

const ToastProvider = ({children}) => {
    const [toastList, setToastList] = useState([]);

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
        <toastContext.Provider value={[{showToast, toastList, removeToast}]}>
            {children}
        </toastContext.Provider>
    )
}

export default ToastProvider;