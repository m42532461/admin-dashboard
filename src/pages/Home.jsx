import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

import { userRequest } from "../requestMethods";
const home = () => {
  const navigate = useNavigate();
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "Active User": item.total,
              order: item._id,
            },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  const filterUserState = (oriUserStats) => {
    let temp = {};
    let out = oriUserStats.filter((ele) => {
      return temp.hasOwnProperty(ele.order) ? false : (temp[ele.order] = true);
    });
    return out;
  };

  return (
    <div className="flex-col flex-[4]">
      <FeaturedInfo />
      <Chart
        data={filterUserState(userStats).sort((a, b) => a.order - b.order)}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default home;
