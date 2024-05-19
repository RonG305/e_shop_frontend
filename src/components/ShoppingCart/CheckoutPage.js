import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { fetchCartItems } from "../../apiConfig";
import { API_BASE_URL } from "../../apiConfig";

const CheckoutPage = () => {


  const [totalCost, setTotalCost] = useState(0);

  const loadCartItems = async () => {
    const items = await fetchCartItems();
    calculateTotalCost(items);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  const calculateTotalCost = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.cost * item.quantity,
      0
    );
    console.log(total);
    setTotalCost(total);
  };


  console.log("Total Cost: ", totalCost)


  const userId = localStorage.getItem("userId")
  const [formData, setFormData] = useState({
    user: userId, 
    full_name: "",
    email_address: "",
    address: "",
    city: "",
    zip_code: "",
    phone_number: "",

    total_price: 0,
    payment_method: "M-PESA",
    is_paid: false,
    isDelivered: false,

    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/createOrder/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      console.log("Order created successfully:", data);
     
    } catch (error) {
      console.error('An error occurred while creating the order', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className=" rounded-md bg-gray-100 p-4">
      <h3 className="text-center text-slate-950 font-extrabold text-3xl my-4">
        Checkout
      </h3>

      <div className=" md:flex ">
        <div className="container mx-auto py-8">
          <div  className="max-w-lg mx-auto">

                
                <div className="mb-4">
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-700"
              >
                User
              </label>
              <input
                type="text"
                id="user"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

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
                id="full_name"
                name="full_name"
                value={formData.full_name}
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
                id="email_address"
                name="email_address"
                value={formData.email_address}
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
                id="zip_code"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>


             {/* Phone Number */}
             <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>


             {/* Phone Number */}
             <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Total price
              </label>
              <input
                type="text"
                id="total_price"
                name="total_price"
                value={totalCost}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>


                {/* Phone Number */}
                <div className="mb-4">
              <label
                htmlFor="payment_method"
                className="block text-sm font-medium text-gray-700"
              >
                Payment method
              </label>
              <input
                type="text"
                id="payment_method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

          
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/2 w-full">
          <OrderSummary totalCost={totalCost}  />

        <button type="submit" className="bg-slate-950 w-full text-white rounded-md px-4 py-2  mt-4">
          Place Order
        </button>
        </div>

      </div>
      {/* Order summary */}
    </form>
  );
};

export default CheckoutPage;
