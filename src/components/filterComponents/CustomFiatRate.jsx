import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const CustomFiatRate = () => {
  const { fiatRate, setFiatRate, currentFiat, config, currentId } =
    useContext(StateContext);

  return (
    <div className="w-max h-full flex">
      <h2 className="max-w-[60px] h-max text-center my-auto text-12 leading-16 font-normal text-lightGray mx-auto mr-[15px]">
        Custom fiat rate
      </h2>

      <input
        type="number"
        className="min-h-[40px] w-[100px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder={
          config !== null
            ? config.length > 0
              ? Number(config[currentId].fiat.rates[0].rate).toFixed(2)
              : Number(currentFiat.rates[0].rate).toFixed(2)
            : "Enter fiat..."
        }
        value={fiatRate}
        onChange={(e) => {
          if (e.target.value === "") {
            setFiatRate(Number(currentFiat.rates[0].rate).toFixed(2));
          } else {
            setFiatRate(Number(e.target.value));
            console.log(Number(e.target.value), "CustomFiatRate");
          }
        }}
      />
    </div>
  );
};

export default CustomFiatRate;
