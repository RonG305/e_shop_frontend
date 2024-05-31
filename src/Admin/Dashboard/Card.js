import React from 'react'
import ProductCard from './ProductCard'

import RevenueCard from './RevenueCard'
import OrdersCard from './OrdersCard'
import CustomersCard from './CustomersCard'
import ExpenseCard from './ExpenseCard'

const Card = () => {
  return (
    <div className=' grid lg:grid-cols-5 gap-2 my-4 md:grid-cols-3 grid-cols-2'>
        <RevenueCard />
        <ExpenseCard />
        <OrdersCard />
        <CustomersCard />
       
        <ProductCard />
    </div>
  )
}

export default Card