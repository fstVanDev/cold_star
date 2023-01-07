import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { refresh } from "../../images";

const Refresh = () => {
  const {
    setNewFilterView,
    setOrdersView,
    setCurrentOrder,
    setCurrentFee,
    orders,
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-max my-auto flex border border-1 border-orange rounded-4"
      type="button"
      onClick={() => {
        if (orders !== null) {
          setNewFilterView(false);
          setCurrentOrder(null);
          setCurrentFee(null);
          setOrdersView(true);
        }
      }}
    >
      <div className="h-max w-full rounded-10 p-[10px]">
        <img src={refresh} alt="refresh" />
      </div>
    </button>
  );
};

export default Refresh;
