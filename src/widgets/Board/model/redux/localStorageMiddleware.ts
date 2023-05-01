import { createListenerMiddleware } from "@reduxjs/toolkit"

import { setIssues, sortIssuesByDate, swapIssues, updateStatus } from ".."
import { RootState } from "../../../../shared/store"
import {
  getSerializedIssues,
  setLocalStorageIssues,
  sortIssuesByCreatedAt,
  swapIssuesIndicesProps,
} from "../../lib"
import { TIssue, TIssues } from "../../lib/types"

// Create the middleware instance and methods
const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
  actionCreator: setIssues,

  effect: async (action, listenerApi) => {
    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    const path = action.payload.path
    const payloadIssues = action.payload.issues

    setLocalStorageIssues(path, getSerializedIssues(payloadIssues))
  },
})

localStorageMiddleware.startListening({
  actionCreator: swapIssues,
  effect: async (action, listenerApi) => {
    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    const { firstIssueNumber, secondIssueNumber } = action.payload

    const {
      issues: { issues, path },
    } = listenerApi.getState() as RootState

    const updatedIssues: TIssues = swapIssuesIndicesProps(
      issues,
      firstIssueNumber,
      secondIssueNumber
    )

    setLocalStorageIssues(path, getSerializedIssues(updatedIssues))
  },
})

localStorageMiddleware.startListening({
  actionCreator: updateStatus,
  effect: async (action, listenerApi) => {
    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    const { issueNumber, newStatus } = action.payload

    const {
      issues: { issues, path },
    } = listenerApi.getState() as RootState

    const updatedIssues = issues.map((issue) => {
      if (issue.number === issueNumber) {
        return {
          ...issue,
          status: newStatus,
        }
      }

      return issue
    })

    setLocalStorageIssues(path, getSerializedIssues(updatedIssues))
  },
})

localStorageMiddleware.startListening({
  actionCreator: sortIssuesByDate,
  effect: async (action, listenerApi) => {
    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    const { status } = action.payload

    const {
      issues: { issues, path },
    } = listenerApi.getState() as RootState

    const copiedIssues = structuredClone(issues)

    const issuesByStatus = issues.filter((issue) => issue.status === status)

    const sortedIssues = sortIssuesByCreatedAt(issuesByStatus)

    sortedIssues.forEach((sortedIssue, index) => {
      const issue = copiedIssues.find(({ number }) => number === sortedIssue.number) as TIssue
      issue.index = index
    })

    setLocalStorageIssues(path, getSerializedIssues(copiedIssues))
  },
})

export { localStorageMiddleware }
