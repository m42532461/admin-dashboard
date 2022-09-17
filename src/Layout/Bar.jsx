import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Bar = ({ user, setUser }) => {
  return (
    <div>
      <Topbar user={user} setUser={setUser} />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Bar;
