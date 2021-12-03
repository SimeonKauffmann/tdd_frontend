import React from "react"
import Button from '../components/Button'

export default function ProductView() {
  return <div>
    <Button title='test' type='input' />
    <img className='product-image' alt='product' />
    <h1 className='product-name'>hj</h1>
    <h3 className='product-description'>Product descrtiption from prop</h3>
    <span className='product-price'></span>
  </div>
}
