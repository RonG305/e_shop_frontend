import React from 'react'
import DashbaordHeader from './DashbaordHeader'
import Card from './Card'
import RecentOrders from './RecentOrders'
import RecentCustomers from './RecentCustomers'
import SalesChart from './SalesChart'
import OrderChart from './OrderChart'

const Home = () => {


  
  return (
    <div className=' border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative'>
       <DashbaordHeader />
       <Card />
       <div className=' md:grid grid-cols-2 gap-2 my-4'>
        <SalesChart />
        <OrderChart />
       </div>
       <div className=' md:grid grid-cols-2 gap-2'>
       <RecentOrders />
       <RecentCustomers />
       </div>
       
    </div>
  )
}

export default Home