import React, { useState, useEffect } from "react";
import "../styles/CartView.css";
import axios from "axios";

const productData: { id: string; name: string; price: number }[] = [
  { id: "66ed22217e81", name: "Köttbullar", price: 10 },
  { id: "66ed22217e83", name: "Potatis", price: 3 },
];
type CartItemType = {
  productId: string;
  amount: number;
};
// type AppProps = {
//   cartItems: CartItemType[];
//   addToCart: (clickedItem: CartItemType) => void;
//   removeFromCart: (id: string) => void;
// };
const CartView: React.FC = () => {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const findItem = (item: CartItemType) => {
    return productData.findIndex((element) => element.id === item.productId);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/carts/secret")
      .then((res) => setCartItems(res.data.cart));
  }, []);
  console.log(cartItems);
  const AddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find(
        (item) => item.productId === clickedItem.productId
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.productId === clickedItem.productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const RemoveFromCart = (productId: string) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.productId === productId) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };
  const DeleteFromCart = (clickedItem: CartItemType) => {
    const isItemInCartIndex = cartItems.findIndex(
      (item) => item.productId === clickedItem.productId
    );
    const newCartItems = [...cartItems];
    newCartItems.splice(isItemInCartIndex, 1);
    setCartItems(newCartItems);
  };
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce(
      (ack: number, item) =>
        ack + item.amount * productData[findItem(item)].price,
      0
    );
  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Amount</th>
          <th>Subtotal</th>
        </tr>
        {cartItems.length === 0 ? <p>No items here</p> : null}
        {cartItems.map((item) => (
          <tr key={item.productId}>
            <td>
              {findItem(item) === -1 ? null : productData[findItem(item)].name}
            </td>
            <td>
              {findItem(item) === -1 ? null : productData[findItem(item)].price}
              kr
            </td>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                disabled={item.amount <= 1}
                style={{
                  height: 20,
                }}
                onClick={() => RemoveFromCart(item.productId)}
              >
                -
              </button>
              <p
                style={{
                  padding: 10,
                }}
              >
                {item.amount}
              </p>
              <button onClick={() => AddToCart(item)}>+</button>
            </td>
            <td>{item.amount * productData[findItem(item)].price}kr</td>
            <td>
              <button onClick={() => DeleteFromCart(item)}>Delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>{`${calculateTotal(cartItems)} kr`}</td>
        </tr>
        <tr>
          <button className="Checkout">CHCKEOUT</button>
        </tr>
      </table>
    </div>
  );
};
export default CartView;
