import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import { useCart } from "./CartContext";
import RandomProducts from "../RandomProducts/RandomProducts";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const params = useParams();
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeQuantity = () => {
    if (quantity === 0) {
      return null;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const getProduct = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products/product/${params.id}/`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log("An error occurred while fetching product", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  return (
    <div>
    <div className="md:flex gap-3">
      <div className="md:w-1/2" style={{boxSizing: 'border-box'}}>
        <img
          className="w-full h-full rounded-md hover:scale-125 transition-all delay-150 ease-in-out"
          src={`${API_BASE_URL}/${product.image}`}
          alt="product"
          loading="lazy"
        />
      </div>

      <div className="md:w-1/2">
        <h4 className="text-2xl font-bold">{product.name}</h4>
        <p className="font-bold text-2xl text-green-500">Kshs {product.price}</p>

        <div className="my-3">
          <h3>Quantity</h3>
          <div className="flex">
            <button
              onClick={removeQuantity}
              className="px-5 py-2 bg-slate-950 rounded-bl-md rounded-tl-md text-white"
            >
              -
            </button>
            <input
              value={quantity}
              className="text-slate-700 border border-slate-200 p-2"
            />
            <button
              onClick={addQuantity}
              className="px-5 py-2 bg-slate-950 rounded-br-md rounded-tr-md text-white"
            >
              +
            </button>
          </div>
        </div>

        <button
          className="bg-slate-950 text-white rounded-md px-2 py-2 w-full"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>

        <div>
          <span className="text-sm font-bold text-white bg-green-500 rounded-sm px-5">
            {product.inventory_quantity} pieces
          </span>
        </div>

        <div className="my-3">
          <h4 className="font-extrabold text-xl">Description</h4>
          <p className="text-sm">{product.description}</p>
        </div>
      </div>


      
    </div>

    <h3 className=" text-2xl font-bold my-3">Products you may also like</h3>

    <RandomProducts />
    </div>
  );
};

export default ProductDetail;
