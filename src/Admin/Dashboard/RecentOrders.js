import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";

import { Link } from "react-router-dom";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");


 

  const getCustomerOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/getOrders/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      setOrders(data.orders.slice(0, 10));
      console.log(data.orders);
    } catch (error) {
      console.log("An error occured while accesing customer orders", error);
    }
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredOrders = orders?.filter((order) => {
    return (
      order.user.toLowerCase().includes(searchText.toLowerCase()) |
      order.order_id.toLowerCase().includes(searchText.toLowerCase()) ||
      order.createdAt.toLowerCase().includes(searchText.toLowerCase()) ||
      order.payment_method.toLowerCase().includes(searchText.toLowerCase()) 
    );
  });

  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">
      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className="font-semibold text-2xl mb-2 text-orange-500">Recent Orders</p>
        <button className=" rounded-md text-white bg-indigo-500 px-3 py-1 mb-2">
          Download CSV
        </button>
      </div>

      <div className=" md:flex items-center justify-between">
        <input
          className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
          placeholder="search here..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <p>Dashboard / Order List</p>
      </div>

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">
        <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
          <thead className="">
            <tr className="border-b border-slate-200">
              <th className="px-4 py-4 ">Order ID</th>
              <th className="px-4 py-4 ">Order Date</th>
              <th className="px-4 py-4 ">Customer</th>
              <th className="px-4 py-4 ">Total Price</th>
              <th className="px-4 py-4 ">Payment method</th>
             

              <th className="px-4 py-4 ">delivery status</th>
              <th className="px-4 py-4 ">Total price</th>
            
            </tr>
          </thead>
          <tbody>
            {filteredOrders?.slice(startIndex, endIndex).map((order) => (
              <tr
                className=" border-b border-slate-200 font-medium text-sm"
                key={order.id}
              >
                <td className="px-4 py-3 flex gap-2 items-center">
                  <Link className=" cursor-pointer text-orange-500" to={`/dashboard/order-view/${order.id}/`}># {order.order_id.slice(0, 8)}</Link>
                  
                </td>
                <td className="px-4 py-3">{order.createdAt}</td>
                <td className="px-4 py-3">{order.user}</td>
                <td className="px-4 py-3">{order.total_price}</td>
                <td className="px-4 py-3">{order.payment_method}</td>
                
                <td className="px-4 py-3">
                  {order.isDelivered}
                  <span
                    className={`${
                      order.isDelivered
                        ? "text-indigo-500 bg-indigo-200"
                        : "text-orange-500 bg-orange-200"
                    }  rounded-md px-2`}
                  >
                    {order.isDelivered ? "delivered" : "pending"}
                  </span>
                </td>
                <td className="px-4 py-3">{order.total_price}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default RecentOrders;
