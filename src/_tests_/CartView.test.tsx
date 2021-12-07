import { render } from "@testing-library/react"

import React from "react"
import { mount } from "enzyme"

import CartView from "../views/CartView"



describe('CartView component', () => {
  const wrapper = mount(<CartView />)

  it('expects component to render', () => {
    render(<CartView />)
  })

  it('expects cart item quantity to increment by one', () => {
    // Arrange
    const currentQuantity = parseInt(wrapper.find('.iphone-quantity').text())
    const expectedQuantity = currentQuantity + 1
    const button = wrapper.find('button').at(0)

    // Act
    button.simulate('click')
    const newCurrentQuantity = parseInt(wrapper.find('.iphone-quantity').text())

    // Assert

    expect(newCurrentQuantity).toEqual(expectedQuantity)
  })

  it('expects cart item quantity to not be below 0', () => {
    // Arrange
    const currentQuantity = parseInt(wrapper.find('.iphone-quantity').text())
    const expectedQuantity = 0
    const button = wrapper.find('button').at(1)

    // Act
    for (let i = currentQuantity; i >= 0; i--) {
      button.simulate('click')
    }

    const newCurrentQuantity = parseInt(wrapper.find('.iphone-quantity').text())

    // Assert

    expect(newCurrentQuantity).toEqual(expectedQuantity)
  })
})