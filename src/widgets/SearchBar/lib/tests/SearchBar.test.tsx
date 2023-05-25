import { screen } from "@testing-library/react"
import { describe, it } from "vitest"

import { SearchBar } from "../.."
import { renderWithProviders } from "../../../../shared/lib/utils"

describe("SearchBar", () => {
  it("should render searchbar", () => {
    //ARRANGE
    renderWithProviders(<SearchBar />)
    //ACT

    //EXPECT

    expect(screen.getByPlaceholderText("Enter repo URL", { exact: true })).toBeInTheDocument()
  })
})
