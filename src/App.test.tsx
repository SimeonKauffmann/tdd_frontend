import { render, screen } from "@testing-library/react"

import App from "./App"
import React from "react"
import { shallow } from "enzyme"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

it("renders App (Enzyme)", () => {
  const AppComponent = shallow(<App />)
})
