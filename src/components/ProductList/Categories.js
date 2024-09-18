import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";


const Categories = ({ setSelectedCategory, setSelectedSubcategory }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  
  const getCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/category/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log("An error occurred while fetching categories", error);
    }
  };



  const getSubcategories = async (categoryName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/category/sub_categories/?category=${categoryName}`);
      const data = await response.json();
      setSubcategories(data);
      console.log("SUB CATEGORIES ", data)
    } catch (error) {
      console.log("An error occurred while fetching subcategories", error);
    }
  };




  const handleCategory = (categoryName) => {
    setSelectedCategory(categoryName); 
   
    getSubcategories(categoryName); 
    setSelectedSubcategory(""); 
  };

 
  

  const handleSubcategory = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
  };

  useEffect(() => {
    getCategories(); 
  }, []);

  return (
    <div className=" overflow-y-scroll">
    <div className="sidebar md:w-1/6 h-[40vh] md:px-5 ">
      <h3 className="font-bold text-xl">Categories</h3>
      <ul className="flex flex-row gap-2 md:flex-col flex-wrap text-sm font-medium">
        <li
          onClick={() => handleCategory("")}
          className="md:border-b border-slate-300 flex md:py-2 md:px-0 rounded-md px-2 py-1 md:bg-white bg-slate-900 md:text-slate-900 text-white hover:bg-slate-700 hover:text-white cursor-pointer transition-all delay-150 ease-out"
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            onClick={() => handleCategory(category.name)}
            className="md:border-b border-slate-300 md:py-2 md:px-0 rounded-md px-2 py-1 md:bg-white bg-slate-900 md:text-slate-900 text-white hover:bg-slate-950 hover:text-white cursor-pointer transition-all delay-150 ease-out"
            key={index}
          >
            <p>{category.name}</p>
          </li>
        ))}
      </ul>

    
      {/* {selectedCategory && subcategories.length > 0 && ( */}
        <div className="mt-4">
          <h3 className="font-bold text-xl">Subcategories</h3>
          <ul className="flex flex-row gap-2 md:flex-col flex-wrap text-sm font-medium">
            {subcategories.map((subcategory, index) => (
              <li
                onClick={() => handleSubcategory(subcategory.name)}
                className="md:border-b border-slate-300 md:py-2 md:px-0 rounded-md px-2 py-1 md:bg-white bg-slate-900 md:text-slate-900 text-white hover:bg-slate-950 hover:text-white cursor-pointer transition-all delay-150 ease-out"
                key={index}
              >
                <p>{subcategory.name}</p>
              </li>
            ))}
          </ul>
        </div>
      {/* )} */}
    </div>
    </div>
  );
};

export default Categories;
