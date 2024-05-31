import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';





const RecentCustomers = () => {
    const [customers, setCustomers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("")
  
    
    


    const itemsPerPage = 10

    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage


    const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
    }



    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredCustomers = customers?.filter((customer) => {
      return (
        customer.username.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchText.toLowerCase()) 
      );
    });
    


    const getCustomers = async () => {
        try {
          const response = await fetch(
            `${API_BASE_URL}/api/accounts/customers/`
          );
          const data = await response.json();
          console.log(data);
    
          setCustomers(data.slice(0, 10));
         
        } catch (error) {
          console.log("Error while fetching baby care customers");
        }
      };



      


      useEffect(() => {
        getCustomers()
        
      }, [])
  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">

     
      

      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className='font-semibold text-2xl mb-2 text-orange-500'>Recent customers</p>
        <Link to={`/dashboard/create-product`} className=' rounded-md text-white bg-indigo-500 px-3 py-1 mb-2'>Add product</Link>
      </div>

      <div className=' md:flex items-center justify-between'>
      <input
        className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
        placeholder="search here..."
        value={searchText}
        onChange={handleSearchChange}
      />
        <p>Dashboard / Customers List</p>
      </div>
      

     

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">

      <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
        <thead className="">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 ">User Name</th>
            <th className="px-4 py-4 ">First name</th>
            <th className="px-4 py-4 ">Last Name</th>
            <th className="px-4 py-4 ">Email address</th>
        
        
          </tr>
        </thead>
        <tbody>

         
          {filteredCustomers.slice(startIndex, endIndex).map((customer) => (
            <tr className=" border-b border-slate-200 font-medium text-sm" key={customer.id}>
              <td className="px-4 py-3 flex gap-2 items-center">{customer.username}</td>
              <td className="px-4 py-3">
                {customer.first_name} 
              </td>
              <td className="px-4 py-3">{customer.last_name}</td>
              <td className="px-4 py-3">{customer.email}</td>
              
             
              
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      

     

   
    </div>
  )
}

export default RecentCustomers