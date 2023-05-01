import { DragEvent, useCallback } from "react"
import { useDispatch } from "react-redux"

import { ApiIssue } from "../../../shared/lib"
import { swapIssues } from "../../../widgets/Board"
import { dataTransferIssueKey } from "../../../widgets/Board/consts"
import { highlightEventTarget, removeHighlight } from "../lib"

export function useDraggableIssue() {
  const dispatch = useDispatch()

  const onDragStart = useCallback((e: DragEvent<HTMLLIElement>, issue: ApiIssue) => {
    e.dataTransfer.setData(dataTransferIssueKey, issue.number.toString())
  }, [])

  // const onDragEnd = useCallback((e: DragEvent<HTMLLIElement>) => {}, [])

  const onDragEnter = useCallback((e: DragEvent<HTMLLIElement>) => {
    e.preventDefault()

    highlightEventTarget(e)
  }, [])

  const onDragOver = useCallback((e: DragEvent<HTMLLIElement>) => {
    e.preventDefault()
  }, [])

  const onDragLeave = useCallback((e: DragEvent<HTMLLIElement>) => {
    e.preventDefault()

    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }

    removeHighlight(e)
  }, [])

  const onDrop = useCallback(
    (e: DragEvent<HTMLLIElement>, issue: ApiIssue) => {
      e.preventDefault()

      removeHighlight(e)

      const firstIssueNumber = +e.dataTransfer.getData(dataTransferIssueKey)
      const secondIssueNumber = issue.number

      if (!secondIssueNumber) {
        throw new Error("Issue number was not attached")
      }

      dispatch(swapIssues({ firstIssueNumber, secondIssueNumber }))
    },
    [dispatch]
  )

  const draggable = true

  return {
    draggable,
    onDragStart,
    onDragLeave,
    // onDragEnd,
    onDragOver,
    onDrop,
    onDragEnter,
  } as const
}
