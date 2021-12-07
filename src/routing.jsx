import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Cart from "./views/CartView.tsx"
import List from "./views/ListView"
import Login from "./views/LoginView"
import Navbar from "./components/Navbar"
import Product from "./views/ProductView"
import React from "react"

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/list" component={List} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product/:id" component={Product} />
      </Routes>
    </Router>
  )
}
export default Routing
