import { ApiIssue, Status, isObjectEmpty } from "../../../../shared/lib"

export function getIssueStatus({ assignees, closed_at }: ApiIssue): Status {
  if (!isObjectEmpty(assignees)) {
    return Status.IN_PROGRESS
  } else if (closed_at) {
    return Status.DONE
  }

  return Status.TODO
}
