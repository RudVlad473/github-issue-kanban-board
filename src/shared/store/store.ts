import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"

import { issuesReducer, localStorageMiddleware } from "../../widgets/Board"
import { searchReducer } from "../../widgets/SearchBar"
import { api } from "../api"

export const rootReducer = combineReducers({
  search: searchReducer,
  issues: issuesReducer,
  [api.reducerPath]: api.reducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).prepend(localStorageMiddleware.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
