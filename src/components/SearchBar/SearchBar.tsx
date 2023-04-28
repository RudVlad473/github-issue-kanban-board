import { Input } from "antd"
import { FC } from "react"

const { Search } = Input

export const SearchBar: FC = () => {
  return (
    <Search
      placeholder="Enter repo URL"
      enterButton="Load issues"
      size="middle"
      loading={false}
    />
  )
}
