import Home from "./pages/Home";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App mt-[10px]">
      <Topbar />
      <div className=" flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
