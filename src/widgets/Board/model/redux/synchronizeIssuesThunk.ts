import { createAsyncThunk } from "@reduxjs/toolkit"

import { IssuesState, setIssues } from ".."
import { SerializedIssues, isKeyInLocalStorage, isObjectEmpty } from "../../../../shared/lib"
import { getLocalStorageIssues, serializedIssuesToIssues } from "../../lib"

export const synchronizeIssuesThunk = createAsyncThunk(
  "issues/synchronizeIssues",
  async ({ issues, path }: IssuesState, { dispatch }) => {
    const areIssuesSerialized = isKeyInLocalStorage(path)

    if (areIssuesSerialized) {
      const serializedIssues = getLocalStorageIssues(path)

      if (!isObjectEmpty(serializedIssues)) {
        const synchronizedIssues = serializedIssuesToIssues(
          issues,
          serializedIssues as SerializedIssues
        )

        dispatch(
          setIssues({
            issues: synchronizedIssues,
            path,
          })
        )
      }
    } else {
      dispatch(
        setIssues({
          issues,
          path,
        })
      )
    }

    return { issues, path }
  }
)
