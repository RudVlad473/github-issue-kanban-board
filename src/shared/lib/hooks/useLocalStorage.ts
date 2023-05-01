import { useCallback } from "react"

export function useLocalStorage<T>(key: string) {
  const setLocalStorageValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  const getLocalStorageValue = useCallback((): T | undefined => {
    const localStorageValue = localStorage.getItem(key) || "null"
    if (localStorageValue === "undefined") {
      return undefined
    }
    return JSON.parse(localStorageValue) || undefined
  }, [key])

  // useEffect(() => {
  //   const lsValue = getLocalStorageValue<T>(key)

  //   if (lsValue) {
  //     setLocalStorageValue(lsValue)
  //   }
  // }, [key, setLocalStorageValue])

  return [getLocalStorageValue, setLocalStorageValue] as const
}
