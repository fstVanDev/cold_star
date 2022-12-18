import React, { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../context/StateProvider";

const Profit = () => {
  const {} = useContext(StateContext);

  const [profit, setProfit] = useState(0);

  return (
    <div className="w-full h-[60px] bg-green rounded-15 mt-[30px] flex justify-between px-[15px] py-[18px]">
      <p className="text-white font-normal text-12 leading-16 my-auto">
        Total Profit
      </p>
      <p className="text-white font-bold text-18 leading-24">+{profit}%</p>
    </div>
  );
};

export default Profit;
