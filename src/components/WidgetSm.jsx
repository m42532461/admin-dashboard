import { Visibility } from "@mui/icons-material";
import React from "react";

const WidgetSm = () => {
  return (
    <div className="widgetSm flex-col flex-1 shadow-lg p-5 mr-5">
      <span className="widgetSmTitle text-[22px] font-semibold">
        New Join Members
      </span>
      <ul className="widgetSmList ">
        <li className="widgetSmListItem flex items-center justify-between my-5">
          <img
            src="/"
            alt="/"
            className="widgetSmImg w-[40px] h-[40px] rounded-full object-cover bg-black"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold ">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center rounded-[10px] py-[7px] px-[10px] bg-[#eeeef7] text-[#555] cursor-pointer">
            <Visibility className="widgetSmIcon text-[16px] mr-[5px]" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
