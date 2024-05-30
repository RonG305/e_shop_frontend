
import React, { createContext, useState, useEffect } from 'react';
import { clearCart, fetchCartItems } from './apiConfig';
import { removeFromCart } from './apiConfig';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);



  const loadCartItems = async () => {
    const items = await fetchCartItems();
    setCartItems(items);
    calculateTotalCost(items);
  };



  const handleRemoveFromCart = async (item) => {
    await removeFromCart(item.id)
    loadCartItems()
  }

  const handleClearCart = async() => {
    await clearCart()
    loadCartItems()
  }

  const calculateTotalCost = (items) => {
    const total = items.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    setTotalCost(total);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, totalCost, loadCartItems, handleRemoveFromCart, handleClearCart }}>
      {children}
    </CartContext.Provider>
  );
};
