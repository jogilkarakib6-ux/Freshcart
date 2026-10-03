import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  const updateQuantity = (id, amount) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );

  };


  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (

    <BrowserRouter>

      <Navbar cartCount={cartCount} />

      <Routes>

        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />

        <Route
          path="/success"
          element={<OrderSuccess />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;