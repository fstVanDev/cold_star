import React, { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../context/StateProvider";

const Profit = () => {
  const { config } = useContext(StateContext);

  const [profit, setProfit] = useState(0);

  const getFee = () => {
    if (config !== null && config.length >= 2) {
      let num = 0;
      config.map((item) => {
        if (item.currentFee !== null) {
          num += Number(item.currentFee);
          console.log(num, Number(item.currentFee));
        }
      });
      console.log(num);
      setProfit(num);
    }
  };

  return (
    <div className="w-full h-[60px] bg-green rounded-15 mt-[30px] flex justify-between px-[15px] py-[18px]">
      <p className="text-white font-normal text-12 leading-16 my-auto">
        Total Profit
      </p>
      <p className="text-white font-bold text-18 leading-24">{profit}%</p>
    </div>
  );
};

export default Profit;
