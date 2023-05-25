import { SerializedIssues } from "../../../../shared/lib/types"
import {
  getLocalStorageValue,
  isObjectEmpty,
  setLocalStorageValue,
} from "../../../../shared/lib/utils"

export function setLocalStorageIssues(key: string, issues: SerializedIssues) {
  if (!isObjectEmpty(issues) && key) {
    setLocalStorageValue<SerializedIssues>(key, issues)
  }
}

export function getLocalStorageIssues(key: string) {
  return getLocalStorageValue<SerializedIssues>(key)
}
