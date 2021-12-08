import { Link, MemoryRouter } from "react-router-dom"
import { render as TLRender, screen } from "@testing-library/react"
import { mount, render, shallow } from "enzyme"

import ListView from "../views/ListView"
import React from "react"
import axios from "axios"

jest.mock("axios")

// Start view - User starts at a home page that shows a list of products
describe("Start View smoke test", () => {
  it("contains a div (smoke test) (Enzyme shallow)", () => {
    const wrapper = shallow(<ListView />)
    expect(wrapper.containsMatchingElement(<div></div>)).toBe(true)
  })
})

// describe("Start View list products", () => {
//   beforeEach(() => {
//     const fakeProducts = [
//       { id: "66ed22217e80", name: "Bow", price: 10 },
//       { id: "66ed22217e81", name: "Köttbullar", price: 10 },
//       { id: "66ed22217e82", name: "Potatis", price: 3 },
//       { id: "66ed22217e83", name: "Gurka", price: 5 },
//     ]

//     axios.get.mockImplementation(() => Promise.resolve({ data: fakeProducts }))
//   })
//   it("displays a list of fetched products", async () => {
//     const wrapper = shallow(<ListView />)
//     const expected = 4

//     expect(axios.get).toHaveBeenCalled()
//     expect(wrapper.find(".productCard")).toHaveLength(expected)
//   })
//   it("clicking on a product sends you to the product page", async () => {
//     const wrapper = mount(
//       <MemoryRouter>
//         <ListView />
//       </MemoryRouter>
//     )
//     expect(axios.get).toHaveBeenCalled()
//     expect(wrapper.find(Link).at(0).props().to).toBe("/product/66ed22217e80")
//   })
// })
