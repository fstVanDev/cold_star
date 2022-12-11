import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";
import CryptoDrowdown from "./filterComponents/CryptoDrowdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import PaymentDropdown from "./filterComponents/PaymentDropdown";

const Filters = () => {
  const { mode, setMode } = useContext(StateContext);

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
