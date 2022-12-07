import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/auxuliaryComponents/Filters";
import { StateContext } from "../context/StateProvider";
import { getCsrf, getCurrencies } from "../data/Requests";
import { useEffect } from "react";

import Error from "../routes/Error";

import { useReactPath } from "../hooks/useReactPath";

const Main = () => {
  const { setFiat, setCrypto, user, setUser } = useContext(StateContext);

  const path = useReactPath();

  useEffect(() => {
    if (user === null) {
      console.log(1);
      getCsrf(setUser);
      getCurrencies(setFiat, setCrypto);
      if (user === null) {
        console.log(3);
        return <Error />;
      }
    }
  }, []);

  function getUser() {
    console.log(1);
    getCsrf(setUser);
    getCurrencies(setFiat, setCrypto);
  }
  // useEffect(() => {
  //   let string;
  //   console.log(path);
  //   if (user !== null) {
  //     string = path.startsWith(`/${user.id}`);
  //     console.log(string);
  //     if (string === false) {
  //       console.log(2);
  //       return <Error />;
  //     }
  //   }
  // }, [path]);

  return (
    <>
      {user === null ? (
        <>
          {getUser()}
          <Error />
        </>
      ) : (
        <div className="grid bg-main">
          <div className="fixed w-[100vw] h-[70px] z-2 bg-main border-b border-b-1 border-b-gray">
            <Navbar />
          </div>

          <div className="2xl:w-[1290px] h-max mx-auto mt-[70px]">
            <Filters />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
