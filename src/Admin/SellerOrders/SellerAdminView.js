import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SellerAdminView = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const USERROLE = localStorage.getItem('role');
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredOrders = orders?.filter((order) => {
    return (
      order.createdAt.toString().toLowerCase().includes(searchText.toLowerCase()) ||
      order.user.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const getCustomerOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/getAllOrders/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("An error occurred while accessing customer orders", error);
    }
  };



  const deleteAllOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/deleteAllOrders/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
     console.log(response.statusText)
    } catch (error) {
      console.log("An error occurred while accessing customer orders", error);
    }
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);


  const calculateCumulativePay = (orders) => {
    const sellerPays = {};

    orders.forEach((order) => {
      const seller = order.user;
      const pay = order.profit * 0.18;
      
      if (sellerPays[seller]) {
        sellerPays[seller] += pay; 
      } else {
        sellerPays[seller] = pay; 
      }
    });

    return sellerPays;
  };



  const calculateCumulativeProfit = (orders) => {
    const ownersProfit = {}
    orders.forEach((order) => {
      const seller = order.user
      const profitPerPay = order.profit * 0.82


      if (ownersProfit[seller]) {
        ownersProfit[seller] += profitPerPay
      } else {
        ownersProfit[seller] = profitPerPay
      }
    })

    return ownersProfit
  }

  const sellerPays = calculateCumulativePay(orders);
  const ownersPays = calculateCumulativeProfit(orders)

  return (
    <div className="border border-slate-200 rounded-md p-4 w-full overflow-x-auto relative">
      <div className="my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className="font-semibold text-2xl mb-2 text-orange-500">Orders</p>
        <button onClick={() => deleteAllOrders()} className="flex items-center bg-indigo-500 px-2 py-1 gap-2 rounded-md text-white">clear records</button>
      </div>

      <div className="md:flex items-center justify-between">
        <input
          className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1"
          placeholder="search here..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <div>
        <p>Dashboard / My orders</p>
        
        </div>
   
      </div>

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">
        <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-4 py-4">SELLER</th>
              <th className="px-4 py-4">Order Date</th>
              {USERROLE === 'admin' && (
                <>
                  <th className="px-4 py-4">Total Sales</th>
                  <th className="px-4 py-4">Profit</th>
                  <th className="px-4 py-4">Cummulative profit</th>
                </>
              )}
              <th className="px-4 py-4">My Pay</th>
              <th className="px-4 py-4">Cumulative Pay</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.slice(startIndex, endIndex).map((order) => (
              <tr className="border-b border-slate-200 font-medium text-sm" key={order.id}>
                <td className="px-4 py-3">{order.user}</td>
                <td className="px-4 py-3">{order.createdAt}</td>
                {USERROLE === 'admin' && (
                  <>
                    <td className="px-4 py-3">{order.total_price}</td>
                    <td className="px-4 py-3">{order.profit}</td>
                    <td className="px-4 py-3">{ownersPays[order.user].toFixed(2)}</td>
                  </>
                )}
                <td className="px-4 py-3">{(order.profit * 0.18).toFixed(2)}</td>
                <td className="px-4 py-3">{sellerPays[order.user]?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 items-center justify-center my-4 text-white">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center bg-indigo-500 px-2 py-1 gap-2 rounded-md"
        >
          <FaArrowLeft /> Prev
        </button>

        <p className="text-slate-800">
          Page {currentPage} of {Math.ceil(orders.length / itemsPerPage)}
        </p>

        <button
          disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center bg-indigo-500 px-2 py-1 gap-2 rounded-md"
        >
          <FaArrowRight /> Next
        </button>
      </div>
    </div>
  );
};

export default SellerAdminView;
