import React, { useState , useEffect} from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'

const PersonalCare = () => {

  const [personalCare, setPersonalCare] = useState([])

  const getPersonalCareProdcuts = async() => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/product-category/?category=personal-care`
      );
      const data = await response.json();
      console.log(data.slice(0, 4));
      setPersonalCare(data.slice(0, 4));
    } catch (error) {
      console.log("Error while fetching baby care prodcuts");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getPersonalCareProdcuts();
    }, 9000);

    return () => clearTimeout(timer)
   
  }, []);



  return (
    <div>
    <div className=" flex items-center justify-between">
    <h5 className=" font-bold text-xl my-3">Personal Care Products</h5>
    <Link className=" text-blue-500 hover:underline font-bold" to={`/main/product-list`}>View all</Link>
    </div>
    
    
   
    

    <div className=" grid grid-cols-2 md:grid md:grid-cols-4 gap-3 overflow-x-auto">

      {personalCare.map((product, index) => (
              <Link className=' my-8' to={`/main/product-detail/${product.id}`} key={index}>
              <div className=" relative rounded-md  h-56 ">
                <div class="absolute top-2 left-0 px-2 py-1 bg-orange-500 text-xs font-bold text-white rounded-tr-md rounded-br-md">
                  <span>20% discount</span>
                </div>
                <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
                  <span><FaRegHeart /></span>
                </div>
        
                <img
                      className=" rounded-md w-full h-full object-cover"
                      src={`${API_BASE_URL}/${product?.image}`}
                      alt={product?.name}
                      loading="lazy"
                    />
              </div>
        
              <div>
              <h4 className=" font-bold text-slate-950 ">
                      {product?.name}
                    </h4>
                <p className=" font-medium">Ksh {product.price} </p>
              </div>
            </Link>
        
      ))}
  

    
  </div>
  </div>
  )
}

export default PersonalCare