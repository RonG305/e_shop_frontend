import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";


import Spinner from 'react-bootstrap/Spinner';
import { useCart } from "../ShoppingCart/CartContext";

function BorderExample() {
  return <Spinner animation="border" />;
}



const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
 
  const handleCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

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

  return (
    <div className="sidebar">
      <h3 className="font-bold text-xl">Categories</h3>
      <ul className=" flex gap-2 md:flex-col flex-wrap ">
        {categories.map((category, index) => (
          <li
            className=" md:border-b border-slate-300 md:py-2 md:px-0 rounded-md px-2 py-1 md:bg-white bg-slate-900 md:text-slate-900 text-white  hover:bg-slate-700 hover:text-white cursor-pointer transition-all delay-150 ease-out"
            key={index}
          >
            <p className=" " onClick={() => handleCategory(category.name)}>
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [randomProduct, setRandomProduct ] = useState({})

  const {dispatch} = useCart()

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const addToCart = () => {
    console.log("Added to cart")
  }

  const getProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/products-list/`
      );
      const data = await response.json();
      console.log(data);

      setProducts(data);
      setFilteredProducts(data);


      const randomIndex = Math.floor(Math.random() * data.length)
      console.log(randomIndex)
      setRandomProduct(data[randomIndex])
      console.log("Radom Product", data[randomIndex])
      console.log(randomProduct.image)

    } catch (error) {
      console.log("Error while fetching baby care prodcuts");
    }
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = products.filter(
        (product) => product?.category === category
      );
      setFilteredProducts(filtered);
      console.log(filtered);
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      {products ? (
        <div className=" w-full h-52 bg-slate-300">
        <image  src={`${API_BASE_URL}/${randomProduct.image}`} className=" w-full " alt={randomProduct.name} />
        
    </div>
      ): (
        <div className=" w-full h-52 bg-slate-300">
         
      </div>
      )}
      
      <div className=" md:flex gap-3">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        



        <div>
          <h3 className=" font-bold text-2xl mb-4 text-slate-950">
            {selectedCategory} products
          </h3>

        
          <div className=" grid grid-cols-2 md:grid md:grid-cols-3 gap-3 overflow-x-auto">
            {itemsToShow.map((product, index) => (
              <div key={index}>
                <div className=" relative rounded-md  h-40 ">
                  <div class="absolute top-2 left-0 px-2 py-1 bg-green-700 text-xs font-bold text-white rounded-tr-md rounded-br-md">
                    <span>20% discount</span>
                  </div>
                  <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
                    <span>
                      <FaRegHeart />
                    </span>
                  </div>


                  <Link to={`/main/product-detail/${product.id}`}>
                  <img
                    className=" rounded-md w-full h-full"
                    src={`${API_BASE_URL}/${product.image}`}
                    alt={product.name}
                    loading="lazy"
                  />
                   </Link>
                </div>
               


                <div className=" flex justify-between">
                <div>
                  <h4 className=" font-medium text-slate-950 text-xl">
                    {product.name}
                  </h4>
                  <p className=" font-light">Ksh {product.price} </p>
                </div>

                <div  onClick={() => handleAddToCart(product)} className=" mt-2 hover:cursor-pointer flex items-center justify-center w-8 h-8 font-bold bg-green-700 text-white rounded-full">
                      <span>+</span>
                </div>
                </div>
                
              </div>



            ))}
           
          </div>

          <div className=" flex items-center gap-2 my-4">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className=" px-3 py-1 bg-slate-950 text-white rounded-md "
              >
                previous
              </button>
              <p>
                {" "}
                page {currentPage} of{" "}
                {Math.ceil(filteredProducts.length / itemsPerPage)}
              </p>
              <button
                disabled={
                  currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
                }
                onClick={() => handlePageChange(currentPage + 1)}
                className=" px-3 py-1 bg-slate-950 text-white rounded-md "
              >
                Next
              </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductList;
