import ProductCard from "../components/ProductCard"
import React from "react"
import { Route } from "react-router-dom"
import axios from "axios"

// import ProductCard from '../components/ProductCard'

export type productType = {
  id: string
  name: string
  price: number
}

export default function ListView() {
  const [products, setProducts] = React.useState<productType[]>([])

  React.useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      setProducts(res.data)
    })
  }, [])

  //   React.useEffect(() => {
  //     fetch("http://localhost:3001/products")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data)
  //       })
  //   }, [])

  return (
    <React.Fragment>
      <p>List</p>
      {products &&
        products.map((product) => (
          <ProductCard id={product.id} key={product.id} />
        ))}
    </React.Fragment>
  )
}
