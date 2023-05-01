import { TIssues } from "../types"

export function sortIssuesByCreatedAt(issues: TIssues) {
  return issues
    .slice()
    .sort((i1, i2) => (new Date(i2.created_at) as any) - (new Date(i1.created_at) as any))
}
