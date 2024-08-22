import React, { useState, useEffect } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'

const FirstAid = () => {


  const [firstAidProducts, setFirstAidProducts] = useState([])

  const getFirstAidProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/product-category/?category=first-aid`
      );
      const data = await response.json();
      console.log(data.slice(0, 4));
      setFirstAidProducts(data.slice(0, 4));
    } catch (error) {
      console.log("Error while fetching baby care prodcuts");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getFirstAidProducts();
    }, 6000);

    return () => clearTimeout(timer)
   
  }, []);

  return (
    <div>
    <div className=" flex items-center justify-between">
    <h5 className=" font-bold text-xl my-3">First AidProducts</h5>
    <Link className=" text-blue-500 hover:underline font-bold" to={`/main/product-list`}>View all</Link>
    </div>
    
    
   
    

    <div className=" grid grid-cols-2 md:grid md:grid-cols-4 gap-3 overflow-x-auto">
      {firstAidProducts.map((product, index) => (
            <Link className='my-8' to={`/main/product-detail/${product.id}`} key={index}>
            <div className=" relative rounded-md  h-56 ">
              <div class="absolute top-2 left-0 px-2 py-1 bg-orange-500 text-xs font-bold text-white rounded-tr-md rounded-br-md">
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

export default FirstAid