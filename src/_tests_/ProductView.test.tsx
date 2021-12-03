import { render, screen } from "@testing-library/react"

import React, { ReactChild, ReactElement } from "react"
import { shallow, mount } from "enzyme"
import Button from "../components/Button"
import ProductView from "../views/ProductView"


describe('ProduvctView component', () => {
  const wrapper = mount(<ProductView />)

  it('test if component renders', () => {
    render(<ProductView />)
  })

  it('expect an image element', () => {
    const expectedImageElementQuantity = Number(1)
    const actualImageElementQuantity = wrapper.find('.product-image').length

    expect(actualImageElementQuantity).toEqual(expectedImageElementQuantity)
    // const expectHeadersQuantity = Number(3)

  })

  it('expect a button component', () => {
    const expectedButtonComponentQuantity = Number(1)
    const actualButtonComponentQuantity = wrapper.find(Button).length;

    expect(actualButtonComponentQuantity).toEqual(expectedButtonComponentQuantity)
  })

  it('expect product name and description to not be an empty string', () => {

    const actualProductName = wrapper.find('.product-name').text()
    const actualProductDescription = wrapper.find('.product-description').text()

    expect(actualProductName).not.toEqual('')
    expect(actualProductDescription).not.toEqual('')
  })
})
