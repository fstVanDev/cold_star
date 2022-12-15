import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import CryptoDrowdown from "./filterComponents/CryptoDrowdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import PaymentDropdown from "./filterComponents/PaymentDropdown";
import { getTradeMethods } from "../../data/Requests";
import RegionDropdown from "./filterComponents/RegionDropdown";
import Refresh from "./filterComponents/Refresh";

const Filter = () => {
  const {
    setOrders,
    currentPayment,
    orders,
    amount,
    setAmount,
    mode,
    currentFiat,
    currentCrypto,
    setPayment,
    setMode,
    fiat,
    setCurrentFiat,
    crypto,
    payment,
    setCurrentPayment,
    setCurrentCrypto,
  } = useContext(StateContext);

  useEffect(() => {
    if (currentCrypto !== null && currentFiat !== null) {
      getTradeMethods(mode, currentFiat, currentCrypto, setPayment);
    }
  }, [currentFiat, currentCrypto]);

  return (
    <div className="2xl:w-[1290px] mx-auto h-max py-[30px] mb-[30px]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        {/* Mode  */}
        <Mode mode={mode} setMode={setMode} />

        {/* Amount */}
        <Amount amount={amount} setAmount={setAmount} />

        {/* Fiat */}
        <FiatDropdown fiat={fiat} setCurrentFiat={setCurrentFiat} />

        {/* Crypto */}
        <CryptoDrowdown crypto={crypto} setCurrentCrypto={setCurrentCrypto} />

        {/* Payment */}
        <PaymentDropdown
          payment={payment}
          currentFiat={currentFiat}
          currentCrypto={currentCrypto}
          setCurrentPayment={setCurrentPayment}
        />

        {/* Region */}
        <RegionDropdown />

        {/* Refresh */}
        <Refresh
          currentCrypto={currentCrypto}
          currentFiat={currentFiat}
          setOrders={setOrders}
          amount={amount}
          currentPayment={currentPayment}
          orders={orders}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default Filter;
