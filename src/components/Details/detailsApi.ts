import { api } from "../../api"
import { TDetails, TRepoInfo } from "../../lib"
import { getDetailsPath } from "../../lib/paths"

export const detailsApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getDetails: query<TDetails, TRepoInfo>({
      query: ({ name, repo }) => getDetailsPath({ name, repo }),
    }),
  }),
})

export const { useGetDetailsQuery } = detailsApi
