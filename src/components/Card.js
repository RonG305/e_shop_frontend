import React from 'react'
import { BsCartPlus } from "react-icons/bs";

const Card = () => {
  return (
    <div className='  min-h-64 rounded-md bg-slate-100 my-2 p-2'>
        <img className=' rounded-md ' src='/images/supplement1.jpg' alt='supplement1' />
        <p>Vitamin and supplement</p>
        <div className=' flex  items-center justify-between'>
            <p className=' rounded-md border bg-blue-700 text-white px-2 py-1 my-3'>Fluticasone propionate (Flonase)</p>
            <div className=' border border-slate-300 rounded-md px-3 py-2 w-fit h-fit hover:bg-slate-800 hover:text-white hover:cursor-pointer' >
                <BsCartPlus size={18} />
            </div>
        </div>
    </div>
  )
}

export default Card