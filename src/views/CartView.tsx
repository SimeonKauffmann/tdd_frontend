import React, { useState } from "react";
import '../styles/CartView.css'

export default function CartView() {
  const [count, setCount] = useState(1);

  const handleButtonPress = (event: any) => {
    const operator = event.target.textContent === "+" ? "+" : "-";

    if (operator === "+") {
      setCount((prev) => prev + 1);
    }

    if (operator === "-" && count !== 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="root">
      <h1>Cart</h1>
      <p>All items currently in your cart</p>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Iphone 11</td>
              <td>10 000</td>
              <td className="iphone-quantity">{count}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleButtonPress}>+</button>
        <button onClick={handleButtonPress}>-</button>
      </div>
    </div>
  );
}
