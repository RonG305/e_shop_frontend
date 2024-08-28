import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({totalCost}) => {
 

  return (
    <div>
     
        <h3 className="text-slate-950 font-medium text-xl">Order Summary</h3>

        <div className="border-b border-slate-200 mb-4">
          <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
            <p>Subtotal</p>
            <p>Kshs {totalCost.toFixed(2)}</p>
          </div>
          {/* Add more summary items here if needed */}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p>Shipping estimate</p>
          <p>kshs 0.00</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p>Tax Estimate</p>
          <p>Kshs 0.00</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
          <p className="font-bold text-slate-950">Total Order</p>
          <p className="font-bold text-slate-950">
            Kshs {(totalCost).toFixed(2)}
          </p>
        </div>

      
       

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
