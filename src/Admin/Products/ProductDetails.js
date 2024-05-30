import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);




  const getProduct = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/product/${params.id}`
      );
      const data = await response.json();
      setProduct(data);
      console.log("Product Details", data);
    } catch (error) {
      console.log("An error occurred while fetching product", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  return (
    <div>
        <div className=" flex flex-col md:flex-row p-2 items-center justify-between ">
        <h3 className="text-2xl font-bold"> Product Details</h3>
        <p>Dashboard / product Details</p>
        </div>
   
      <div className="flex items-center justify-center">
        <div className="rounded-md shadow-md p-10  md:w-[95%] w-full bg-slate-100">
          <div className=" flex flex-col md:grid grid-cols-2 gap-2 ">
            <div>
              <img
                src={`${API_BASE_URL}/${product?.image}`}
                alt={product.name}
              />
            </div>

            <div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Product Name</h2>
              <p>{product.name}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Category</h2>
              <p>{product.category}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold "> Price</h2>
              <p>{product.price}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Inventory quantity</h2>
              <p>{product.inventory_quantity}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Date created</h2>
              <p>{product.date_created}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Product Description</h2>
              <p>{product.description}</p>
            </div>

            <Link to={'/dashboard/product-list'}  className='px-2 py-1 rounded-md text-white bg-slate-900'>Go Back</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
