import { Link, BrowserRouter as Router, useParams } from "react-router-dom"

import React from "react"

interface Props {
  id: string
}

export default function ProductCard(props: Props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div>a product</div>
    </Link>
  )
}
