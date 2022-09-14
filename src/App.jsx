import Home from "./pages/Home";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserList from "./pages/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App mt-[10px]">
        <Topbar />
        <div className=" flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
