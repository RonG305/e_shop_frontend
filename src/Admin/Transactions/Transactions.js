import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';





const Transactions = () => {
    const [transactions, setTransactions] = useState([])
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
  
    const filteredTransactions = transactions?.filter((transaction) => {
      return (
        transaction.user.toLowerCase().includes(searchText.toLowerCase()) ||
        transaction.transaction_id.toLowerCase().includes(searchText.toLowerCase()) ||
        transaction.status.toLowerCase().includes(searchText.toLowerCase()) ||
        transaction.phone_number.toLowerCase().includes(searchText.toLowerCase()) 
      );
    });
    


    const getTransactions = async () => {
        try {
          const response = await fetch(
            `${API_BASE_URL}/api/payment/get-payments/`, {
                method: "GET",
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                },
            }
          );
          const data = await response.json();
          console.log(data);
    
          setTransactions(data);
         
        } catch (error) {
          console.log("Error while fetching baby care payments");
        }
      };



      


      useEffect(() => {
        getTransactions()
        
      }, [])
  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">

     
      

      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className='font-semibold text-2xl mb-2 text-orange-500'>Transactions List</p>
        <Link to={`/dashboard/create-product`} className=' rounded-md text-white bg-indigo-500 px-3 py-1 mb-2'>Download CSV</Link>
      </div>

      <div className=' md:flex items-center justify-between'>
      <input
        className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
        placeholder="search here..."
        value={searchText}
        onChange={handleSearchChange}
      />
        <p>Dashboard / Transactions List</p>
      </div>
      

     

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">

      <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
        <thead className="">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 ">Transaction ID</th>
            <th className="px-4 py-4 ">Customer</th>
            <th className="px-4 py-4 ">Phone number </th>
            <th className="px-4 py-4 ">Amount</th>
            <th className="px-4 py-4 ">status</th>
        
          </tr>
        </thead>
        <tbody>

         
          {filteredTransactions.slice(startIndex, endIndex).map((transaction) => (
            <tr className=" border-b border-slate-200 font-medium text-sm" key={transaction.id}>
              <td className="px-4 py-3 flex gap-2 items-center">{transaction.transaction_id}</td>
              <td className="px-4 py-3">{transaction.user}</td>
              <td className="px-4 py-3">{transaction.phone_number}</td>
              <td className="px-4 py-3">{transaction.amount}</td>
              <td className="px-4 py-3">{transaction.status}</td>
             
              
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
             
            <p className=' text-slate-800'> page {currentPage} of {Math.ceil(transactions.length / itemsPerPage)}</p>
            <button
              disabled={currentPage === Math.ceil(transactions.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            className=" flex items-center bg-indigo-500 px-2 text-px-2 py-1 gap-2 rounded-md"><FaArrowRight />next</button>
      </div>

   
    </div>
  )
}

export default Transactions