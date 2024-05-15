import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const TopRated = () => {
  return (
    <div>
      <div className=" flex items-center justify-between">
      <h5 className=" font-bold text-xl my-3">Top Rated Products</h5>
      <Link className=" text-blue-500 hover:underline font-bold" to={`/main`}>View all</Link>
      </div>
      
      
     
      

      <div className=" md:grid grid-cols-4 gap-3 overflow-x-auto">
      <div>
        <div className=" relative rounded-md  h-40 ">
          <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
            <span>20% discount</span>
          </div>
          <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
            <span><FaRegHeart /></span>
          </div>

          <img className=" rounded-md w-full h-full" src="/images/prod10.jpg" loading="lazy" />
        </div>

        <div>
          <h4 className=" font-medium text-slate-950 text-xl">Skin care</h4>
          <p className=" font-light">Ksh 1200 </p>
        </div>
      </div>


      <Link to={`/main/product-detail`}>
        <div className=" relative rounded-md  h-40 ">
          <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
            <span>20% discount</span>
          </div>
          <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
            <span><FaRegHeart /></span>
          </div>

          <img className=" rounded-md w-full h-full" src="/images/prod10.jpg" loading="lazy" />
        </div>

        <div>
          <h4 className=" font-medium text-slate-950 text-xl">Skin care</h4>
          <p className=" font-light">Ksh 1200 </p>
        </div>
      </Link>


      <div>
        <div className=" relative rounded-md  h-40 ">
          <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
            <span>20% discount</span>
          </div>
          <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
            <span><FaRegHeart /></span>
          </div>

          <img className=" rounded-md w-full h-full" src="/images/prod10.jpg" loading="lazy" />
        </div>

        <div>
          <h4 className=" font-medium text-slate-950 text-xl">Skin care</h4>
          <p className=" font-light">Ksh 1200 </p>
        </div>
      </div>


      <div>
        <div className=" relative rounded-md  h-40 ">
          <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
            <span>20% discount</span>
          </div>
          <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
            <span><FaRegHeart /></span>
          </div>

          <img className=" rounded-md w-full h-full" src="/images/prod10.jpg" loading="lazy" />
        </div>

        <div>
          <h4 className=" font-medium text-slate-950 text-xl">Skin care</h4>
          <p className=" font-light">Ksh 1200 </p>
        </div>
      </div>
    </div>
    </div>
    
   
  );
};

export default TopRated;
