import "../styles/ProductView.css"

import Button from "../components/Button"
import React from "react"
import UserContext from "../components/UserContext"
import axios from "axios"
import iphone from "../assets/images/iphone.jpg"
import { productType } from "./ListView"
import { useParams } from "react-router-dom"

export default function ProductView() {
  let { productId } = useParams()

  const [product, setProduct] = React.useState<productType>()

  const userLogin = React.useContext(UserContext)

  React.useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`).then((res) => {
      setProduct(res.data)
    })
  }, [])

  async function onClick() {
    try {
      console.log(`http://localhost:3001/cart/${userLogin}/${productId}`)
      const response = await axios.put(
        `http://localhost:3001/cart/${userLogin}/${productId}`
      )

      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h1 className="product-name">{product && product.name}</h1>
      <img className="product-image" alt="product" src={iphone} />
      <h3 className="product-description">
        Same as the other ones but with a new number and more expensive.
        Equipped with the latest technology stolen from android.{" "}
      </h3>
      <span className="product-price">{product && product.price}</span>
      <Button title="Add to cart" type="button" click={onClick} />
    </div>
  )
}
