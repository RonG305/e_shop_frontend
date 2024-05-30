import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";

const CustomerOrders = () => {

  const [orders, setOrders] = useState([])


  const getCustomerOrders  = async() => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/getOrder`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      const data = await response.json()
      setOrders(data)
      console.log(data)

    } catch(error) {
      console.log("An error occured while accesing customer orders", error)
    }
  }


  useEffect(() => {
    getCustomerOrders()
  }, [])


  return (
    <div>
      <p className=" my-3 text-center"><span className=" text-3xl md:text-6xl">🎉 </span>Thank You for shopping with us <span className=" text-3xl md:text-6xl">🎉 </span>🎁</p>
      <p className=" text-bold text-2xl font-bold">MY ORDERS</p>

      <div>
        <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">
          <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
            <thead>
              <tr className="border-b border-slate-200">
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Total Price</th>
                <th>Payment method</th>
                <th>delivery status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (
                  <tr className="border-b border-slate-200">
                  <td className=" px-2 py-4">{order.order_id}</td>
                  <td className=" px-2 py-4">{order.createdAt}</td>
                  <td className=" px-2 py-4">{order.total_price}</td>
                  <td className=" px-2 py-4">{order.payment_method}</td>
                  <td className=" px-2 py-4"><span className={` ${order.isDelivered ? "bg-green-500 text-white": "bg-yellow-400"}  px-1 rounded-sm`}>{order.isDelivered? "delivered": "pending"}</span></td>
              </tr>
              ))}
                

              
            </tbody>
          </table>

          <button>clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
