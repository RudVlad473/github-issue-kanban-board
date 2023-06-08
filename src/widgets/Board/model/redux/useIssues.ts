import { selectDistributedIssues } from ".."
import { useGetIssuesQuery } from "../../../../shared/api"
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks"
import { selectRepoInfo } from "../../../SearchBar"

export function useIssues() {
  const dispatch = useAppDispatch()

  const { name, repo } = useAppSelector(selectRepoInfo)

  const repoPath = name + "/" + repo

  const { data, isLoading, isFetching } = useGetIssuesQuery(
    { name, repo },
    { refetchOnMountOrArgChange: true, skip: !name || !repo }
  )

  

  const distributedIssues = useAppSelector(selectDistributedIssues)

  return {
    repoPath,
    distributedIssues,
    isLoading,
    isFetching,
  } as const
}
