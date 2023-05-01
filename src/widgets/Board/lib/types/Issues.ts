import { ApiIssue, Status } from "../../../../shared/lib"

export type TIssue = ApiIssue & {
  index: number
  status: Status
}

export type TIssues = TIssue[]

export type DistributedIssues = {
  status: Status
  issues: TIssues
}[]
