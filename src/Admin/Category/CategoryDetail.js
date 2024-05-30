import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";
import { Link, useParams } from "react-router-dom";

const CategoryDetail = () => {
  const params = useParams();
  const [category, setCategory] = useState({});




  const getCategory = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/category/get-category/${params.id}`
      );
      const data = await response.json();
      setCategory(data);
      console.log("Category Details", data);
    } catch (error) {
      console.log("An error occurred while fetching category", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [params.id]);

  return (
    <div>
        <div className=" flex flex-col md:flex-row p-2 items-center justify-between ">
        <h3 className="text-2xl font-bold"> Category Details</h3>
        <p>Dashboard / category Details</p>
        </div>
   
      <div className="flex items-center justify-center">
        <div className="rounded-md shadow-md p-10  md:w-[95%] w-full bg-slate-100">
          <div className=" flex flex-col md:grid grid-cols-2 gap-2 ">
            

            <div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Category Name</h2>
              <p>{category.name}</p>
            </div>

            <div className=" rounded-md p-3 border border-slate-200 mb-2">
              <h2 className=" font-bold ">Product Description</h2>
              <p>{category.description}</p>
            </div>

            <Link to={'/dashboard/category-list'}  className='px-2 py-1 rounded-md text-white bg-slate-900'>Go Back</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
