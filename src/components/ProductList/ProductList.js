import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import { addToCart } from "../../CartApi";
import { CartContext } from "../../CartContext";

import Spinner from "react-bootstrap/Spinner";

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
  const [randomProduct, setRandomProduct] = useState({});
  const userId = localStorage.getItem("userId");
  const { loadCartItems } = useContext(CartContext);

  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  } 


  const searchProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });



  const [successMessage, setSuccessMessage] = useState("");
  const [successProductId, setSuccessProductId] = useState(null);

  const user = localStorage.getItem("userId");

  const addToCart = async ({ userId, product, quantity, cost }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          cost: cost,
          cart: userId,
          product: product,
          quantity: quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
       
      }

      const data = await response.json();
      console.log(data);
      setSuccessMessage("added to cart ");
      setSuccessProductId(product)
      loadCartItems();
    } catch (error) {
      console.error("An error occurred while adding to cart", error);
       navigate('/main/signin')
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setSuccessProductId(null)
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow =  filteredProducts.slice(startIndex, endIndex) ||searchProducts.slice(startIndex, endIndex) 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getProducts = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/products-list/`
      );
      const data = await response.json();
      console.log(data);

      setProducts(data);
      setFilteredProducts(data);

      const randomIndex = Math.floor(Math.random() * data.length);
      console.log(randomIndex);
      setRandomProduct(data[randomIndex]);
      console.log("Radom Product", data[randomIndex]);
      console.log(randomProduct.image);
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
     
<div className=" flex items-center justify-center my-2">

<input
       placeholder="search here"
       className=" border border-gray-300 rounded-sm  px-4 py-1 lg:w-[50%] md:w-[70%] w-full outline-blue-500"
       name="search"
       value={searchText}
       onChange={handleSearch}
      />

  <button onClick={handleSearch} className=" rounded-sm px-4 py-1 bg-orange-500 text-white stext-sm">search</button>    

</div>
    

      {products ? (
        <div className=" w-full h-52 bg-slate-300">
          <image
            src={`${API_BASE_URL}/${randomProduct?.image}`}
            className=" w-full "
            alt={randomProduct?.name}
          />
        </div>
      ) : (
        <div className=" w-full h-52 bg-slate-300"></div>
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
          <div>Products Loading ....</div>
          <div className=" grid grid-cols-2 md:grid md:grid-cols-4 gap-3 overflow-x-auto">
            {itemsToShow?.map((product, index) => (
              <div key={index}>
                <div className=" relative rounded-md h-44 ">
                  <div class="absolute top-2 left-0 px-2 py-1 bg-orange-500 text-xs font-bold text-white rounded-tr-md rounded-br-md">
                    <span>20% discount</span>
                  </div>
                  <div class="absolute top-2 right-0 px-2 py-1text-xs font-bold text-white  ">
                    <span>
                      <FaRegHeart />
                    </span>
                  </div>

                  <Link to={`/main/product-detail/${product?.id}`}>
                    <img
                      className=" rounded-md w-full h-full"
                      src={`${API_BASE_URL}/${product?.image}`}
                      alt={product?.name}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className=" flex justify-between">
                  <div>
                  {successProductId === product.id && (
                      <p className="bg-green-500 text-white rounded-md px-4 py-1 my-2">
                        {successMessage}
                      </p>
                    )}
                    <h4 className=" font-medium text-slate-950 text-xl">
                      {product?.name}
                    </h4>
                    <p className=" font-light">Ksh {product?.price} </p>
                  </div>

                  <div
                    onClick={() =>
                      addToCart({
                        userId: user,
                        product: product.id,
                        quantity: 1,
                        cost: product.price,
                      })
                    }
                    className=" mt-2 hover:cursor-pointer flex items-center justify-center w-8 h-8 font-bold bg-green-500 text-white rounded-full"
                  >
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
                currentPage ===
                Math.ceil(filteredProducts.length / itemsPerPage)
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
