import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { refresh } from "../../images";
import { getOrders } from "../../data/Requests";

const Refresh = () => {
  const {
    setNewFilterView,
    setOrdersView,
    setCurrentOrder,
    setCurrentFee,
    orders,
    currentFiat,
    currentCrypto,
    currentPayment,
    config,
    currentId,
    mode,
    amount,
    setOrders,
    ordersView,
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-max my-auto flex border border-1 border-orange rounded-4"
      type="button"
      onClick={() => {
        if (ordersView === true) {
          setOrdersView(false);
        }

        getOrders(
          mode,
          amount,
          currentFiat,
          currentCrypto,
          currentPayment,
          setOrders,
          setOrdersView
        );
        if (
          orders !== null ||
          currentFiat !== null ||
          currentCrypto !== null ||
          currentPayment !== null ||
          config[currentId].orders !== null
        ) {
          setNewFilterView(false);
          setCurrentOrder(null);
          setCurrentFee(null);
          // setOrdersView(true);
        } else {
          setNewFilterView(false);
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
