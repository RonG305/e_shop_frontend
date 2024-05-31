import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';




const DeleteConfirmation = ({setIsModalOpen, deleteCategory, categoryId}) => {
  return (
    <div className=' rounded-md md:w-1/3 absolute top-10 bg-slate-50 p-4 border border-slate-200'>
        <h3 className=' text-red-500 mb-4'>Are you sure you want to delete ? </h3>
        <div  className=' flex items-center justify-between'>
          <button onClick={() => setIsModalOpen(false)} className=' bg-indigo-500 text-white rounded-md px-2 py-1'>cancel</button>
          <button onClick={() => (deleteCategory(categoryId), setIsModalOpen(false))} className=' bg-red-500 text-white rounded-md px-2 py-1'>Delete</button>
        </div>
    </div>
  )
}


const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("")
    const [btnLoading, setBtnLoading] = useState(false);
   

    const [isModalOPen, setIsModalOpen] = useState(false)
    const [categoryId, setCategoryId] = useState(null)

    const handleModal = (id) => {
      setCategoryId(id)
      setIsModalOpen(true)
    }
    


    const itemsPerPage = 10

    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage


    const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
    }



    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredCategories = categories?.filter((category) => {
      return (
        category.name.toLowerCase().includes(searchText.toLowerCase()) 
        
      );
    });
    

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
      getCategories();
    }, []);


      const deleteCategory = async(id) => {
        try {

          const response = await fetch(`${API_BASE_URL}/api/category/delete-category/${id}/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            },

          })


          if (response.ok) {
            console.log("product deleted succesifully")
            getCategories()
          } else {
            console.log("Server error ehile deleting category")
          }

        } catch(error) {
          console.log("An error occured while deleting the category")
        }
      }


    


      useEffect(() => {
        getCategories()
        
      }, [])
  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">

     
      

      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className='font-semibold text-2xl mb-2 text-orange-500'>Category List</p>
        <Link to={`/dashboard/create-category/`} className=' rounded-md text-white bg-indigo-500 px-3 py-1 mb-2'>Add category</Link>
      </div>

      <div className=' md:flex items-center justify-between'>
      <input
        className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
        placeholder="search here..."
        value={searchText}
        onChange={handleSearchChange}
      />
        <p>Dashboard / Category List</p>
      </div>
      

     

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">

      <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
        <thead className="">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 ">Category Name</th>
          
            <th>Actions</th>
        
          </tr>
        </thead>
        <tbody>

         
          {filteredCategories.slice(startIndex, endIndex).map((category) => (
            <tr className=" border-b border-slate-200 font-medium text-sm" key={category.id}>
              <td className="px-4 py-3">
                {category.name} 
              </td>
             
              <td>
                <span className=' flex gap-4'>
                <Link to={`/dashboard/category-details/${category.id}`}><FaEye size={18} /></Link>
                <Link className=' cursor-pointer' to={`/dashboard/update-category/${category.id}`}> <FiEdit  size={18} /></Link>
                   
                    <RiDeleteBin6Line  onClick={() => handleModal(category.id)} className='text-red-500' size={18} />
                   
                </span>
              </td>
              
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
             
            <p className=' text-slate-800'> page {currentPage} of {Math.ceil(categories.length / itemsPerPage)}</p>
            <button
              disabled={currentPage === Math.ceil(categories.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            className=" flex items-center bg-indigo-500 px-2 text-px-2 py-1 gap-2 rounded-md"><FaArrowRight />next</button>
      </div>

          {isModalOPen &&  <DeleteConfirmation  categoryId={categoryId} deleteCategory={deleteCategory}  isModalOPen={isModalOPen} setIsModalOpen={setIsModalOpen} />}
   
    </div>
  )
}

export default CategoryList