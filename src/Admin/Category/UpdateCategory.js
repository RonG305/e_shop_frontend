import React, {  useEffect, useState } from 'react';
import { API_BASE_URL } from '../../apiConfig';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const params = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const getCategory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/category/get-category/${params.id}/`);
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.log("An error occurred while fetching category", error);
    }
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch(`${API_BASE_URL}/api/category/update-category/${params.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Category added successfully");
        navigate("/dashboard/category-list")
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log("An error occurred while submitting category", error);
    }
  };


  useEffect(() => {
    getCategory()
  }, [params.id])


  return (
    <div>
      <h3 className='text-2xl font-bold'>Add Category</h3>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='rounded-md shadow-md p-10 md:w-[70%] lg:w-[50%] w-full bg-slate-100'>
          <div className='flex flex-col gap-1 mb-3'>
            <label>category name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
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
         
          <button type='submit' className='px-2 py-1 rounded-md text-white bg-indigo-500'>update category</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
