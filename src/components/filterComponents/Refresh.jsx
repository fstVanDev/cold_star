import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { refresh } from "../../images";

const Refresh = () => {
  const {
    mode,
    amount,
    currentFiat,
    currentCrypto,
    currentPayment,
    orders,
    globalId,
    config,
    setConfig,
    setNewFilterView,
    currentOrder,
    setOrdersView,
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-max my-auto flex border border-1 border-orange rounded-4"
      type="button"
      onClick={() => {
        setOrdersView(true);
      }}
    >
      <div className="h-max w-full rounded-10 p-[10px]">
        <img src={refresh} alt="refresh" />
      </div>
    </button>
  );
};

export default Refresh;
