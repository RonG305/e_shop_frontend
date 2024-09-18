import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'


import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'

import LandingPage from './LandingPage'

import ProductList from '../../components/ProductList/ProductList'
import ProductOverview from '../../common/ProductOverview/ProductOverview'
import Footer from '../../common/Footer/Footer'


import CheckoutPage from '../../components/ShoppingCart/CheckoutPage'
import ProductDetail from '../../components/ShoppingCart/ProductDetail'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/Signup/Signup'
import Favourites from '../../components/Favourites/Favourites'
import { CartProvider } from '../../CartContext'

import CustomerOrders from '../../components/CustomerOrders/CustomerOrders.js'
import { LogoutProvider } from '../../LogoutContext.js'
import Loader from '../../Loader.js'
import POS from '../../components/ShoppingCart/POS.js'
import Receipt from '../../components/ShoppingCart/Receipt.js'

const Main = () => {


  const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const USERROLE = localStorage.getItem("role");

    if (roles.includes(USERROLE)) {
      return <Component {...rest} />;
    } else {
      return <Navigate to={"/"} replace />;
    }
  };



  return (
   <div>
    <div className=' hidden overflow-x-hidden scroll-smooth'>
    <Sidebar  />
    </div>
   <CartProvider>
   <div className=''>
    <LogoutProvider>
        <Header />
        </LogoutProvider>
        <div className=' flex flex-col items-center mt-[120px] overflow-x-hidden '>
          <div className=' lg:w-[80%] md:[85%] w-[100%]  p-5 '>
           
       
      
          <Routes>
            
            <Route path='/' element={<LandingPage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
              <Route path='/product-list' element={<ProductList />} />
              <Route path='/favourites'element={<Favourites />}/>
              <Route path='/product-overview' element={<ProductOverview />} />
              <Route  path='/product-detail/:id' element={<ProductDetail />}/>
              <Route path='/shopping-cart' element={<ShoppingCart />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path="/my-orders" element={<CustomerOrders />} />
              <Route path='loader' element={<Loader />} />
        

              <Route
              path="/pos"
              element={
                <ProtectedRoute component={POS} roles={["admin"]} />
              }
            />

              <Route path='/receipt' element={<Receipt />} />

          </Routes>
          </div>
        </div>
        
       
    </div>
   </CartProvider>

   <Footer />
   </div>
  )
}

export default Main