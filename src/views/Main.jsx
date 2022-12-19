import React, { useState, useContext, useEffect } from "react";
import Filter from "../components/Filter";
import Orders from "../components/Orders";
import Chain from "../components/orderComponents/Chain";
import FilterModal from "../components/FilterModal";
import { StateContext } from "../context/StateProvider";

const Main = () => {
  const { config, setConfig, globalId, currentOrders } =
    useContext(StateContext);

  // useEffect(() => {
  //   console.log(localStorage);
  //   if (window.localStorage.length !== 0) {
  //     const storage = window.localStorage;
  //     const arr = [];

  //     const localData = JSON.parse(storage.getItem(`${globalId}`));

  //     console.log(localData);
  //     setConfig(localData);
  //   }
  // }, [window.localStorage]);

  return (
    <div className="pt-[70px] min-h-[100vh] bg-main">
      <Filter />
      <FilterModal />
      {currentOrders !== null && (
        <div className="2xl:w-[1290px] mx-auto flex justify-between">
          <Orders />
          <Chain />
        </div>
      )}
    </div>
  );
};

export default Main;
