import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/auxuliaryComponents/Filters";
import { StateContext } from "../context/StateProvider";
import { getCurrencies } from "../data/Requests";
import { useEffect } from "react";

const Main = () => {
  const { setFiat, setCrypto } = useContext(StateContext);

  useEffect(() => {
    getCurrencies(setFiat, setCrypto);
  }, []);

  return (
    <div className="grid bg-main">
      <div className="fixed w-[100vw] h-[70px] z-2 bg-main border-b border-b-1 border-b-gray">
        <Navbar />
      </div>

      <div className="2xl:w-[1290px] h-max mx-auto mt-[70px]">
        <Filters />
      </div>
    </div>
  );
};

export default Main;
