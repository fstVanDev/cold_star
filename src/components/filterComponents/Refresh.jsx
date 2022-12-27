import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { getOrders } from "../../data/Requests";
import { refresh } from "../../images";

const Refresh = () => {
  const {
    mode,
    currentAmount,
    currentFiat,
    currentCrypto,
    currentPayment,
    currentOrders,
    globalId,
    config,
    setConfig,
    setNewFilterView,
    setCurrentOrders,
    secondaryOrders,
    setSecondaryOrders,
    ordersView,
    setOrdersView,
    currentOrder,
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-max my-auto flex border border-1 border-orange rounded-4"
      type="button"
      onClick={() => {
        if (
          currentFiat !== null &&
          currentCrypto !== null &&
          currentPayment !== null
        ) {
          setOrdersView(true);
          const localObject = {
            id: globalId,
            mode: mode,
            amount: currentAmount,
            defaultAmount: currentAmount.length === 0 ? false : true,
            fiat: currentFiat,
            crypto: currentCrypto,
            payments: currentPayment,
            orders: currentOrders,
            currentOrder: currentOrder,
          };

          if (config === null) {
            const arr = [];
            arr.push(localObject);

            setConfig(arr);
          } else {
            let arr = config;

            arr.map((item, index) => {
              if (item.id === globalId && arr[arr.length - 1] !== globalId) {
                if (JSON.stringify(item) !== JSON.stringify(localObject)) {
                  arr.splice(index, 1);
                  const insert = function (array, indexi, obj) {
                    return [
                      ...array.slice(0, indexi),
                      obj,
                      ...array.slice(indexi),
                    ];
                  };
                  arr = insert(arr, index, localObject);

                  setConfig(arr);
                }
              } else {
                if (arr.length - 1 !== globalId) {
                  arr.push(localObject);
                  setConfig(arr);
                }
              }
            });
          }
          setNewFilterView(false);
        } else {
          alert(
            "To receive orders, fiat, crypto and payment fields must be filled! Please check data..."
          );
        }
      }}
      sa
    >
      <div className="h-max w-full rounded-10 p-[10px]">
        <img src={refresh} alt="refresh" />
      </div>
    </button>
  );
};

export default Refresh;
