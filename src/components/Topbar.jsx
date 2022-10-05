import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls";
const Topbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user?.currentUser);
  console.log(currentUser);
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    logout(dispatch);
    setUser(false);
    navigate("/login");
  };

  return (
    <div className="topbar w-full h-[50px] bg-white sticky top-0 z-999">
      <div className="topbarWrapper flex h-full px-5 items-center justify-between">
        <div className="topLeft">
          <span className="logo font-bold text-[30px] text-blue-800 cursor-pointer">
            pauladmin
          </span>
        </div>
        <div className="topRight flex items-center">
          <div
            className="mr-[10px] cursor-pointer text-[#555]"
            onClick={handleLogout}
          >
            logout
          </div>
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
          <Link to="/login">
            <img
              src={
                currentUser?.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="topAvator w-10 h-10 rounded-full cursor-pointer bg-red-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
