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
    currentFee,
    setCurrentId,
    currentId,
    editMode,
    setEditMode,
  } = useContext(StateContext);

  useEffect(() => {
    console.log(config);

    if (config !== null) {
      if (config.length > 0) {
        if (editMode === false) {
          setCurrentId(config.length - 1);
        }
      }
    }
  }, [config]);

  useEffect(() => {
    console.log(currentId, globalId);
  }, [currentId]);

  useEffect(() => {
    if (
      (currentFiat !== null &&
        currentCrypto !== null &&
        currentPayment !== null) ||
      (currentFee !== null && currentOrder !== null)
    ) {
      if (editMode === false) {
        const localObject = {
          id: globalId,
          mode: mode,
          amount: amount,
          defaultAmount: amount.length === 0 ? true : false,
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
      } else {
        const localObject = {
          id: currentId,
          mode: config[currentId].mode,
          amount: config[currentId].amount,
          defaultAmount: config[currentId].defaultAmount,
          fiat: config[currentId].fiat,
          crypto: config[currentId].crypto,
          payments: config[currentId].payments,
          orders: config[currentId].orders,
          currentOrder: config[currentId].currentOrder,
          currentFee: config[currentId].currentFee,
        };

        let arr = config;
        console.log("change1");
        console.log(currentId, arr[currentId]);
        console.log(localObject);
        if (JSON.stringify(arr[currentId]) !== JSON.stringify(localObject)) {
          arr[currentId] = localObject;
          setConfig(arr);
          console.log(arr[currentId]);
          console.log("change2");
        } else {
          console.log("change nothing");
          console.log(localObject);
        }
      }
    }
  }, [
    currentFiat,
    currentCrypto,
    currentPayment,
    currentFee,
    currentOrder,
    amount,
    orders,
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
