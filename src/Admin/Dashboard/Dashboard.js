
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import ProductList from '../Products/ProductList'
import CreateProduct from '../Products/CreateProduct'
import { Routes, Route } from 'react-router-dom'
import UpdateProduct from '../Products/UpdateProduct'
import ProductDetails from '../Products/ProductDetails'
import CategoryList from '../Category/CategoryList'
import CreateCategory from '../Category/CreateCategory'
import UpdateCategory from '../Category/UpdateCategory'
import CategoryDetail from '../Category/CategoryDetail'
import OrderList from '../Orders/OrderList'
import OrderView from '../Orders/OrderView'
import Customers from '../Customers/Customers'
import { LogoutProvider } from '../../LogoutContext'
import Home from './Home'
import Transactions from '../Transactions/Transactions'

const Dashboard = () => {


  const [isSidebarOPen, setIsSidebarOpen] = useState(true)
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen)

  return (
    <div className=' overflow-x-hidden'>
      <LogoutProvider>
       <Navbar  handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
        <Sidebar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
        <div className={`${isSidebarOPen ? "md:ml-56 " : "ml-0"}  transition-all duration-300 ease-in-out px-4 mt-4`}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/update-product/:id' element={<UpdateProduct />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />

        <Route path='/category-list' element={<CategoryList />} />
        <Route path='/create-category' element={<CreateCategory />} />
        <Route path='/update-category/:id' element={<UpdateCategory />} />
        <Route path='/category-details/:id' element={<CategoryDetail />} />


        <Route path='/orders' element={<OrderList />} />
        <Route path='/order-view/:id' element={<OrderView />} />
        <Route path='/customers' element={<Customers />} />
       <Route path='/transactions' element={<Transactions />} />
        </Routes>
        </div>
        </LogoutProvider>
      
    </div>
  )
}

export default Dashboard