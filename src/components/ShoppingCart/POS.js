import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import { useCart } from "./CartContext";
import { Html5QrcodeScanner } from "html5-qrcode";

const POS = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const { loadCartItems } = useCart();

  const userId = localStorage.getItem("userId");

  const getProductByBarcode = async (barcode) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/barcode/${barcode}/`);
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      setProduct(data);
      addToCart(data);
    } catch (error) {
      console.log("An error occurred while fetching the product by barcode", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          cost: product.price,
          cart: userId,
          product: product.id,
          quantity: quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await response.json();
      setIsLoading(true);
      setSuccessMessage("Added to cart successfully");
      loadCartItems();
    } catch (error) {
      console.error("An error occurred while adding to cart", error);
      navigate("/main/signin");
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    
    scanner.render(
      (result) => {
        scanner.clear();
        getProductByBarcode(result);
      },
      (error) => {
        console.error("Error scanning barcode:", error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div>
      {successMessage && (
        <p className="bg-green-500 text-white rounded-md px-4 py-1 my-2">
          {successMessage}
        </p>
      )}

      <div className="md:flex gap-3 md:min-h-[70vh]">
        <div className="md:w-1/2" style={{ boxSizing: "border-box" }}>
          <div id="reader" style={{ width: "100%" }}></div>
        </div>

        <div className="md:w-1/2 my-4">
          <h4 className="md:text-2xl text-lg font-bold">{product.name}</h4>
          <p className="font-bold text-2xl text-green-500">
            Kshs {product.price}
          </p>

          <div className="my-3">
            <h4 className="font-extrabold text-xl">Description</h4>
            <pre className="whitespace-pre-wrap break-words w-full overflow-auto">
              <code className="font-inter w-full break-words">
                {product.description}
              </code>
            </pre>
          </div>

          <div className="my-3">
            <h3>Quantity</h3>
            <div className="flex">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="px-5 py-2 bg-slate-950 rounded-bl-md rounded-tl-md text-white"
              >
                -
              </button>
              <input
                value={quantity}
                readOnly
                className="text-slate-700 border border-slate-200 p-2"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-5 py-2 bg-slate-950 rounded-br-md rounded-tr-md text-white"
              >
                +
              </button>
            </div>
          </div>

          {isLoading ? (
            <button className="bg-slate-950 w-full text-white rounded-md px-4 py-2 mt-2 buttonload">
              <i className="fa fa-circle-o-notch fa-spin"></i> Loading
            </button>
          ) : (
            <button
              className="bg-slate-950 text-white rounded-md px-2 py-2 w-full"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          )}

          <div>
            <span className="text-sm font-bold text-white bg-green-500 rounded-sm px-5">
              {product.inventory_quantity} pieces available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
