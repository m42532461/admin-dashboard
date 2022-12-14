import React from "react";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="flex flex-1 h-[calc(100vh-50px)] bg-[rgb(251,251,255)] sticky top-[50px]">
      <div className="sidebarWrapper p-5 text-[#555]">
        <div className="sidebarMenu mb-[10px]">
          <h3 className="sidebarTitle text-[13px]  text-[rgb(187,187,186)] font-semibold">
            Dashboard
          </h3>
          <ul className="sidebarList p-[5px]">
            <Link to="/">
              <ListItem title="Home">
                <LineStyle className="mr-[5px] text-[20px] " />
              </ListItem>
            </Link>
            <ListItem title="Analytics">
              <Timeline className="mr-[5px] text-[20px] " />
            </ListItem>
            <ListItem title="Sales">
              <TrendingUp className="mr-[5px] text-[20px] " />
            </ListItem>
          </ul>
        </div>
        <div className="sidebarMenu mb-[10px]">
          <h3 className="sidebarTitle text-[13px]  text-[rgb(187,187,186)] font-semibold">
            Quick Menu
          </h3>
          <ul className="sidebarList p-[5px]">
            <Link to="/users">
              <ListItem title="Users">
                <LineStyle className="mr-[5px] text-[20px] " />
              </ListItem>
            </Link>
            <Link to="/products">
              <ListItem title="Products">
                <Timeline className="mr-[5px] text-[20px] " />
              </ListItem>
            </Link>
            <ListItem title="Sales">
              <TrendingUp className="mr-[5px] text-[20px] " />
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
