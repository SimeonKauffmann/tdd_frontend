import React from "react"
import axios from "axios"

// import ProductCard from '../components/ProductCard'

export type productType = {
  id: string
  name: string
  price: number
}

export default function ListView() {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    axios.get("localhost:3001/products").then((res) => {
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
    <div>
         <p>List</p>
      {products &&
        products.map((product) => (
          <div className={"productCard"} key={product}>
            a product
          </div>
        ))}
       
    </div>
  )
}
