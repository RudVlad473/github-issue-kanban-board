import { TIssue, TIssues } from "../types"

export function swapIssuesIndicesProps(
  issues: TIssues,
  firstIssueNumber: TIssue["number"],
  secondIssueNumber: TIssue["number"]
): TIssues {
  const firstIssue = issues.find(({ number }) => number === firstIssueNumber)
  const secondIssue = issues.find(({ number }) => number === secondIssueNumber)

  if (!firstIssue || !secondIssue) {
    throw new Error("Issues cannot be swaped because they weren't found")
  }

  const firstIssueIndex = firstIssue.index

  return issues.map((issue) => {
    const isFirstIssue = issue.number === firstIssue.number
    const isSecondIssue = issue.number === secondIssue.number

    if (isFirstIssue) {
      return {
        ...issue,
        index: secondIssue.index,
      }
    } else if (isSecondIssue) {
      return {
        ...issue,
        index: firstIssueIndex,
      }
    }

    return issue
  })
}
