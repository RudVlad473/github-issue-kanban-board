import { ApiIssue, Status } from "../../../../shared/lib/types"

export type TIssue = ApiIssue & {
  index: number
  status: Status
}

export type TIssues = TIssue[]

export type DistributedIssues = {
  status: Status
  issues: TIssues
}[]
