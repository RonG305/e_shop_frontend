import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCartItems, removeFromCart } from "../../apiConfig";

const OrderSummary = ({totalCost}) => {





  return (
    <div>
     
        <h3 className="text-slate-950 font-medium text-xl">Order Summary</h3>

        <div className="border-b border-slate-200 mb-4">
          <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
            <p>Subtotal</p>
            <p>${totalCost.toFixed(2)}</p>
          </div>
          {/* Add more summary items here if needed */}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p>Shipping estimate</p>
          <p>$3.00</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p>Tax Estimate</p>
          <p>$2.00</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p className="font-bold text-slate-950">Total Order</p>
          <p className="font-bold text-slate-950">
            ${(totalCost + 3 + 2).toFixed(2)}
          </p>
        </div>

        <button className="bg-slate-950 text-white rounded-md px-4 py-2 w-full mt-4">
          <Link to={`/main/checkout`}>Checkout</Link>
        </button>

        <Link
          to={"/main/product-list"}
          className="text-blue-500 my-3 block text-center"
        >
          Continue shopping
        </Link>
      </div>
  
  );
};

export default OrderSummary;
