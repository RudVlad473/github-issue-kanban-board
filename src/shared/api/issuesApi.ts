import { api } from "."
import { getIssuesPath } from "../lib/paths"
import { ApiIssues, TRepoInfo } from "../lib/types"

export const issuesApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getIssues: query<ApiIssues, TRepoInfo>({
      query: ({ name, repo }) => getIssuesPath({ name, repo }),
    }),
  }),
})

export const { useGetIssuesQuery } = issuesApi
