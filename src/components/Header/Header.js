import React, { useEffect, useState } from 'react'
import {FaRegUser} from 'react-icons/fa'
import { FaRegBell , FaPhone, } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { API_BASE_URL } from '../../apiConfig';
import { LogoutContext } from '../../LogoutContext';



const Header = () => {

  const {cartItems, loadCartItems} = useContext(CartContext)
  const {handleLogout} = useContext(LogoutContext)
  const cartItemsCount = cartItems.length;


  const isLoggedIn = localStorage.getItem("username")
  const navigate = useNavigate()
  const userRole = localStorage.getItem("role")


 
  return (
    <div className=' min-h-[75px] bg-slate-100 px-5 py-2 text-slate-700 fixed top-0 w-full mb-[75px] z-50 '>
          <div className=' flex items-center justify-between border-b border-gray-300 pb-2'>
            <p className=' flex items-center gap-3'><FaPhone /> +254 790021016</p>
            <div className=' flex gap-2'>
              <Link to={`/main/signup`} className=' rounded-md px-3 py-1 bg-orange-500 hover:border hover:border-orange-500 hover:bg-transparent transition-all delay-75 duration-300 hover:text-slate-900 text-white'>signup</Link>
              {isLoggedIn ? (
                <button className='hover:bg-orange-500 hover:text-white hover:rounded-md px-2 py-1 transition-all delay-75 duration-300' onClick={handleLogout}>logout</button>
              ) : (
                <Link className='hover:bg-orange-500 hover:text-white hover:rounded-md px-2 py-1 transition-all delay-75 duration-300' to={`/main/signin`}>signin</Link>
              )}
             
            </div>
          </div>

          <div className=' flex items-center justify-between py-3'>
            <div>
            <Link to={`/`} className=' font-bold text-3xl text-orange-500'>MedSwift</Link>
            <p>Welcome Back {isLoggedIn}</p>
            </div>
          

           

<div className='flex gap-3'>
  {userRole === "admin" && <Link to={`/dashboard/product-list`} className=' text-sm rounded-sm px-2  text-white bg-indigo-500'>Dashboard</Link>}
  
          <Link onClick={loadCartItems} to='/main/shopping-cart'>
            <IoCartOutline size={25} />
            {cartItemsCount > 0 && (
              <span className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {cartItemsCount}
              </span>
            )}
          </Link>
         <Link  to={`/favourites`}><CiHeart size={25} /></Link> 
        </div>
          </div>

            

           
        </div>
    
  )
}

export default Header