import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../../context/StateProvider";
import DefaultChain from "./DefaultChain";

const Chain = () => {
  const { orders } = useContext(StateContext);

  return (
    <div className="w-full h-max grid">
      {orders.length === 0 ? null : <DefaultChain />}
    </div>
  );
};

export default Chain;
