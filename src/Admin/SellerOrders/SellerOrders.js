import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';





const SellerOrder = () => {
    
    const [orders, setOrders] = useState([])
 
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("")
  
    const USERROLE = localStorage.getItem('role')
  
    const itemsPerPage = 10
  
    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
  
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
    }
  
  
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredOrders = orders?.filter((order) => {
      return (
        order.createdAt.toString().toLowerCase().includes(searchText.toLowerCase()) ||
        order.user.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
    });
  


    const getCustomerOrders  = async() => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/orders/getUserOrder_seller/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        const data = await response.json()
        
        setOrders(Array.isArray(data) ? data : [])
        console.log(data)
  
      } catch(error) {
        console.log("An error occured while accesing customer orders", error)
      }
    }
  
  
    useEffect(() => {
      getCustomerOrders()
    }, [])
  

    

  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">

     
      

      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className='font-semibold text-2xl mb-2 text-orange-500'>Orders</p>
        
      </div>

      <div className=' md:flex items-center justify-between'>
      <input
        className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
        placeholder="search here..."
        value={searchText}
        onChange={handleSearchChange}
      />
        <p>Dashboard / My orders</p>
      </div>
      

     

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">

      <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
        <thead className="">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 ">SELLER </th>
            <th className="px-4 py-4 ">Order Date</th>
          {USERROLE === 'admin' && (
              <><th className="px-4 py-4 ">Total sales</th><th className="px-4 py-4 ">Profit</th></>
          )}
            <th className="px-4 py-4 ">my pay</th>
            
        
          </tr>
        </thead>
        <tbody>

         
          {filteredOrders.slice(startIndex, endIndex).map((order) => (
            <tr className=" border-b border-slate-200 font-medium text-sm" key={order.id}>
             
              <td className="px-4 py-3">
                {order.user} 
              </td>
              <td className="px-4 py-3">{order.createdAt}</td>
              {USERROLE === 'admin' && (
                  <><td className="px-4 py-3">{order.total_price}</td><td className="px-4 py-3">{order.profit}</td></>
              )}
            
              <td className="px-4 py-3">{order.profit * 0.18 }</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      

      <div className="flex gap-2 items-center justify-center my-4 text-white">
      <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
             className=" flex items-center bg-indigo-500 px-2 text-px-2 py-1 gap-2 rounded-md"><FaArrowLeft />prev</button>
             
            <p className=' text-slate-800'> page {currentPage} of {Math.ceil(orders.length / itemsPerPage)}</p>
            <button
              disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            className=" flex items-center bg-indigo-500 px-2 text-px-2 py-1 gap-2 rounded-md"><FaArrowRight />next</button>
      </div>

         
    </div>
  
  )
}

export default SellerOrder