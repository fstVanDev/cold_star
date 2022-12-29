import React, { useContext } from "react";
import Filter from "../components/Filter";
import Orders from "../components/Orders";
import Chain from "../components/orderComponents/Chain";
import FilterModal from "../components/FilterModal";
import { StateContext } from "../context/StateProvider";
import { useEffect } from "react";

const Main = () => {
  const {
    config,
    orders,
    ordersView,
    mode,
    amount,
    currentFiat,
    currentCrypto,
    currentPayment,
    globalId,
    setConfig,
    currentOrder,
    setOrdersView,
    currentFee,
  } = useContext(StateContext);

  useEffect(() => {
    if (config !== null) {
      console.log(config);
    }
  }, [config]);

  useEffect(() => {
    if (
      currentFiat !== null &&
      currentCrypto !== null &&
      currentPayment !== null
    ) {
      const localObject = {
        id: globalId,
        mode: mode,
        amount: amount,
        defaultAmount: amount.length === 0 ? false : true,
        fiat: currentFiat,
        crypto: currentCrypto,
        payments: currentPayment,
        orders: orders,
        currentOrder: currentOrder,
        currentFee: currentFee,
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
                return [...array.slice(0, indexi), obj, ...array.slice(indexi)];
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
    } else {
      alert(
        "To receive orders, fiat, crypto and payment fields must be filled! Please check data..."
      );
    }
  }, [
    currentFiat,
    currentCrypto,
    currentPayment,
    currentFee,
    currentOrder,
    amount,
    globalId,
    mode,
  ]);

  return (
    <div className="pt-[70px] min-h-[100vh] bg-main">
      <Filter />
      <FilterModal />

      {orders !== null && ordersView === true && (
        <div className="2xl:w-[1290px] mx-auto flex justify-between">
          <Orders />
          <Chain />
        </div>
      )}
    </div>
  );
};

export default Main;
