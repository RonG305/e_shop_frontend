
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import {delay, motion} from 'framer-motion'


const Logo = () => {

    const logoVariants = {
        hidden: {opacity: 0, y:-100},
        visible: {opacity: 1, y:0, transition: {
            duration: 5,
            delay: 1,
            repeat: 0,
           
        },
        scale: [1, 1.25, 1.5, 0.25, 0.5, 1],
        rotate:[0, 0, 180, 270, 180, 0]
    }
    }

    return(
    <motion.div 
     variants={logoVariants}
     animate='visible'
     initial='hidden'
    className=' w-[130px] h-[130px] bg-slate-950 rotate-45 rounded-lg'>
        <div className='w-[140px] h-[130px] bg-slate-950 rotate-45 rounded-lg flex items-center justify-center'>
            <div className=' w-[10px] h-[100px] bg-white'></div>
            <div className=' w-[10px] h-[100px] bg-white rotate-45'></div>
            <div className=' w-[10px] h-[100px] bg-white rotate-90'></div>
        </div>
        
    </motion.div>
    )
}

const LogoPage = () => {

    const buttonVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 , transition : {
            delay: 0.5
        }}
    }
  return (
    <div className=' flex items-center justify-center h-screen flex-col'>
        <h3 className=' text-xl font-extrabold mb-8'>Liviamart</h3>
        <Logo />
        <motion.button 
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        className=' bg-slate-950 px-5 py-2 text-white w-[200px] rounded-md mt-10 hover:scale-110 ease-in-out delay-200 transition-all'><Link to={`/main/product-list`}>Shop Now</Link> </motion.button>
    </div>
  )
}

export default LogoPage