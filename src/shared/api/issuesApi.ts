import { api } from "."
import { ApiIssues, TRepoInfo } from "../lib"
import { getIssuesPath } from "../lib/paths"

export const issuesApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getIssues: query<ApiIssues, TRepoInfo>({
      query: ({ name, repo }) => getIssuesPath({ name, repo }),
    }),
  }),
})

export const { useGetIssuesQuery } = issuesApi
