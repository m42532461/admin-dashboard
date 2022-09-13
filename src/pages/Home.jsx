import React from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

import { userData } from "../data";
const home = () => {
  return (
    <div className="flex-col flex-[4]">
      <FeaturedInfo />
      <Chart
        data={userData}
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
