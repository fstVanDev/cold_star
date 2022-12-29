import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const AddNewChain = () => {
  const { setNewFilterView, setGlobalId, globalId, setCurrentOrder } =
    useContext(StateContext);

  return (
    <button
      type="button"
      className="w-full h-[54px] rounded-10 border-dashed border-2 border-green"
      onClick={() => {
        setNewFilterView(true);
        setGlobalId(globalId + 1);
        setCurrentOrder(null);
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
