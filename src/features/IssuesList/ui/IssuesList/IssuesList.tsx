import { FC } from "react"

import { useDraggableIssue } from "../.."
import { Issue } from "../../../../entities/Issue/ui/Issue"
import styles from "./IssuesList.module.scss"
import { ApiIssues } from "../../../../shared/lib/types"

export type IssuesListProps = {
  issues: ApiIssues
}

export const IssuesList: FC<IssuesListProps> = ({ issues }) => {
  const { onDrop, onDragStart, ...dragOptions } = useDraggableIssue()

  return (
    <ul className={styles["issues-list"]}>
      {issues.map((issue, index) => (
        <li
          data-testid={`issue-${index}`}
          key={issue.number}
          className={styles.issue}
          {...dragOptions}
          onDragStart={(e) => onDragStart(e, issue)}
          onDrop={(e) => onDrop(e, issue)}>
          <Issue {...issue} />
        </li>
      ))}
    </ul>
  )
}
