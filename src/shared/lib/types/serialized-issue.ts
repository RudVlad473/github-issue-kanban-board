import { Status } from "."

export type SerializedIssue = {
  issueNumber: number
  index: number
  status: Status
}

export type SerializedIssues = SerializedIssue[]

export type SerializedIssuesMap = Map<SerializedIssue["issueNumber"], SerializedIssue>
