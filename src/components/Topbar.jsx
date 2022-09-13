import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar w-full h-[50px] bg-white sticky top-0 z-999">
      <div className="topbarWrapper flex h-full px-5 items-center justify-between">
        <div className="topLeft">
          <span className="logo font-bold text-[30px] text-blue-800 cursor-pointer">
            pauladmin
          </span>
        </div>
        <div className="topRight flex items-center">
          <div className="topbarIconContainer relative mr-[10px] cursor-pointer text-[#555]">
            <NotificationsNone />
            <span className="topIconBadge absolute top-[-5px] bg-red-600 text-white rounded-full w-[15px] h-[15px] justify-center items-center flex right-0 text-[10px]">
              2
            </span>
          </div>
          <div className="topbarIconContainer mr-[10px] cursor-pointer text-[#555]">
            <Language />
          </div>
          <div className="topbarIconContainer mr-[10px] cursor-pointer text-[#555]">
            <Settings />
          </div>
          <img
            src=""
            alt=""
            className="topAvator w-10 h-10 rounded-full cursor-pointer bg-red-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
