import React from 'react'

import { FaArrowUp } from 'react-icons/fa6';
import { IoCartOutline } from "react-icons/io5";

const OrdersCard = () => {
  return (
    <div className=' rounded-md border border-slate-200 px-3 py-1  '>
        <div className=' flex items-center justify-between'>
        <p className=' text-sm font-semibold'>Orders</p>
        <IoCartOutline className=' text-indigo-500' size={25} />
        </div>
       
        <h4 className=' text-xl font-extrabold'>7,445</h4>
        <p className=' text-sm flex items-center gap-2'><span className=' bg-green-200 text-green-600 flex items-center gap-2 w-fit text-xs px-3 py-1 rounded-sm'><FaArrowUp /> 15%</span> from previous month</p>
        
    </div>
  )
}

export default OrdersCard