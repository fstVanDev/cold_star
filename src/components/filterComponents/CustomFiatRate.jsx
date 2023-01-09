import React, { useContext } from "react";
import { useEffect } from "react";
import { StateContext } from "../../context/StateProvider";

const CustomFiatRate = () => {
  const { fiatRate, setFiatRate, currentFiat, config, currentId } =
    useContext(StateContext);

  useEffect(() => {
    console.log(fiatRate);
  }, [fiatRate]);

  useEffect(() => {
    if (currentFiat !== null) {
      if (config !== null) {
        if (
          config[currentId].fiatRate !==
          Number(currentFiat.rates[0].rate).toFixed(2)
        )
          setFiatRate(Number(currentFiat.rates[0].rate).toFixed(2));
      }
    }
  }, [currentFiat]);

  return (
    <div className="w-max h-full flex">
      <h2 className="max-w-[60px] h-max text-center my-auto text-12 leading-16 font-normal text-lightGray mx-auto mr-[15px]">
        Custom fiat rate
      </h2>

      <input
        type="number"
        className="min-h-[40px] w-[100px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder={
          currentFiat !== null
            ? fiatRate.length === 0
              ? Number(currentFiat.rates[0].rate).toFixed(2)
              : fiatRate
            : "Enter fiat..."
        }
        value={fiatRate}
        onChange={(e) => {
          setFiatRate(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default CustomFiatRate;
