import { Input } from "antd"
import { FC, useCallback } from "react"
import { ToastContainer } from "react-toastify"

import { setUrl } from "../.."
import { useAppDispatch, useToast, validateUrl } from "../../../../shared/lib"

const { Search } = Input

const searchSuggestions: string[] = [
  "facebook/react",
  "vuejs/core",
  "angular/angular",
  "remix-run/react-router",
  "reduxjs/redux-toolkit",
].map((i) => `https://github.com/${i}`)

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch()

  const fireErrorToast = useToast("Provided url is invalid")

  const onSearch = useCallback(
    (value: string) => {
      const isValidUrl = validateUrl(value)

      if (!isValidUrl) {
        fireErrorToast()
        return
      }

      dispatch(setUrl(value))
    },
    [dispatch, fireErrorToast]
  )

  return (
    <>
      <Search
        placeholder="Enter repo URL"
        enterButton="Load issues"
        size="middle"
        defaultValue="https://github.com/facebook/react"
        bordered
        loading={false}
        onSearch={onSearch}
        
        list="search-suggestions"
      />
      <datalist id="search-suggestions">
        {searchSuggestions.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      <ToastContainer />
    </>
  )
}
