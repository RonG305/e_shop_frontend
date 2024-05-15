import React from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {

      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };


  return (
    <Link 
      to={`/main/product-overview`} 
      className={`relative  h-fit md:h-fit border bg-gray-200 overflow-hidden rounded-md p-2 ${isHovered ? 'bg-gray-300 transition-all ease-out delay-150' : ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
      >

      <img src='/images/med2.png' alt='product-name' />

      <div className={` ${isHovered? 'block transition-all delay-150 ease-out ' : 'md:hidden'} block  w-full text-sm`}>
        <Link to={`/main/shopping-cart`} className=' bg-slate-700 text-white px-4 py-3 flex gap-2'><FaShoppingCart />Add to cart</Link>
        <button className=' bg-slate-700 text-white px-4 py-3 flex gap-2 items-center '><FaHeart />Add to wishlist</button>
      </div>

      <div>
        <p className=' text-sm text-gray-500 font-thin'>category</p>
        <p>Product name</p>
        <p className=" font-normal text-orange-500">$3000</p>
      </div>
    </Link>
  )
}

export default ProductCard