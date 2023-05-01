import { SerializedIssues } from "../../../../shared/lib"
import { TIssues } from "../types"

export function serializedIssuesToIssues(
  issues: TIssues,
  serializedIssues: SerializedIssues
): TIssues {
  return issues.map((issue) => {
    const correspondingSerializedIssue = serializedIssues.find(
      (serializedIssue) => serializedIssue.issueNumber === issue.number
    )

    return {
      ...issue,
      index: correspondingSerializedIssue?.index ?? -1,
      status: correspondingSerializedIssue?.status || issue.status,
    }
  })
}
