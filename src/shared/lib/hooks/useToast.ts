import { useCallback } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function useToast(message: string): () => void {
  return useCallback(
    () =>
      toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
    [message]
  )
}
