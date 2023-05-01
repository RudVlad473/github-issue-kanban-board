import { StarOutlined } from "@ant-design/icons"
import { FC, useEffect } from "react"

import { useGetDetailsQuery } from "../../../../shared/api"
import { numberFormatter, pathToName, useAppSelector, useToast } from "../../../../shared/lib"
import { selectRepoInfo } from "../../../../widgets/SearchBar"
import styles from "./Details.module.scss"

export const Details: FC = () => {
  const { name, repo } = useAppSelector(selectRepoInfo)
  const {
    data: details,
    isError,
    error,
  } = useGetDetailsQuery({ name, repo }, { refetchOnMountOrArgChange: true, skip: !name || !repo })

  const fireErrorToast = useToast("Request limit was exceeded (60 per hour)")

  useEffect(() => {
    if (isError && error) {
      fireErrorToast()
    }
  }, [error, fireErrorToast, isError])

  if (!details || Object.keys(details).length === 0) {
    return <></>
  }

  const { full_name, stargazers_count, html_url, owner } = details

  const [repoPublisherName, separator, repoName] = pathToName(full_name)
  const stars = numberFormatter.format(stargazers_count) + " stars"

  return (
    <header className={styles.details}>
      <span>
        <a href={owner.html_url} target="_blank" rel="noopener noreferrer">
          <span className={styles.name}>{repoPublisherName}</span>
        </a>
        <a href={repoName} target="_blank" rel="noopener noreferrer">
          <span className={styles.name}>{separator}</span>
        </a>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <span className={styles.name}>{repoName}</span>
        </a>
      </span>
      <span className={styles.stars}>
        <StarOutlined />
        {stars}
      </span>
    </header>
  )
}
