import Home from "./pages/Home";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserList from "./pages/UserList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  )?.currentUser?.isAdmin;

  return (
    <BrowserRouter>
      <div className="App mt-[10px]">
        {admin && <Topbar />}
        <div className=" flex">
          {admin && <Sidebar />}
          <Routes>
            {admin && <Route path="/" element={<Home />} />}
            {admin && <Route path="/users" element={<UserList />} />}
            {admin && <Route path="/user/:userId" element={<User />} />}
            {admin && <Route path="/newUser" element={<NewUser />} />}
            {admin && <Route path="/products" element={<ProductList />} />}
            {admin && (
              <Route path="/product/:productId" element={<Product />} />
            )}
            {admin && <Route path="/newproduct" element={<NewProduct />} />}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
