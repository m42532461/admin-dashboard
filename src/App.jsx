import Home from "./pages/Home";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserList from "./pages/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App mt-[10px]">
        <Topbar />
        <div className=" flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
