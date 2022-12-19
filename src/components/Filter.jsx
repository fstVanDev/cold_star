import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import CryptoDropdown from "./filterComponents/CryptoDropdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import RegionDropdown from "./filterComponents/RegionDropdown";
import { close } from "../images";
import PaymentDropdown from "./filterComponents/PaymentDropdown";
import { getTradeMethods } from "../data/Requests";
import Refresh from "./filterComponents/Refresh";

const Filter = () => {
  const {
    currentPayment,
    mode,
    currentFiat,
    currentCrypto,
    setMode,
    fiat,
    setCurrentFiat,
    crypto,
    globalId,
    setGlobalId,
    currentOrders,
    currentAmount,
    setCurrentAmount,
    setCurrentPayment,
    setCurrentCrypto,
    newFilterView,
    setNewFilterView,
    config,
    setConfig,
    payment,
    setPayment,
    setCurrentOrders,
    secondaryOrders,
    setSecondaryOrders,
  } = useContext(StateContext);

  useEffect(() => {
    if (currentCrypto !== null && currentFiat !== null) {
      getTradeMethods(mode, currentFiat, currentCrypto, setPayment);
    }
  }, [currentCrypto, currentFiat]);

  useEffect(() => {
    console.log(config);
  }, [config]);

  return (
    <div className="2xl:w-[1290px] flex mx-auto h-max py-[30px] z-[200]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        <Mode mode={mode} setMode={setMode} />
        <Amount amount={currentAmount} setCurrentAmount={setCurrentAmount} />

        <FiatDropdown
          fiat={fiat}
          setCurrentFiat={setCurrentFiat}
          currentFiat={currentFiat}
        />

        <CryptoDropdown
          crypto={crypto}
          setCurrentCrypto={setCurrentCrypto}
          currentCrypto={currentCrypto}
        />

        <PaymentDropdown
          payment={payment}
          currentFiat={currentFiat}
          currentCrypto={currentCrypto}
          currentPayment={currentPayment}
          setCurrentPayment={setCurrentPayment}
        />

        <RegionDropdown />

        <Refresh />
      </div>
      {newFilterView && (
        <button
          onClick={() => {
            setNewFilterView(false);
            setGlobalId(globalId - 1);
          }}
          className="bg-main w-[24px] h-[24px]  my-auto ml-[20px] rounded-6"
        >
          <img src={close} alt="cls" className="w-[12px] h-[12px] m-auto" />
        </button>
      )}
    </div>
  );
};

export default Filter;
