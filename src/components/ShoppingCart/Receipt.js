import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';

const Receipt = () => {
  const [order, setOrder] = useState({ order_items: [] });

  const getCustomerOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/getUserOrder`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      const data = await response.json();
      setOrder(data);
      console.log(data.order_items);
    } catch (error) {
      console.log("An error occurred while accessing customer orders", error);
    }
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);

  // Calculate total price
  const totalPrice = order.order_items.reduce((total, item) => total + parseFloat(item.price), 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='font-silkscreen p-6 max-w-lg mx-auto border rounded shadow-md my-4'>
      <h3 className='text-2xl font-bold text-center mb-4'>AGENCY RECEIPT</h3>

      <div className='mb-4'>
        <h4 className='text-xl font-semibold'>Online Store</h4>
        <p>Order Number: {order.order_id}</p>
        <p>Date: {order.createdAt}</p>
      </div>

      <div className='mb-4'>
        <h4 className='text-lg font-semibold'>Customer Information</h4>
        <p>Name: {order.full_name}</p>
        <p>Email: {order.email_address}</p>
        <p>Address: {order.address}, {order.city}, {order.zip_code}</p>
        <p>Phone Number: {order.phone_number}</p>
      </div>

      <div className='mb-4'>
        <h4 className='text-lg font-semibold'>Items Purchased</h4>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='border-b py-2 text-left'>Item</th>
              <th className='border-b py-2 text-right'>Quantity</th>
              <th className='border-b py-2 text-right'>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {order.order_items.map((item, index) => (
              <tr key={index}>
                <td className='border-b py-2'>{item.product.name}</td>
                <td className='border-b py-2 text-right'>{item.quantity}</td>
                <td className='border-b py-2 text-right'>{item.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mb-4'>
        <p className='font-semibold'>Total: {totalPrice.toFixed(2)}</p>
        <p>Payment Method: {order.payment_method}</p>
      </div>

      <div className='mt-4 text-center'>
        <p className='text-sm'>For support, contact us at:</p>
        <p className='text-sm'>support@onlinestore.com | +1 234 567 890</p>
      </div>

      <div className='text-center mt-4'>
        <button onClick={handlePrint} className='px-4 py-2 bg-blue-500 text-white rounded'>
          Print Receipt
        </button>
      </div>
    </div>
  );
};

export default Receipt;
