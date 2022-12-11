import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import CryptoDrowdown from "./filterComponents/CryptoDrowdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import PaymentDropdown from "./filterComponents/PaymentDropdown";
import { getTradeMethods } from "../../data/Requests";

const Filters = () => {
  const { mode, currentFiat, currentCrypto, setTrade } =
    useContext(StateContext);

  useEffect(() => {
    // if (currentCrypto !== null && currentFiat !== null) {
    getTradeMethods(mode, currentFiat, currentCrypto, setTrade);
    // }
  }, [currentFiat, currentCrypto]);

  return (
    <div className="w-full h-max py-[30px]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        {/* Mode  */}
        <Mode />

        {/* Amount */}
        <Amount />

        {/* Fiat */}
        <FiatDropdown />

        {/* Crypto */}
        <CryptoDrowdown />

        {/* Payment */}
        <PaymentDropdown />
      </div>
    </div>
  );
};

export default Filters;
