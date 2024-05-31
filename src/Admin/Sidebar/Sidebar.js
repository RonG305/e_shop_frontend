import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp, FaArrowAltCircleLeft } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidPyramid } from "react-icons/bi";
import { IoFlashSharp, IoSettingsSharp } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { TbBrandShopee } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { LogoutContext } from "../../LogoutContext";

const Sidebar = ({ isSidebarOPen, handleSidebar }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isCustomersOpen, setIsCustomersOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleOrders = () => setIsOrdersOpen(!isOrdersOpen);
  const toggleCustomers = () => setIsCustomersOpen(!isCustomersOpen);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

  const {handleLogout} = useContext(LogoutContext)

  return (
    <div
      className={`fixed top-0 z-50 w-52 h-screen text-sm bg-slate-50 border-r border-gray-200 transform text-slate-700 ${
        isSidebarOPen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <h2 className="text-2xl font-extrabold flex items-center gap-2  text-orange-500 p-4">
        <IoFlashSharp size={30} />
        MedSwift <RxCross2 onClick={handleSidebar} className=" bg-indigo-500 rounded-sm font-bold text-white cursor-pointer" size={25} />
      </h2>
      <nav className="flex-grow">
        <ul className=" ml-2">
          <li className="p-sm font-medium p-2 ">
            <Link to="/dashboard/home" className="block">
              <span className=" flex items-center gap-2 font-extrabold">
                <LuLayoutDashboard size={20} />
                Dashboard
              </span>
            </Link>
          </li>

          <li className="p-2">
            <div
              onClick={toggleCategory}
              className="cursor-pointer block font-extrabold"
            >
              <div className=" flex items-center justify-between">
                <span className=" flex items-center gap-2">
                  <MdCategory size={20} />
                  Category
                </span>
                {isCategoryOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isCategoryOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/category-list/" className="block">
                    {" "}
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />{" "}
                      Category List
                    </span>
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/dashboard/create-category/" className="block">
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />{" "}
                      Add category
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="p-2">
            <div
              onClick={toggleProducts}
              className="cursor-pointer block font-extrabold "
            >
              <div className=" flex items-center justify-between">
                <span className=" flex items-center gap-2">
                  <RiProductHuntLine size={20} />
                  Products
                </span>
                {isProductsOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isProductsOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/product-list" className="block">
                    {" "}
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />{" "}
                      Product List
                    </span>
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/dashboard/create-product" className="block">
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />{" "}
                      Add Product
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <div
              onClick={toggleOrders}
              className="cursor-pointer block font-extrabold "
            >
              <div
                onClick={toggleOrders}
                className="cursor-pointer block font-extrabold "
              >
                <div className=" flex items-center justify-between">
                  <span className=" flex items-center gap-2">
                    <TbBrandShopee size={20} />
                    Orders
                  </span>
                  {isOrdersOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
            </div>
            {isOrdersOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/orders/" className="block">
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />{" "}
                      Order List
                    </span>
                  </Link>
                </li>
                <li className="p-2">
                  <Link to="/orders/completed" className="block">
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />
                      Completed Orders
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <div
              onClick={toggleCustomers}
              className="cursor-pointer block font-extrabold "
            >
              <div className=" flex items-center justify-between">
                <span className=" flex items-center gap-2">
                  <LuUserCircle2 size={20} />
                  Customers
                </span>
                {isCustomersOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isCustomersOpen && (
              <ul className="ml-2">
                <li className="p-2">
                  <Link to="/dashboard/customers" className="block">
                    <span className=" flex items-center gap-2 text-sm font-medium">
                      <BiSolidPyramid className=" text-indigo-500" size={20} />
                      Customer List
                    </span>
                  </Link>
                </li>
              
              </ul>
            )}
          </li>
          <li className="p-2">
            <Link to="/settings" className="block font-extrabold ">
              <span className=" flex items-center gap-2 text-sm font-extrabold">
                <IoSettingsSharp className="" size={20} />
                Settings{" "}
              </span>
            </Link>
          </li>


          <li onClick={handleLogout} className="p-2">
            <div to="/settings" className="block font-extrabold ">
              <span className=" flex items-center gap-2 text-sm font-extrabold">
                <FaArrowAltCircleLeft  className="" size={20} />
                Sig out{" "}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
