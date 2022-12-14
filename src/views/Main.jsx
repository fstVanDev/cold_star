import React, { useContext, useState } from "react";
import Filter from "../components/Filter";
import Orders from "../components/Orders";
import Chain from "../components/orderComponents/Chain";
import FilterModal from "../components/FilterModal";
import { StateContext } from "../context/StateProvider";
import { useEffect } from "react";
import Loader from "../components/Loader";

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
    setGlobalId,
    loader,
    setLoader,
    fiatRate,
    remove,
    setCurrentFee,
    setCurrentOrder,
    setRemove,
  } = useContext(StateContext);

  useEffect(() => {
    console.log(config, "from main useEffect => config");

    if (config !== null) {
      if (config.length > 0) {
        if (editMode === false) {
          setCurrentId(config.length - 1);
        }
      }
    }
  }, [config, currentId]);

  useEffect(() => {
    console.log(currentId, "currentId");
  }, [currentId]);

  useEffect(() => {
    console.log(globalId, "globalId");
  }, [globalId]);

  useEffect(() => {
    if (editMode === false) {
      if (
        (currentFiat !== null &&
          currentCrypto !== null &&
          currentPayment !== null) ||
        (currentFee !== null && currentOrder !== null)
      ) {
        const localObject = {
          id: globalId,
          mode: mode,
          amount: amount,
          defaultAmount: amount.length === 0 ? true : false,
          fiatRate: Number(fiatRate),
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
          console.log("change config");
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
                console.log("?????? ???? ???????????????? ?? globalid");
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
      }
    }

    if (editMode === true) {
      const localObject = {
        id: currentId,
        mode: mode,
        amount: amount,
        defaultAmount: amount.length === 0 ? true : false,
        fiatRate: Number(fiatRate),
        fiat: currentFiat,
        crypto: currentCrypto,
        payments: currentPayment,
        orders: orders,
        currentOrder: currentOrder,
        currentFee: currentFee,
      };

      let array = config;
      console.log("change config with currentId", localObject, "localObject");

      if (JSON.stringify(config[currentId]) !== JSON.stringify(localObject)) {
        array.splice(currentId, 1);
        const insert = function (arr, indexi, obj) {
          return [...arr.slice(0, indexi), obj, ...arr.slice(indexi)];
        };
        array = insert(array, currentId, localObject);
        console.log("?????? ???? ???????????????? ?? currentId");
        setConfig(array);
      }
    }
  }, [
    // config,
    fiatRate,
    currentFiat,
    currentCrypto,
    currentPayment,
    currentFee,
    currentOrder,
    amount,
    orders,
    globalId,
    // currentId,
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
