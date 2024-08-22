import React from 'react'
import { sidebarLinks } from './sidebarLinks'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden md:block md:w-1/6  h-screen fixed border-r border-slate-200 px-2'>
        <div className=' flex flex-col'>
            {sidebarLinks.map((link) => (
                <Link>{link.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Sidebar