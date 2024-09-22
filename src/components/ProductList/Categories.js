import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiConfig";

const Categories = ({ setSelectedCategory, setSelectedSubcategory }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [openCategory, setOpenCategory] = useState(null);

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
      setSubcategories((prev) => ({ ...prev, [categoryName]: data }));
      console.log("SUB CATEGORIES ", data);
    } catch (error) {
      console.log("An error occurred while fetching subcategories", error);
    }
  };

  const toggleCategory = (categoryName) => {
    if (openCategory === categoryName) {
      setOpenCategory(null); 
    } else {
      setOpenCategory(categoryName);
      setSelectedCategory(categoryName); 
      if (!subcategories[categoryName]) {
        getSubcategories(categoryName); 
      }
    }
  };

  const handleSubcategory = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="overflow-y-scroll">
      <div className="sidebar md:w-[300px] h-[40vh] md:px-5 ">
        <h3 className="font-bold text-xl">Categories</h3>
        <ul className="flex flex-col gap-2 text-sm font-medium">
          <li onClick={() => toggleCategory("")} className="cursor-pointer">
            All
          </li>
          {categories.map((category, index) => (
            <li key={index} className="cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => toggleCategory(category.name)}
              >
                <p>{category.name}</p>
                {openCategory === category.name ? (
                  <span>&#9650;</span> 
                ) : (
                  <span>&#9660;</span> 
                )}
              </div>

              {/* Subcategories dropdown */}
              {openCategory === category.name && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  {subcategories[category.name]?.length > 0 ? (
                    subcategories[category.name].map((subcategory, subIndex) => (
                      <li
                        key={subIndex}
                        onClick={() => handleSubcategory(subcategory.name)}
                        className="md:border-b border-slate-300 md:py-2 md:px-0 rounded-md px-2 py-1 md:bg-white cursor-pointer transition-all delay-150 ease-out"
                      >
                        {subcategory.name}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No subcategories</li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
