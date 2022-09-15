import { Visibility } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm flex-col flex-1 shadow-lg p-5 mr-5">
      <span className="widgetSmTitle text-[22px] font-semibold">
        New Join Members
      </span>
      <ul className="widgetSmList ">
        {Array.isArray(users) ? (
          users.map((user) => (
            <li
              className="widgetSmListItem flex items-center justify-between my-5"
              key={user.id}
            >
              <img
                src={
                  users.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt="/"
                className="widgetSmImg w-[40px] h-[40px] rounded-full object-cover "
              />
              <div className="widgetSmUser flex flex-col">
                <span className="widgetSmUsername font-semibold ">
                  {user.username}
                </span>
              </div>
              <button className="widgetSmButton flex items-center rounded-[10px] py-[7px] px-[10px] bg-[#eeeef7] text-[#555] cursor-pointer">
                <Visibility className="widgetSmIcon text-[16px] mr-[5px]" />
                Display
              </button>
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default WidgetSm;
