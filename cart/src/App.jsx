import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "/src/Components/Cart.jsx";
import Styles from "/src/Components/Styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Handle adding items to the cart
  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Handle removing items from the cart
  const handleRemoveFromCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>React Add to Cart System</h1>
      <ProductList handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
