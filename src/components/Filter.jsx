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
import CustomFiatRate from "./filterComponents/CustomFiatRate";

const Filter = () => {
  const {
    currentPayment,
    mode,
    currentFiat,
    currentCrypto,
    globalId,
    setGlobalId,
    currentAmount,
    newFilterView,
    setNewFilterView,
    setOrders,
    setPayment,
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
        setOrders
      );
    }
  }, [currentPayment]);

  return (
    <div className="2xl:w-[1290px] flex mx-auto h-max py-[30px] z-[200]">
      <div className="grid h-max w-full rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        <div className="flex justify-around w-full h-[60px]">
          <Mode />
          <Amount />
          <FiatDropdown />
          <CryptoDropdown />
          <PaymentDropdown />
          <Refresh />
          <div className="mt-[10px] w-full h-[60px]">
            <MakerTaker />
            <CustomFiatRate />
            <RegionDropdown />
          </div>
        </div>
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
