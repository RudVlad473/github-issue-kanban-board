export function getLocalStorageValue<T>(key: string): T | undefined {
  const localStorageValue = localStorage.getItem(key) || "null"
  if (localStorageValue === "undefined") {
    return undefined
  }
  return JSON.parse(localStorageValue) || undefined
}

export function setLocalStorageValue<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function isKeyInLocalStorage(key: string): boolean {
  const value = localStorage.getItem(key)

  return Boolean(value)
}
