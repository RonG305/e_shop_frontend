import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";


const Navbar = ({handleSidebar, isSidebarOPen}) => {
  return (
    <div className={` h-[70px] ${isSidebarOPen ? " translate-x-0 ml-56 w-full" : " translate-x-0 ml-0"}  bg-slate-100 shadow-md px-2 transform transition-transform duration-500 ease-in-out w-full` }>
      <div className=' flex items-center justify-between h-full'>
        <HiMiniBars3BottomLeft onClick={handleSidebar} className=' cursor-pointer' size={25} />

      </div>
      
    </div>
  )
}

export default Navbar