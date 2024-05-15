import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
    <div className=" rounded-md bg-gray-100 p-4">

<h3 className="text-center text-slate-950 font-extrabold text-3xl my-4">
            Checkout
          </h3>
        
      <div className=" md:flex ">
        <div className="container mx-auto py-8">
          

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* ZIP Code */}
            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* Expiration Date */}
            <div className="mb-4">
              <label
                htmlFor="expirationDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            {/* CVV */}
            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
          </form>
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
            Confirm order
          </button>

          <Link to={"/"} className="text-blue-500 my-3 block text-center">
            Continue shopping
          </Link>
        </div>
      </div>
      {/* Order summary */}
    </div>
  );
};

export default CheckoutPage;
