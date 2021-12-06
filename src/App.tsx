import "./App.css"

import ListView from "./views/ListView"
import ProductView from "./views/ProductView"
import CartView from "./views/CartView"
import React from "react"

// import axios from "axios"

function App() {
  // const [products, setProducts] = React.useState()

  // React.useEffect(() => {
  //   axios.get("localhost:3001/api").then((res) => {
  //     setProducts(res.data)
  //   })
  // }, [])

  return <div className="App">{<CartView />}</div>
}

export default App
