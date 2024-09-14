import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateProductPrice = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    price: "", 
  });

  const [discountApplied, setDiscountApplied] = useState(null); 

  
  const getProduct = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/product/${params.id}`);
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.log("An error occurred while fetching product", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const applyDiscount = (discountAmount) => {
    if (!discountApplied) {
 
      const newPrice = Math.max(0, parseFloat(formData.price) - discountAmount); 
      setFormData((prevData) => ({
        ...prevData,
        price: newPrice.toFixed(2),
      }));
      setDiscountApplied(discountAmount); 
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('price', formData.price);

    try {
      const response = await fetch(`${API_BASE_URL}/api/products/update-product-price/${params.id}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Product updated successfully");
        navigate("/dashboard/product-list");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log("An error occurred while submitting product", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  return (
    <div>
      <h3 className='text-2xl font-bold'>Update product price</h3>

      <div className='flex gap-1 mb-3 items-center text-center justify-center'>
        <button
          className='rounded-md px-2 py-1 text-white bg-indigo-500'
          disabled={!!discountApplied} // Disable button if any discount is applied
          onClick={() => applyDiscount(50)}
        >
          Reduce 50
        </button>
        <button
          className='rounded-md px-2 py-1 text-white bg-indigo-500'
          disabled={!!discountApplied} // Disable button if any discount is applied
          onClick={() => applyDiscount(100)}
        >
          Reduce 100
        </button>
        <button
          className='rounded-md px-2 py-1 text-white bg-indigo-500'
          disabled={!!discountApplied} // Disable button if any discount is applied
          onClick={() => applyDiscount(150)}
        >
          Reduce 150
        </button>
      </div>

      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='rounded-md shadow-md p-10 md:w-[70%] lg:w-[50%] w-full bg-slate-100'>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Price</label>
            <input
              type='number'
              name='price'
              value={formData.price}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
              disabled={discountApplied !== null} // Disable manual price change when discount is applied
            />
          </div>

          <div className='flex items-center justify-between'>
            <button type='submit' className='px-2 py-1 rounded-md text-white bg-indigo-500'>
              Update Price
            </button>
            <Link to={'/dashboard/product-list'} className='px-2 py-1 rounded-md text-white bg-slate-900'>
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPrice;
