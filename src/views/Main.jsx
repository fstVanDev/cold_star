import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/auxuliaryComponents/Filters";
import { StateContext } from "../context/StateProvider";
import { getCurrencies } from "../data/Requests";
import { useEffect } from "react";

import Error from "../routes/Error";

import { useReactPath } from "../hooks/useReactPath";

const Main = () => {
  const { setFiat, setCrypto, user } = useContext(StateContext);

  const path = useReactPath();

  useEffect(() => {
    getCurrencies(setFiat, setCrypto);
  }, []);

  useEffect(() => {
    let string;
    console.log(path);
    if (user !== null) {
      string = path.startsWith(`/${user.id}`);
      console.log(string);
      if (string === false) {
        return <Error />;
      }
    }
  }, [path]);

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
