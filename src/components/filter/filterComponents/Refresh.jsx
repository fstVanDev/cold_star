import React, { useContext, useEffect } from "react";
import { StateContext } from "../../../context/StateProvider";
import { getOrders } from "../../../data/Requests";
import { refresh } from "../../../images";

const Refresh = () => {
  const {
    currentCrypto,
    currentFiat,
    setOrders,
    amount,
    currentPayment,
    orders,
    mode,
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-full flex border border-1 border-orange rounded-10 "
      type="button"
      onClick={() => {
        console.log(1);
        if (
          currentFiat !== null &&
          currentCrypto !== null &&
          currentPayment !== null
        ) {
          console.log(2);
          getOrders(
            mode,
            currentFiat,
            currentCrypto,
            currentPayment,
            amount,
            setOrders
          );
        }
      }}
    >
      <div className="h-full w-full rounded-10 p-[10px]">
        {orders.length === 0 ? (
          <p
            type="button"
            className="w-max h-max text-orange text-12 font-normal leading-17"
          >
            Apply
          </p>
        ) : (
          <img src={refresh} alt="refresh" />
        )}
      </div>
    </button>
  );
};

export default Refresh;
