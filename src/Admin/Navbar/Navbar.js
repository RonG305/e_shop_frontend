import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";


const Navbar = ({handleSidebar, isSidebarOPen}) => {
  return (
    <div className={` h-[70px] ${isSidebarOPen ? " translate-x-0 w-full" : " translate-x-0 ml-0"}  bg-slate-100 shadow-md px-2 transform transition-transform duration-500 ease-in-out box-border  p-5` }>
      <div className=' flex items-center justify-between h-full'>
        <HiMiniBars3BottomLeft onClick={handleSidebar} className=' cursor-pointer' size={25} />

        <div>
            <div></div>
            <span><IoNotifications className=' text-indigo-500' size={25} /></span>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar