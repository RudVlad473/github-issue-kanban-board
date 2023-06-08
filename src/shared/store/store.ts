import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"

import { issuesReducer } from "../../widgets/Board"
import { searchReducer } from "../../widgets/SearchBar"
import { api } from "../api"

const persistConfig = {
  key: "root",
  storage,
}

export const rootReducer = combineReducers({
  search: searchReducer,
  issues: issuesReducer,
  [api.reducerPath]: api.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  })
}

export const store = setupStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
