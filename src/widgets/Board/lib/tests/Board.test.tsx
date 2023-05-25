import user from "@testing-library/user-event"
import { describe, it } from "vitest"

import App from "../../../../app/App"
import { Status } from "../../../../shared/lib/types"
import { renderWithProviders } from "../../../../shared/lib/utils"

describe("Board", () => {
  let renderedApp: ReturnType<typeof renderWithProviders>
  let searchInput: HTMLElement
  let searchBtn: HTMLElement

  beforeEach(async () => {
    renderedApp = renderWithProviders(<App />)

    searchInput = await renderedApp.findByRole("textbox")
    searchBtn = await renderedApp.findByRole("button")
  })

  it("should not render board by default", () => {
    //arrange
    const board = renderedApp.queryByRole("list")

    //EXPECT
    expect(board).toBeNull()
  })

  it("should render columns after issues were received", async () => {
    //ARRANGE
    const expectedColumnsCount = Object.values(Status).length

    //ACT
    user.type(searchInput, "https://github.com/facebook/react")
    user.click(searchBtn)

    const issuesLists = await renderedApp.findAllByTestId(/^column-/)

    //EXPECT

    expect(issuesLists.length).toEqual(expectedColumnsCount)
  })

  it("should render issues after they were received", async () => {
    //ARRANGE

    //ACT
    user.type(searchInput, "https://github.com/facebook/react")
    user.click(searchBtn)

    const issues = await renderedApp.findAllByTestId(/^issue-/)

    //EXPECT

    expect(issues.length).toEqual(30)
  })
})
