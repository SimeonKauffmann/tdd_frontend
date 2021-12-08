
   
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import CartView from "./views/CartView"
import ListView from "./views/ListView"
import LoginView from "./views/LoginView"
import Navbar from "./components/Navbar"
import ProductView from "./views/ProductView"
import React from "react"

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/product/:id" element={<ProductView />} />
        </Routes>
      </React.Fragment>
    </Router>
  )
}
export default Routing