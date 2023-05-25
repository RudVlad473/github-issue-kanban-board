import { statuses } from "../../../../shared/lib/types"
import { DistributedIssues, TIssues } from "../types"

export function distributeIssues(issues: TIssues): DistributedIssues {
  const distributedIssues: DistributedIssues = []

  for (const status of statuses) {
    const issuesOfCurrentStatus: TIssues = issues
      .filter((issue) => issue.status === status)
      .sort((i1, i2) => i1.index - i2.index)
    distributedIssues.push({
      status,
      issues: issuesOfCurrentStatus,
    })
  }

  return distributedIssues
}
