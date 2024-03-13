import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state

  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = () => {};

  return (
    <CartContext.Provider value={"This is the cart"}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
