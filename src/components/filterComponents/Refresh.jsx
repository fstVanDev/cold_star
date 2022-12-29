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
        // if (
        //   currentFiat !== null &&
        //   currentCrypto !== null &&
        //   currentPayment !== null
        // ) {

        //   const localObject = {
        //     id: globalId,
        //     mode: mode,
        //     amount: amount,
        //     defaultAmount: amount.length === 0 ? false : true,
        //     fiat: currentFiat,
        //     crypto: currentCrypto,
        //     payments: currentPayment,
        //     orders: orders,
        //     currentOrder: currentOrder,
        //     currentFee: 0,
        //   };

        //   if (config === null) {
        //     const arr = [];
        //     arr.push(localObject);

        //     setConfig(arr);
        //   } else {
        //     let arr = config;

        //     arr.map((item, index) => {
        //       if (item.id === globalId && arr[arr.length - 1] !== globalId) {
        //         if (JSON.stringify(item) !== JSON.stringify(localObject)) {
        //           arr.splice(index, 1);
        //           const insert = function (array, indexi, obj) {
        //             return [
        //               ...array.slice(0, indexi),
        //               obj,
        //               ...array.slice(indexi),
        //             ];
        //           };
        //           arr = insert(arr, index, localObject);

        //           setConfig(arr);
        //         }
        //       } else {
        //         if (arr.length - 1 !== globalId) {
        //           arr.push(localObject);
        //           setConfig(arr);
        //         }
        //       }
        //     });
        //   }
        //   setNewFilterView(false);
        // }
      }}
    >
      <div className="h-max w-full rounded-10 p-[10px]">
        <img src={refresh} alt="refresh" />
      </div>
    </button>
  );
};

export default Refresh;
