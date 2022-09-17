import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import Bar from "./Layout/Bar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const [user, setUser] = useState(
    useSelector((state) => state.user.currentUser)
  );

  return (
    <BrowserRouter>
      <div className="App mt-[10px]">
        <Routes>
          <Route path="/" element={<Bar user={user} setUser={setUser} />}>
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            <Route
              path="/users"
              element={user ? <UserList /> : <Navigate to="/login" />}
            />
            <Route
              path="/user/:userId"
              element={user ? <User /> : <Navigate to="/login" />}
            />
            <Route
              path="/newUser"
              element={user ? <NewUser /> : <Navigate to="/login" />}
            />
            <Route
              path="/products"
              element={user ? <ProductList /> : <Navigate to="/login" />}
            />
            <Route
              path="/product/:productId"
              element={user ? <Product /> : <Navigate to="/login" />}
            />
            <Route
              path="/newproduct"
              element={user ? <NewProduct /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Login user={user} setUser={setUser} />
                )
              }
            />
            <Route
              path="*"
              element={<h1 className="text-2xl font-bold">404</h1>}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
