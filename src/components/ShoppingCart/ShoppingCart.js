import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ShoppingCart = () => {

  const { state , dispatch} = useCart();


  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };


  return (
    <div className="container mx-auto py-8">
      <h3 className="text-center text-slate-950 font-extrabold text-3xl mb-4">
        Shopping Cart
      </h3>

      <div className="md:flex justify-between gap-4">
        {/* Product List */}
        <div className="md:w-1/2 w-full md:mr-3">
          {/* Individual Product */}
          {state.items.length > 0 ? (
            state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 justify-between border-b border-slate-300 py-2 px-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover"
                />
                <div>
                  <p className="font-bold text-slate-700">{item.name}</p>
                  <p className="text-slate-700">Quantity: {item.quantity}</p>
                  <p className="text-slate-700">${item.price}</p>
                  <p className="text-slate-700"> <span className=" font-bold text-slate-950">Total cost:</span> ${item.price * item.quantity}</p>
                  <button className=" text-blue-500 font-bold" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-700">Your cart is empty</p>
          )}
          {/* Add more products here */}
        </div>

        {/* Order Summary */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-slate-950 font-medium text-xl">Order summary</h3>

          <div className="border-b border-slate-200 mb-4">
            <div className="flex items-center justify-between text-sm text-slate-700 py-2 px-4">
              <p>Subtotal</p>
              <p>$99.00</p>
            </div>
            {/* Add more summary items here */}
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
            <p className="font-bold text-slate-950">$104.00</p>
          </div>

          <button className="bg-slate-950 text-white rounded-md px-4 py-2 w-full mt-4">
            <Link to={`/main/checkout`}>Checkout</Link>
          </button>

          <Link to={"/main/product-list"} className="text-blue-500 my-3 block text-center">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
