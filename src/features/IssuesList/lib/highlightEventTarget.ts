import { DragEvent } from "react"

import styles from "../ui/IssuesList/IssuesList.module.scss"

export function highlightEventTarget(e: DragEvent<HTMLLIElement>) {
  e.currentTarget.classList.add(styles["issue--hovered-over"])
}
