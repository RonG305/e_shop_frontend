import React, { Component, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductList from "../Products/ProductList";
import CreateProduct from "../Products/CreateProduct";
import { Routes, Route, Navigate } from "react-router-dom";
import UpdateProduct from "../Products/UpdateProduct";
import ProductDetails from "../Products/ProductDetails";
import CategoryList from "../Category/CategoryList";
import CreateCategory from "../Category/CreateCategory";
import UpdateCategory from "../Category/UpdateCategory";
import CategoryDetail from "../Category/CategoryDetail";
import OrderList from "../Orders/OrderList";
import OrderView from "../Orders/OrderView";
import Customers from "../Customers/Customers";
import { LogoutProvider } from "../../LogoutContext";
import Home from "./Home";
import Transactions from "../Transactions/Transactions";
import UpdateProductPrice from "../Products/UpdateProductPrice";
import SellerOrder from "../SellerOrders/SellerOrders";
import SellerAdminView from "../SellerOrders/SellerAdminView";
import SubCategoryList from "../SubCategory/SubCategoryList";
import CreateSubCategory from "../SubCategory/CreateSubCategory";
import UpdateSubCategory from "../SubCategory/UpdateSubCategory";

const Dashboard = () => {
  const [isSidebarOPen, setIsSidebarOpen] = useState(true);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen);

  const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const USERROLE = localStorage.getItem("role");

    if (roles.includes(USERROLE)) {
      return <Component {...rest} />;
    } else {
      return <Navigate to={"/"} replace />;
    }
  };

  return (
    <div className=" overflow-x-hidden">
      <LogoutProvider>
        <Navbar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
        <Sidebar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
        <div
          className={`${
            isSidebarOPen ? "md:ml-56 " : "ml-0"
          }  transition-all duration-300 ease-in-out px-4 mt-4`}
        >
          <Routes>
            <Route
              path="/home"
              element={<ProtectedRoute component={Home} roles={["admin"]} />}
            />

            <Route
              path="/product-list"
              element={
                <ProtectedRoute component={ProductList} roles={["admin"]} />
              }
            />

            <Route
              path="/create-product"
              element={
                <ProtectedRoute component={CreateProduct} roles={["admin"]} />
              }
            />

            <Route
              path="/update-product/:id"
              element={
                <ProtectedRoute component={UpdateProduct} roles={["admin"]} />
              }
            />

            <Route
              path="/update-product-price/:id"
              element={
                <ProtectedRoute
                  component={UpdateProductPrice}
                  roles={["admin"]}
                />
              }
            />

            <Route
              path="/product-details/:id"
              element={
                <ProtectedRoute component={ProductDetails} roles={["admin"]} />
              }
            />

            <Route
              path="/category-list"
              element={
                <ProtectedRoute component={CategoryList} roles={["admin"]} />
              }
            />

            <Route
              path="/create-category"
              element={
                <ProtectedRoute component={CreateCategory} roles={["admin"]} />
              }
            />

            <Route
              path="/update-category/:id"
              element={
                <ProtectedRoute component={UpdateCategory} roles={["admin"]} />
              }
            />

            <Route
              path="/category-details/:id"
              element={
                <ProtectedRoute component={CategoryDetail} roles={["admin"]} />
              }
            />

            <Route
              path="/subcategory-list"
              element={
                <ProtectedRoute component={SubCategoryList} roles={["admin"]} />
              }
            />

            <Route
              path="/create-subcategory"
              element={
                <ProtectedRoute
                  component={CreateSubCategory}
                  roles={["admin"]}
                />
              }
            />

            <Route
              path="/update-subcategory/:id"
              element={
                <ProtectedRoute component={UpdateSubCategory} roles={["admin"]} />
              }
            />

            <Route
              path="/orders"
              element={
                <ProtectedRoute component={OrderList} roles={["admin"]} />
              }
            />

            <Route
              path="/order-view/:id"
              element={
                <ProtectedRoute component={OrderView} roles={["admin"]} />
              }
            />

            <Route
              path="/customers"
              element={
                <ProtectedRoute component={Customers} roles={["admin"]} />
              }
            />

            <Route
              path="/transactions"
              element={
                <ProtectedRoute component={Transactions} roles={["admin"]} />
              }
            />

            <Route
              path="/all-orders"
              element={
                <ProtectedRoute component={SellerAdminView} roles={["admin"]} />
              }
            />

            <Route path="/my-sales" element={<SellerOrder />} />
          </Routes>
        </div>
      </LogoutProvider>
    </div>
  );
};

export default Dashboard;
