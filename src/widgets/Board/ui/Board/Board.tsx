import { FC } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"

import { LoadingBoard } from ".."
import { sortIssuesByDate, useDroppableIssueArea, useIssues } from "../.."
import { IssuesList } from "../../../../features/IssuesList"
import styles from "./Board.module.scss"

export const Board: FC = () => {
  const { distributedIssues, isLoading, isFetching } = useIssues()

  const { onDrop, ...dropAreaProps } = useDroppableIssueArea()

  const dispatch = useDispatch()

  const areIssuesEmpty = distributedIssues?.map(({ issues }) => issues.length === 0).every((i) => i)

  if (areIssuesEmpty) {
    return <></>
  }

  return (
    <>
      {isLoading || isFetching ? (
        <LoadingBoard />
      ) : (
        <ul className={styles.board}>
          {distributedIssues.map(({ issues, status }) => (
            <li key={status} className={styles.bucket}>
              <h1
                className={styles.header}
                title={status}
                onClick={() =>
                  dispatch(sortIssuesByDate({ status }))
                }>{`${status} (${issues.length})`}</h1>
              <div className={styles.content} {...dropAreaProps} onDrop={(e) => onDrop(e, status)}>
                <IssuesList issues={issues} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </>
  )
}
