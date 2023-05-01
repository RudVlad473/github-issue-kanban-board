import { configureStore } from "@reduxjs/toolkit"

import { issuesReducer, localStorageMiddleware } from "../../widgets/Board"
import { searchReducer } from "../../widgets/SearchBar"
import { api, detailsApi, issuesApi } from "../api"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    issues: issuesReducer,
    [detailsApi.reducerPath]: detailsApi.reducer,
    [issuesApi.reducerPath]: issuesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]).prepend(localStorageMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
