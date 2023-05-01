import { FC } from "react"

import { ApiIssue, getRelativeTime } from "../../../../shared/lib"
import styles from "./Issue.module.scss"

export const Issue: FC<ApiIssue> = ({ title, user, comments, number, created_at }) => {
  const openedAt = "opened " + getRelativeTime(created_at)

  return (
    <section className={styles.issue}>
      <header className={styles.header} title={title}>
        {/* <a href={url} target="_blank" rel="noreferrer"> */}
        {title}
        {/* </a> */}
      </header>
      <div className={styles.details}>
        <span>{`#${number}`}</span> <span>{openedAt}</span>
      </div>
      <footer className={styles.footer}>
        <span>{user.site_admin ? "Admin" : "User"}</span> <span>|</span>{" "}
        <span>{`Comments: ${comments}`}</span>
      </footer>
    </section>
  )
}
