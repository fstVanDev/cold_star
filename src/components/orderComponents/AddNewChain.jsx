import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const AddNewChain = () => {
  const {
    setNewFilterView,
    setGlobalId,
    globalId,
    setCurrentFiat,
    setCurrentCrypto,
    setCurrentPayment,
    setCurrentOrder,
    setCurrentFee,
    setPayment,
    setAmount,
    config,
    setFiatRate,
    setMakerProcent,
    currentId,
    setMode,
    setOrdersView,
  } = useContext(StateContext);

  return (
    <button
      type="button"
      className="w-full h-[54px] rounded-10 border-dashed border-2 border-green"
      onClick={() => {
        if (config[currentId].currentOrder !== null) {
          if (currentId === globalId) {
            console.log("currentId === globalId", currentId, globalId);
            setGlobalId(globalId + 1);
            setAmount("");
            setMode(true);
            setPayment(null);
            setMakerProcent("");
            setFiatRate("");
            setCurrentPayment(null);
            setCurrentFiat(null);
            setCurrentCrypto(null);
            setCurrentOrder(null);
            setCurrentFee(null);
            setNewFilterView(true);
            setOrdersView(false);
          } else {
            console.log("currentId !== globalId", currentId, globalId);
          }
        } else {
          alert("Please choose order");
        }
      }}
    >
      <div className="flex w-max rounded-10 h-max justify-between px-[30px] py-[15px] m-auto">
        <p className="font-bold text-14 leading-20 text-lightGray">
          Add New Chain +
        </p>
      </div>
    </button>
  );
};

export default AddNewChain;
