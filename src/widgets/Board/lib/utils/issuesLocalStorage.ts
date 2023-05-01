import {
  SerializedIssues,
  getLocalStorageValue,
  isObjectEmpty,
  setLocalStorageValue,
} from "../../../../shared/lib"

export function setLocalStorageIssues(key: string, issues: SerializedIssues) {
  if (!isObjectEmpty(issues) && key) {
    setLocalStorageValue<SerializedIssues>(key, issues)
  }
}

export function getLocalStorageIssues(key: string) {
  return getLocalStorageValue<SerializedIssues>(key)
}
