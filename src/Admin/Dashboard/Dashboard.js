
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import ProductList from '../Products/ProductList'
import CreateProduct from '../Products/CreateProduct'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UpdateProduct from '../Products/UpdateProduct'
import ProductDetails from '../Products/ProductDetails'
import CategoryList from '../Category/CategoryList'
import CreateCategory from '../Category/CreateCategory'
import UpdateCategory from '../Category/UpdateCategory'
import CategoryDetail from '../Category/CategoryDetail'
import OrderList from '../Orders/OrderList'

const Dashboard = () => {


  const [isSidebarOPen, setIsSidebarOpen] = useState(true)
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen)

  return (
    <div className=' overflow-x-hidden'>
       <Navbar  handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
        <Sidebar isSidebarOPen={isSidebarOPen} />
        <div className={`${isSidebarOPen ? "md:ml-56 " : "ml-0"}  transition-all duration-300 ease-in-out`}>
      <Routes>
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/update-product/:id' element={<UpdateProduct />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />

        <Route path='/category-list' element={<CategoryList />} />
        <Route path='/create-category' element={<CreateCategory />} />
        <Route path='/update-category/:id' element={<UpdateCategory />} />
        <Route path='/category-details/:id' element={<CategoryDetail />} />


        <Route path='/orders' element={<OrderList />} />
        </Routes>
        </div>
      
    </div>
  )
}

export default Dashboard