import React, { useEffect, useState } from 'react'

import { FaArrowUp } from 'react-icons/fa6';
import { IoCartOutline } from "react-icons/io5";
import { API_BASE_URL } from '../../apiConfig';

const OrdersCard = () => {

    const [ordersCount, setOrdersCount] = useState(0)


    const getCustomerOrdersCount = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/orders/getOrders/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
          const data = await response.json();
          setOrdersCount(data.orders_count);
          console.log(data);
        } catch (error) {
          console.log("An error occured while accesing customer orders", error);
        }
      };


      useEffect(() => {
        getCustomerOrdersCount()
      }, [])

      
  return (
    <div className=' rounded-md border border-slate-200 px-3 py-1  '>
        <div className=' flex items-center justify-between'>
        <p className=' text-sm font-semibold'>Orders</p>
        <IoCartOutline className=' text-indigo-500' size={25} />
        </div>
       
        <h4 className=' text-xl font-extrabold'>{ordersCount}</h4>
        <p className=' text-sm flex items-center gap-2'><span className=' bg-green-200 text-green-600 flex items-center gap-2 w-fit text-xs px-3 py-1 rounded-sm'><FaArrowUp /> 15%</span> from previous month</p>
        
    </div>
  )
}

export default OrdersCard