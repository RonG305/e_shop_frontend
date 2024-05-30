import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
    inventory_quantity: "",
    description: "",
  });


  const getProduct = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/product/${params.id}`);
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.log("An error occurred while fetching categories", error);
    }
  };




  const getCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/category/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log("An error occurred while fetching categories", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      image: event.target.files[0], 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('inventory_quantity', formData.inventory_quantity);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch(`${API_BASE_URL}/api/products/update-product/${params.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: formDataToSend
      });

      if (response.ok) {
        console.log("Product updated successfully");
        navigate("/dashboard/product-list")
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log("An error occurred while submitting product", error);
    }
  };

  useEffect(() => {
    getCategories();
    getProduct()
  }, [params.id]);

  return (
    <div>
      <h3 className='text-2xl font-bold'>Add product</h3>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='rounded-md shadow-md p-10 md:w-[70%] lg:w-[50%] w-full bg-slate-100'>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Product name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Category</label>
            <select
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Price</label>
            <input
              type='number'
              name='price'
              value={formData.price}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Inventory quantity</label>
            <input
              type='number'
              name='inventory_quantity'
              value={formData.inventory_quantity}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Description</label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='rounded-md px-3 py-2 border border-slate-300 outline-indigo-500'
              rows={5}
              cols={10}
              required
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Upload product image</label>
            <input
              type='file'
              name='image'
              onChange={handleFileChange}
              className='rounded-md px-3 py-4 border border-slate-300 outline-indigo-500'
            />
          </div>
          <div className=' flex items-center justify-between'>
          <button type='submit' className='px-2 py-1 rounded-md text-white bg-indigo-500'>Create product</button>
          <Link to={'/dashboard/product-list'}  className='px-2 py-1 rounded-md text-white bg-slate-900'>Go Back</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
