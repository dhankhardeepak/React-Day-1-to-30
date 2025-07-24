import { useContext } from "react"
import { toastContext } from "../context/toastContext"

export const useToast = () => {
    const a = useContext(toastContext)
    return a
}