import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9 bg-hero-pattern"></div>
      </div>
    </div>
  );
};

export default Ecommerce;
