import { SerializedIssues } from "../../../../shared/lib/types"
import { TIssues } from "../types"

export function getSerializedIssues(issues: TIssues): SerializedIssues {
  return issues.map(({ number, index, status }) => ({
    issueNumber: number,
    index,
    status,
  }))
}
