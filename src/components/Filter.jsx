import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateProvider";
import CryptoDropdown from "./filterComponents/CryptoDropdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import RegionDropdown from "./filterComponents/RegionDropdown";
import { close, ordersChevron } from "../images";
import PaymentDropdown from "./filterComponents/PaymentDropdown";
import { getTradeMethods } from "../data/Requests";
import Refresh from "./filterComponents/Refresh";
import { getOrders } from "../data/Requests";
import MakerTaker from "./filterComponents/MakerTaker";

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
    makerProcent,
    setMakerProcent,
  } = useContext(StateContext);

  const [addition, setAddition] = useState(false);

  useEffect(() => {
    if (currentCrypto !== null && currentFiat !== null) {
      getTradeMethods(mode, currentFiat, currentCrypto, setPayment);
    }
  }, [currentCrypto, currentFiat]);

  useEffect(() => {
    if (currentPayment !== null) {
      getOrders(
        mode,
        currentAmount,
        currentFiat,
        currentCrypto,
        currentPayment,
        setCurrentOrders
      );
    }
  }, [currentPayment]);

  return (
    <div className="2xl:w-[1290px] flex mx-auto h-max py-[30px] z-[200]">
      <div className="grid h-max w-full rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        <div className="flex justify-between w-full h-[60px]">
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
            setCurrentPayment={setCurrentPayment}
          />

          <RegionDropdown />

          <Refresh />

          <button
            type="button"
            className="flex border border-1 border-gray rounded-4 p-[10px] h-max my-auto
            "
            onClick={() => setAddition(!addition)}
          >
            <img
              src={ordersChevron}
              alt="chrn"
              className={`w-[12px] h-[15px] ${
                addition === true ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {addition === true && (
          <div className=" w-full h-[60px]">
            <div className="w-full h-full rounded-10 flex justify-around bg-main border border-1 border-gray">
              <MakerTaker />
            </div>
          </div>
        )}
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
