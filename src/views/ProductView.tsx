import React from "react"
import Button from '../components/Button'
import iphone from '../assets/images/iphone.jpg'
import '../styles/ProductView.css'

export default function ProductView() {
  return (<div>
    <h1 className='product-name'>Iphone 11</h1>
    <img className='product-image' alt='product' src={iphone} />
    <h3 className='product-description'>Same as the other ones but with a new number and more expensive. Equipped with the latest technology stolen from android. </h3>
    <span className='product-price'></span>
    <Button title='Add to cart' type='button' />
  </div>)
}
