import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { baseUrl } from "../lib/consts"
import { Issues } from "../lib/types"

export const githubIssuesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getIssuesByRepo: builder.query<Issues, string>({
      query: (name) => `${name}/issues`,
    }),
  }),
})

export const { useGetIssuesByRepoQuery } = githubIssuesApi
