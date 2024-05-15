import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Otc from '../../components/OTC/OverTheCounter'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Courousel from '../../components/Courousel/Courousel'
import LandingPage from './LandingPage'

import ProductList from '../../components/ProductList/ProductList'
import ProductOverview from '../../common/ProductOverview/ProductOverview'
import Footer from '../../common/Footer/Footer'

import Checkout from '../../components/ShoppingCart/ShoppingCart'
import CheckoutPage from '../../components/ShoppingCart/CheckoutPage'
import ProductDetail from '../../components/ShoppingCart/ProductDetail'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/Signup/Signup'

const Main = () => {
  return (
   <div>
    <div className=' hidden'>
    <Sidebar  />
    </div>
   
    <div className=''>
        <Header />
        <div className=' flex flex-col items-center '>
          <div className=' lg:w-[70%] md:[85%] w-[100%]  p-5 '>
           
       
      
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
              <Route path='/product-list' element={<ProductList />} />
              <Route path='/product-overview' element={<ProductOverview />} />
              <Route  path='/product-detail/:id' element={<ProductDetail />}/>
              <Route path='/shopping-cart' element={<ShoppingCart />} />
              <Route path='/checkout' element={<CheckoutPage />} />

          </Routes>
          </div>
        </div>
        
       
    </div>
   <Footer />
   </div>
  )
}

export default Main