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
  } = useContext(StateContext);

  return (
    <button
      type="button"
      className="w-full h-[54px] rounded-10 border-dashed border-2 border-green"
      onClick={() => {
        setGlobalId(globalId + 1);
        setAmount(null);
        setPayment(null);
        setCurrentPayment(null);
        setCurrentFiat(null);
        setCurrentCrypto(null);
        setCurrentOrder(null);
        setCurrentFee(null);
        setNewFilterView(true);
        console.log("Add new Filter, click button");
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
