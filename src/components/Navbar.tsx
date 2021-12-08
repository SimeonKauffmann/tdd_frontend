import { Link } from "react-router-dom"
import React from "react"

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}
