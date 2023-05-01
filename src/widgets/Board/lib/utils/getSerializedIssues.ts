import { TIssues } from "../.."
import { SerializedIssues } from "../../../../shared/lib"

export function getSerializedIssues(issues: TIssues): SerializedIssues {
  return issues.map(({ number, index, status }) => ({
    issueNumber: number,
    index,
    status,
  }))
}
