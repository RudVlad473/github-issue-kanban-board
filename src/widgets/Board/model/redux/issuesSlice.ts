import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../../../../shared/store"
import { distributeIssues, swapIssuesIndicesProps } from "../../lib"
import { DistributedIssues, TIssue, TIssues } from "../../lib/types"

export type IssuesState = {
  path: string
  issues: TIssues
}

const initialState: IssuesState = {
  path: "",
  issues: [],
}

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<IssuesState>) => {
      state.issues = action.payload.issues
      state.path = action.payload.path
    },

    swapIssues: (
      state,
      action: PayloadAction<{
        firstIssueNumber: TIssue["number"]
        secondIssueNumber: TIssue["number"]
      }>
    ) => {
      const { firstIssueNumber, secondIssueNumber } = action.payload

      const firstIssue = state.issues.find(({ number }) => number === firstIssueNumber)
      const secondIssue = state.issues.find(({ number }) => number === secondIssueNumber)

      if (!firstIssue || !secondIssue) {
        throw new Error("One of the issues was not found")
      }

      //can only swap issues within the same status bucket
      if (firstIssue.status !== secondIssue.status) {
        return
      }

      const updatedIssues = swapIssuesIndicesProps(
        state.issues,
        firstIssueNumber,
        secondIssueNumber
      )

      state.issues = updatedIssues

      // firstIssue.status = secondIssue.status
    },

    updateStatus: (
      state,
      action: PayloadAction<{
        issueNumber: TIssue["number"]
        newStatus: TIssue["status"]
      }>
    ) => {
      const { issueNumber, newStatus } = action.payload

      const issue = state.issues.find(({ number }) => number === issueNumber)

      if (!issue) {
        throw new Error("Such issue does not exist")
      }

      if (issue.status === newStatus) {
        return
      }

      const newIssueIndex = state.issues.reduce((statusIssuesCount, { status }) => {
        if (status === newStatus) {
          return statusIssuesCount + 1
        }

        return statusIssuesCount
      }, 0)

      issue.status = newStatus
      issue.index = newIssueIndex
    },
  },
})

export const { setIssues, swapIssues, updateStatus } = issuesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIssues = ({ issues }: RootState) => issues.issues

export const selectDistributedIssues = ({ issues }: RootState): DistributedIssues => {
  return distributeIssues(issues.issues)
}

export const issuesReducer = issuesSlice.reducer
