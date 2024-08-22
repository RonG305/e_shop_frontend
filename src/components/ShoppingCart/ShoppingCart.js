import React, { useContext, useEffect, useState } from "react";

import { API_BASE_URL } from "../../apiConfig";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../../CartContext";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, totalCost, handleRemoveFromCart, handleClearCart } =
    useContext(CartContext);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      navigate("/main/checkout");
    }, 2000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-center text-slate-950 font-extrabold text-3xl mb-4">
        Shopping Cart
      </h3>

      <div className="md:flex justify-between gap-4">
        {/* Product List */}

        <div className="md:w-1/2 w-full md:mr-3 scroll-smooth">
          <div>
            {/* Individual Product */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4  border-b border-slate-300 py-2 px-4"
                >
                  <img
                    src={`${API_BASE_URL}/${item.image}`}
                    alt={item.product.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-700">
                      {item.product_name}
                    </p>
                    <p className="text-slate-700">Quantity: {item.quantity}</p>
                    <p className="text-slate-700">Kshs {item.cost}</p>
                    <p className="text-slate-700">
                      <span className="font-bold text-slate-950">
                        Total cost:
                      </span>{" "}
                      Kshs {item.cost * item.quantity}
                    </p>
                    <button
                      className="bg-red-500 px-2 text-white rounded-sm text-sm"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-4">
                <p className="text-center text-slate-700">Your cart is empty</p>
                <Link
                  className=" text-xl text-blue-500 "
                  to={`/main/product-list`}
                >
                  <p className=" text-center">Go shopping 🛍️🛒💘</p>
                </Link>
              </div>
            )}
          </div>
          {cartItems.length > 0 &&  <button
            onClick={handleClearCart}
            className=" bg-red-500 rounded-sm text-white px-4 py-1 mt-2"
          >
            clear cart
          </button>}
         
        </div>

        {/* Order Summary */}
        <div className="md:w-1/2 w-full">
          <OrderSummary totalCost={totalCost} />

          {isLoading ? (
            <button className=" bg-slate-950 w-full text-white rounded-md px-4 py-2 mt-2 buttonload">
              <i class="fa fa-circle-o-notch fa-spin"></i>Loading...
            </button>
          ) : (
            <button
              onClick={handleCheckout}
              className="bg-slate-950 text-white rounded-md px-4 py-2 w-full mt-4"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
