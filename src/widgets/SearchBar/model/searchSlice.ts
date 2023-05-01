import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { TRepoInfo } from "../../../shared/lib"
import { RootState } from "../../../shared/store"

const initialState = {
  url: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload
    },
  },
})

export const { setUrl } = searchSlice.actions

export const selectUrl = (state: RootState) => state.search.url
export const selectRepoInfo = (state: RootState): TRepoInfo => {
  const [name, repo] = state.search.url.split("/").slice(-2)

  // if (!name || !repo) {
  //   throw new Error(
  //     "Provided url does not contain either profile name or repository"
  //   )
  // }

  return {
    name,
    repo,
  }
}

export const searchReducer = searchSlice.reducer
