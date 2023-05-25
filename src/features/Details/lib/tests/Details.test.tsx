import user from "@testing-library/user-event"
import { describe, it } from "vitest"

import App from "../../../../app/App"
import { Status, renderWithProviders } from "../../../../shared/lib"

describe("Details", () => {
  let renderedApp: ReturnType<typeof renderWithProviders>
  let searchInput: HTMLElement
  let searchBtn: HTMLElement

  beforeEach(async () => {
    renderedApp = renderWithProviders(<App />)

    searchInput = await renderedApp.findByRole("textbox")
    searchBtn = await renderedApp.findByRole("button")
  })

  it("should not render details by default", () => {
    //arrange
    const details = renderedApp.queryByTestId("details")

    //EXPECT
    expect(details).toBeNull()
  })

  it("should render links after issues were received", async () => {
    //ACT
    user.type(searchInput, "https://github.com/facebook/react")
    user.click(searchBtn)

    const issues = await renderedApp.findAllByTestId(/^issue-/)

    const links = await renderedApp.findAllByRole("link")

    //EXPECT
    expect(links.length).toEqual(3)
  })

  it("should render stars count after issues were received", async () => {
    //ACT
    user.type(searchInput, "https://github.com/facebook/react")
    user.click(searchBtn)

    const issues = await renderedApp.findAllByTestId(/^issue-/)

    const stars = await renderedApp.queryByRole("stars")

    //EXPECT
    expect(stars).not.toBeNull()
  })
})
