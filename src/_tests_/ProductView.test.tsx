import { render } from "@testing-library/react"

import React, { ReactChild, ReactElement } from "react"
import { mount } from "enzyme"
import Button from "../components/Button"
import ProductView from "../views/ProductView"


describe('ProductView component', () => {
  const wrapper = mount(<ProductView />)

  it('expects component to render', () => {
    render(<ProductView />)
  })

  it('expects an image element', () => {
    const expectedImageElementQuantity = Number(1)
    const actualImageElementQuantity = wrapper.find('.product-image').length

    expect(actualImageElementQuantity).toEqual(expectedImageElementQuantity)

  })

  it('expects a button component', () => {
    const expectedButtonComponentQuantity = Number(1)
    const actualButtonComponentQuantity = wrapper.find(Button).length;

    expect(actualButtonComponentQuantity).toEqual(expectedButtonComponentQuantity)
  })

  it('expects product name and description to not be an empty string', () => {

    const actualProductName = wrapper.find('.product-name').text()
    const actualProductDescription = wrapper.find('.product-description').text()

    expect(actualProductName).not.toEqual('')
    expect(actualProductDescription).not.toEqual('')
  })
})
