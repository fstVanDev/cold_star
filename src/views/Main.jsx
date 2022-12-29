import React, { useContext } from "react";
import Filter from "../components/Filter";
import Orders from "../components/Orders";
import Chain from "../components/orderComponents/Chain";
import FilterModal from "../components/FilterModal";
import { StateContext } from "../context/StateProvider";
import { useEffect } from "react";

const Main = () => {
  const { config } = useContext(StateContext);

  useEffect(() => {
    if (config !== null) {
      console.log(config);
    }
  }, [config]);

  return (
    <div className="pt-[70px] min-h-[100vh] bg-main">
      <Filter />
      <FilterModal />

      <div className="2xl:w-[1290px] mx-auto flex justify-between">
        <Orders />
        <Chain />
      </div>
    </div>
  );
};

export default Main;
