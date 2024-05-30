import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = ({isSidebarOPen}) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isCustomersOpen, setIsCustomersOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleOrders = () => setIsOrdersOpen(!isOrdersOpen);
  const toggleCustomers = () => setIsCustomersOpen(!isCustomersOpen);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen)


  

  return (
    <div className={`fixed top-0 z-50 w-52 h-screen text-sm bg-slate-50 border-r border-gray-200 transform ${isSidebarOPen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}>
 
      <h2 className="text-2xl font-semibold p-4">Dashboard</h2>
      <nav className="flex-grow">
        <ul>
          <li className="p-2 font-bold">
            <Link to="/home" className="block">
              Dashboard
            </Link>
          </li>

          <li className="p-2">
            <div onClick={toggleCategory} className="cursor-pointer block  font-bold">
            <span className=" flex items-center justify-between">Category{isCategoryOpen? <FaAngleUp /> :<FaAngleDown />}</span>
            </div>
            {isCategoryOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/category-list/" className="block">
                    {" "}
                    Category List
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/dashboard/create-category/" className="block">
                    Add category
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="p-2">
            <div onClick={toggleProducts} className="cursor-pointer block font-bold">
              <span className=" flex items-center justify-between">Products{isProductsOpen? <FaAngleUp /> :<FaAngleDown />}</span>
            </div>
            {isProductsOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/product-list" className="block">
                    {" "}
                    Product List
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/dashboard/create-product" className="block">
                    Add Product
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <div onClick={toggleOrders} className="cursor-pointer block font-bold">
            <span className=" flex items-center justify-between">Orders{isOrdersOpen? <FaAngleUp /> :<FaAngleDown />}</span>
            </div>
            {isOrdersOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/orders/" className="block">
                    Orders List
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/orders/completed" className="block">
                    Completed Orders
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <div onClick={toggleCustomers} className="cursor-pointer block font-bold">
            <span className=" flex items-center justify-between">Customers{isCustomersOpen? <FaAngleUp /> :<FaAngleDown />}</span>
            </div>
            {isCustomersOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/customers/new" className="block">
                    Customers List
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/customers/manage" className="block">
                    Add Customer
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <Link to="/settings" className="block font-bold">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
