import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'

const RandomProducts = () => {

  const [painProducts, setPainProducts] = useState([])
  

  const getPainManagementProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/product-category/`
      );
      const data = await response.json();
      console.log(data.slice(0, 4));

      const randomProducts = Math.floor(Math.random() * 9)
      setPainProducts(data.slice(0, randomProducts));
    } catch (error) {
      console.log("Error while fetching baby care prodcuts");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getPainManagementProducts();
    }, 2000);

    return () => clearTimeout(timer)
   
  }, []);

  return (
    <div>
    <div className=" flex items-center justify-between">
   
    <Link className=" text-blue-500 hover:underline font-bold" to={`/main/product-list`}>View all</Link>
    </div>
    
    
   
    

    <div className=" grid grid-cols-2 md:grid md:grid-cols-4 gap-3 overflow-x-auto">
    {painProducts.map((product, index) => (
          <Link to={`/main/product-detail/${product.id}`} key={index}>
          <div className=" relative rounded-md  h-40 ">
            <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
              <span>20% discount</span>
            </div>
            <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
              <span><FaRegHeart /></span>
            </div>
    
            <img className=" rounded-md w-full h-full" src={`${API_BASE_URL}/${product.image}`} alt='Product' loading="lazy" />
          </div>
    
          <div>
            <h4 className=" font-medium text-slate-950 text-xl">{product.name}</h4>
            <p className=" font-light">Ksh {product.price} </p>
          </div>
        </Link>
      ))}


  
  </div>
  </div>
  )
}

export default RandomProducts