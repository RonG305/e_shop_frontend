import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div
     className=' flex items-center justify-center text-white w-full rounded-md mt-4  min-h-48 bg-orange-400'
    >
        <div className='w-full rounded-sm md:h-64 bg-orange-700 m-2 p-2  md:flex items-center justify-between'>
        <img className='w-40' src='/images/macbook.png' loading='lazy' />
            <div >
                <p className=' text-xl font-semibold'>New Deals</p>
                <p>Start your purchase today</p>
                
            </div>

            <div>
                <p>GetFREE SHIPPING* & 5% rewards on</p>
                <p className=' mb-2'>every order with MedSwift Theme rewards program</p>
                <Link to={`/main/product-list`} className=' rounded-full px-4 py-2 bg-blue-400 my-2 text-white'>Start Shopping</Link>
            </div>

           
        </div>
    </div>
  )
}

export default Banner