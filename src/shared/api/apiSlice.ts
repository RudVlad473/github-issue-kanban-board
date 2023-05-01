import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { baseUrl } from "../consts"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
})
