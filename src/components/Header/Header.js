import React, { useEffect, useState } from 'react'
import {FaRegUser} from 'react-icons/fa'
import { FaRegBell , FaPhone, } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';



const Header = () => {

  const {cartItems, loadCartItems} = useContext(CartContext)
  const cartItemsCount = cartItems.length;

  return (
    <div className=' min-h-[75px] bg-slate-100 px-5 py-2 text-slate-700 '>
          <div className=' flex items-center justify-between border-b border-gray-300 pb-2'>
            <p className=' flex items-center gap-3'><FaPhone /> +254 790021016</p>
            <div className=' flex gap-2'>
              <button className=' rounded-md p-2 bg-slate-950'>signup</button>
              <button>signin</button>
            </div>
          </div>

          <div className=' flex items-center justify-between py-3'>
            <Link to={`/main/`} className=' font-bold text-3xl'>MedSwift</Link>

            <input 
             className=' rounded-md border-slate-300 border px-3 py-2 w-1/3 text-slate-700 outline-none '
             placeholder='search product here...'
            />

<div className='flex gap-3'>
          <Link onClick={loadCartItems} to='/main/shopping-cart'>
            <IoCartOutline size={25} />
            {cartItemsCount > 0 && (
              <span className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {cartItemsCount}
              </span>
            )}
          </Link>
         <Link  to={`/main/favourites`}><CiHeart size={25} /></Link> 
        </div>
          </div>

            

           
        </div>
    
  )
}

export default Header