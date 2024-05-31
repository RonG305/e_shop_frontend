import React from 'react'
import { FaArrowDown } from 'react-icons/fa6';
import { LuBox } from "react-icons/lu";

const ProductCard = () => {
  return (
    <div className=' rounded-md border border-slate-200 px-3 py-1  '>
        <div className=' flex items-center justify-between'>
        <p className=' text-sm font-semibold'>products</p>
        <LuBox className=' text-indigo-500' size={25} />
        </div>
       
        <h4 className=' text-xl font-extrabold'>43, 281</h4>
        <p className=' text-sm flex items-center gap-2'><span className=' bg-red-200 text-red-600 flex items-center gap-2 w-fit text-xs px-3 py-1 rounded-sm'><FaArrowDown /> 18%</span> from previous month</p>
        
    </div>
  )
}

export default ProductCard