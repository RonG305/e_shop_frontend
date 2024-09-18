import React, {  useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';
import { useNavigate } from 'react-router-dom';

const CreateSubCategory = () => {
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch(`${API_BASE_URL}/api/category/post-subcategory/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Sub Category added successfully");
        navigate("/dashboard/subcategory-list")
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log("An error occurred while submitting category", error);
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


  useEffect(() => {
    getCategories()
  })




  return (
    <div>
      <h3 className='text-2xl font-bold'>Add Sub Category</h3>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='rounded-md shadow-md p-10 md:w-[70%] lg:w-[50%] w-full bg-slate-100'>
          <div className='flex flex-col gap-1 mb-3'>
            <label>Sub category name</label>
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
         
          <button type='submit' className='px-2 py-1 rounded-md text-white bg-indigo-500'>Create category</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSubCategory;
