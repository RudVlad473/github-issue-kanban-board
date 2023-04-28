import { configureStore } from "@reduxjs/toolkit"

import { githubIssuesApi } from "../../api"

export const store = configureStore({
  reducer: {
    [githubIssuesApi.reducerPath]: githubIssuesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubIssuesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
