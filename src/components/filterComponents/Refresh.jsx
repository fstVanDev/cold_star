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
  } = useContext(StateContext);

  return (
    <button
      className="w-max h-full flex border border-1 border-orange rounded-10 "
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

                  return setConfig(arr);
                }
              } else {
                if (arr.length - 1 !== globalId) {
                  arr.push(localObject);
                  return setConfig(arr);
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
    >
      <div className="h-full w-full rounded-10 p-[10px]">
        {currentOrders === null ? (
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
