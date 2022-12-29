import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StateContext } from "../../context/StateProvider";

const Profit = () => {
  const { config } = useContext(StateContext);

  const [profit, setProfit] = useState(0);

  useEffect(() => {
    var arr = [];
    config.map((item) => {
      arr.push(item.currentFee);
    });
    console.log(arr, "total");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    console.log(sum, "totalSum");
  }, [config]);

  // useEffect(() => {
  //   function getTotalProfit() {
  //     var arr = [];
  //     config.map((item) => {
  //       if (item.currentFee !== 0) {
  //         arr.push(item.currentFee);
  //       }
  //     });

  //     var sum = 0;
  //     for (var i = 0; i < arr.length; i++) {
  //       sum += arr[i];
  //     }

  //     setProfit(sum.toFixed(4));
  //   }

  // }, [config]);

  return (
    <div className="w-full h-[60px] bg-green rounded-15 mt-[30px] flex justify-between">
      <p className="text-white font-normal text-12 leading-16 my-auto ml-[15px]">
        Total Profit
      </p>
      <p className="text-white font-bold text-18 leading-24 mr-[15px] my-auto">
        {profit}%
      </p>
    </div>
  );
};

export default Profit;
