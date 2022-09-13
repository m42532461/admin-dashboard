import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
const FeaturedInfo = () => {
  return (
    <div className="featured w-full flex justify-between">
      <div className="featuredItem flex-col flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-lg h-[200px]">
        <span className="featuredTitle text-[20px]">Revenue</span>
        <div className="featuredMoneyContainer my-[10px] items-center flex">
          <span className="featuredMoney text-[30px] font-semibold">
            $2,415
          </span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -11.4
            <ArrowDownward className="text-[14px] ml-[5px] text-red-600 " />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500 ">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem flex-col flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-lg h-[200px]">
        <span className="featuredTitle text-[20px]">Sales</span>
        <div className="featuredMoneyContainer my-[10px] items-center flex">
          <span className="featuredMoney text-[30px] font-semibold">
            $4,415
          </span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -1.4
            <ArrowDownward className="text-[14px] ml-[5px] text-red-600" />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500 ">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem flex-col flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-lg h-[200px]">
        <span className="featuredTitle text-[20px]">Cost</span>
        <div className="featuredMoneyContainer my-[10px] items-center flex">
          <span className="featuredMoney text-[30px] font-semibold">
            $2,225
          </span>
          <span className="featuredMoneyRate flex items-center ml-5">
            +2.4
            <ArrowUpward className="text-[14px] ml-[5px] text-green-600  " />
          </span>
        </div>
        <span className="featuredSub text-[15px] text-gray-500 ">
          Compared to last month
        </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
