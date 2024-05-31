import React from 'react'

import { FaArrowUp } from 'react-icons/fa6';
import { LuDollarSign } from "react-icons/lu";

const RevenueCard = () => {
  return (
    <div className=' rounded-md border border-slate-200 px-3 py-1  '>
        <div className=' flex items-center justify-between'>
        <p className=' text-sm font-semibold'>Revenue</p>
        <LuDollarSign className=' text-indigo-500' size={25} />
        </div>
       
        <h4 className=' text-xl font-extrabold'>Kshs 34,924.28</h4>
        <p className=' text-sm flex items-center gap-2'><span className=' bg-green-200 text-green-600 flex items-center gap-2 w-fit text-xs px-3 py-1 rounded-sm'><FaArrowUp /> 20%</span> from previous month</p>
        
    </div>
  )
}

export default RevenueCard