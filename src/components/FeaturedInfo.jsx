import React, { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from "../requestMethods";
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        const sortedRes = res.data.sort((a, b) => a._id - b._id);
        setIncome(sortedRes);
        setPerc((sortedRes[1]?.total * 100) / sortedRes[0]?.total - 100);
      } catch (error) {}
    };
    getIncome();
  }, []);
  console.log(income);

  return (
    <div className="featured w-full flex justify-between">
      <div className="featuredItem flex-col flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-lg h-[200px]">
        <span className="featuredTitle text-[20px]">Revenue</span>
        <div className="featuredMoneyContainer my-[10px] items-center flex">
          <span className="featuredMoney text-[30px] font-semibold">
            ${income[1]?.total}
          </span>
          <span className="featuredMoneyRate flex items-center ml-5">
            {Math.floor(perc)}%
            {perc < 0 ? (
              <ArrowDownward className="text-[14px] ml-[5px] text-red-600 " />
            ) : (
              <ArrowUpward className="text-[14px] ml-[5px] text-green-600  " />
            )}
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
