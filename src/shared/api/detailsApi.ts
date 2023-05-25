import { api } from "."
import { getDetailsPath } from "../lib/paths"
import { TDetails, TRepoInfo } from "../lib/types"

export const detailsApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getDetails: query<TDetails, TRepoInfo>({
      query: ({ name, repo }) => getDetailsPath({ name, repo }),
    }),
  }),
})

export const { useGetDetailsQuery } = detailsApi
