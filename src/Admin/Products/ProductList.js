import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';





const ProductList = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("")
  
    const [isModalOPen, setIsModalOpen] = useState(false)
    const [productId, setProductId] = useState(null)

    const handleModal = (id) => {
      setProductId(id)
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
  
    const filteredProducts = products?.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase()) ||
        product.price.toLowerCase().includes(searchText.toLowerCase()) 
      );
    });
    


    const getProducts = async () => {
        try {
          const response = await fetch(
            `${API_BASE_URL}/api/products/products-list/`
          );
          const data = await response.json();
          console.log(data);
    
          setProducts(data);
         
        } catch (error) {
          console.log("Error while fetching baby care prodcuts");
        }
      };



      const deleteProduct = async(id) => {
        try {

          const response = await fetch(`${API_BASE_URL}/api/products/delete-product/${id}/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            },

          })


          if (response.ok) {
            console.log("product deleted succesifully")
            getProducts()
          } else {
            console.log("Server error ehile deleting product")
          }

        } catch(error) {
          console.log("An error occured while deleting the product")
        }
      }


    


      useEffect(() => {
        getProducts()
        
      }, [])
  return (
    <div className=" border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative">

     
      

      <div className=" my-2 border-b border-slate-200 flex items-center justify-between mb-4">
        <p className='font-semibold text-2xl mb-2'>Product List</p>
        <button className=' rounded-md text-white bg-indigo-500 px-3 py-1 mb-2'>Add product</button>
      </div>

      <div className=' md:flex items-center justify-between'>
      <input
        className="border border-slate-300 outline-blue-600 rounded-md mr-2 px-3 py-1 "
        placeholder="search here..."
        value={searchText}
        onChange={handleSearchChange}
      />
        <p>Dashboard / ProductList</p>
      </div>
      

     

      <div className="shadow-md p-4 mb-4 lg:px-10 w-full text-sm text-left rounded-md px-4 bg-secondary overflow-x-auto">

      <table className="w-full min-w-max mt-4 text-sm text-left rounded-md px-4">
        <thead className="">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 ">Product Name</th>
            <th className="px-4 py-4 ">Category</th>
            <th className="px-4 py-4 ">Price</th>
            <th className="px-4 py-4 ">Inventory quantity</th>
            <th>Actions</th>
        
          </tr>
        </thead>
        <tbody>

         
          {filteredProducts.slice(startIndex, endIndex).map((product) => (
            <tr className=" border-b border-slate-200 font-medium text-sm" key={product.id}>
              <td className="px-4 py-3 flex gap-2 items-center"><span> <img
                      className=" rounded-md w-10 h-10"
                      src={`${API_BASE_URL}/${product?.image}`}
                      alt={product?.name}
                      loading="lazy"
                    /></span>{product.name}</td>
              <td className="px-4 py-3">
                {product.category} 
              </td>
              <td className="px-4 py-3">{product.price}</td>
              <td className="px-4 py-3">{product.inventory_quantity}</td>
              <td>
                <span className=' flex gap-2 font-bold'>
                <Link to={`/dashboard/product-details/${product.id}`}><FaEye size={18} /></Link>
                <Link className=' cursor-pointer' to={`/dashboard/update-product/${product.id}`}> <FiEdit  size={18} /></Link>
                   
                    <RiDeleteBin6Line  onClick={() => handleModal(product.id)} className='text-red-500' size={18} />
                   
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
             
            <p className=' text-slate-800'> page {currentPage} of {Math.ceil(products.length / itemsPerPage)}</p>
            <button
              disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            className=" flex items-center bg-indigo-500 px-2 text-px-2 py-1 gap-2 rounded-md"><FaArrowRight />next</button>
      </div>

          {isModalOPen &&  <DeleteConfirmation  productId={productId} deleteProduct={deleteProduct}  isModalOPen={isModalOPen} setIsModalOpen={setIsModalOpen} />}
   
    </div>
  )
}

export default ProductList