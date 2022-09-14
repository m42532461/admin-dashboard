import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Bar = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Bar;
