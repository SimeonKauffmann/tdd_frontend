import { render, screen } from "@testing-library/react"

import App from "./App"
import React from "react"
import { shallow } from "enzyme"

test("renders learn react link", () => {
  render(<App />)
  expect(2 + 2).toBe(4)
})
