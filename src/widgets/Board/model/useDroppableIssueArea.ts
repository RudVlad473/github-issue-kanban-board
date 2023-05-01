import { DragEvent, useCallback } from "react"
import { useDispatch } from "react-redux"

import { updateStatus } from "."
import { Status } from "../../../shared/lib"
import { dataTransferIssueKey } from "../consts"
import styles from "../ui/Board/Board.module.scss"

function highlightArea(e: DragEvent<HTMLDivElement>) {
  e.currentTarget.classList.add(styles["content--highlight"])
}

function removeHighlightArea(e: DragEvent<HTMLDivElement>) {
  e.currentTarget.classList.remove(styles["content--highlight"])
}

export function useDroppableIssueArea() {
  const dispatch = useDispatch()

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }, [])

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>, status: Status) => {
      e.preventDefault()

      removeHighlightArea(e)

      const issueNumber: number = +e.dataTransfer.getData(dataTransferIssueKey)

      if (!issueNumber) {
        throw new Error("Issue drop failed")
      }

      dispatch(updateStatus({ issueNumber, newStatus: status }))
    },
    [dispatch]
  )

  const onDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    highlightArea(e)
  }, [])

  const onDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }

    removeHighlightArea(e)
  }, [])

  return {
    onDragOver,
    onDrop,
    onDragEnter,
    onDragLeave,
  } as const
}
