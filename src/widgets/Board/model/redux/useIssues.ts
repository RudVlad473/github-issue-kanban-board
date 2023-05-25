import { useEffect } from "react"

import { synchronizeIssuesThunk } from "."
import { selectDistributedIssues } from ".."
import { getIssueStatus } from "../../../../entities/Issue/lib"
import { useGetIssuesQuery } from "../../../../shared/api"
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks"
import { ApiIssues } from "../../../../shared/lib/types"
import { isObjectEmpty } from "../../../../shared/lib/utils"
import { selectRepoInfo } from "../../../SearchBar"

export function useIssues() {
  const { name, repo } = useAppSelector(selectRepoInfo)

  const repoPath = name + "/" + repo

  const { data, isLoading, isFetching } = useGetIssuesQuery(
    { name, repo },
    { refetchOnMountOrArgChange: true, skip: !name || !repo }
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isObjectEmpty(data)) {
      const defaultIssues = (data as ApiIssues).map((issue, index) => ({
        ...issue,
        index,
        status: getIssueStatus(issue),
      }))

      dispatch(synchronizeIssuesThunk({ issues: defaultIssues, path: repoPath }))
    }
  }, [data, dispatch, repoPath])

  const distributedIssues = useAppSelector(selectDistributedIssues)

  return {
    repoPath,
    distributedIssues,
    isLoading,
    isFetching,
  } as const
}
