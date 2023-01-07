import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const ClearAll = () => {
  const {
    setConfig,
    setGlobalId,
    setCurrentId,
    setMode,
    setPayment,
    setOrders,
    setFiatRate,
    setMakerProcent,
    setAmount,
    setCurrentFiat,
    setCurrentCrypto,
    setCurrentPayment,
    setCurrentOrder,
    setCurrentFee,
    setNewFilterView,
    setOrdersView,
    setEditMode,
  } = useContext(StateContext);

  const clearAll = () => {
    setConfig(null);
    setGlobalId(0);
    setCurrentId(0);
    setMode(true);
    setPayment(null);
    setOrders(null);
    setFiatRate("");
    setMakerProcent("");
    setAmount("");
    setCurrentFiat(null);
    setCurrentCrypto(null);
    setCurrentPayment(null);
    setCurrentOrder(null);
    setCurrentFee(null);
    setNewFilterView(false);
    setOrdersView(false);
    setEditMode(false);
  };

  return (
    <button
      type="button"
      onClick={() => clearAll()}
      className="w-full h-[32px] bg-white border border-2 border-green rounded-6 mt-[20px] flex justify-center"
    >
      <p className="text-green font-normal text-12 leading-16 my-auto">
        Clear All
      </p>
    </button>
  );
};

export default ClearAll;
