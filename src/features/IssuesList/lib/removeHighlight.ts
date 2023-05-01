import { DragEvent } from "react"

import styles from "../ui/IssuesList/IssuesList.module.scss"

export function removeHighlight(e: DragEvent<HTMLLIElement>) {
  e.currentTarget.classList.remove(styles["issue--hovered-over"])
}
