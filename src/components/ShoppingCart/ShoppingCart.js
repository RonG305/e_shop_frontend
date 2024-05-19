import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

import { API_BASE_URL, fetchCartItems, getToken, removeFromCart } from "../../apiConfig"; 
import OrderSummary from "./OrderSummary";
import { CartContext } from "../../CartContext";

const ShoppingCart = () => {


const {cartItems, totalCost, handleRemoveFromCart} = useContext(CartContext)

  



  

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-center text-slate-950 font-extrabold text-3xl mb-4">
        Shopping Cart
      </h3>

      <div className="md:flex justify-between gap-4">
        {/* Product List */}
        <div className="md:w-1/2 w-full md:mr-3">
          {/* Individual Product */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 justify-between border-b border-slate-300 py-2 px-4"
              >
                <img
                  src={`${API_BASE_URL}/${item.image}`}
                  alt={item.product.name}
                  className="w-32 h-32 object-cover"
                />
                <div>
                  <p className="font-bold text-slate-700">{item.product_name}</p>
                  <p className="text-slate-700">Quantity: {item.quantity}</p>
                  <p className="text-slate-700">${item.cost}</p>
                  <p className="text-slate-700"><span className="font-bold text-slate-950">Total cost:</span> ${item.cost * item.quantity}</p>
                  <button className="text-blue-500 font-bold" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-700">Your cart is empty</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="md:w-1/2 w-full">
         <OrderSummary totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
