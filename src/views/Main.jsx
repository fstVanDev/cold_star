import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/auxuliaryComponents/Filters";
import { StateContext } from "../context/StateProvider";
import ChainBlock from "../components/auxuliaryComponents/OrdersBlock/ChainBlock";
import Orders from "../components/auxuliaryComponents/OrdersBlock/Orders";

const Main = () => {
  const { setFiat, setCrypto, user, setUser, orders } =
    useContext(StateContext);

  const bar = [
    { value: "Мethod", width: "w-max" },
    { value: "Advertisers (Completion rate)", width: "min-w-[180px]" },
    { value: "Price", width: "min-w-[95px]" },
    { value: "Limit/Available", width: "min-w-[190px]" },
    { value: "Payment", width: "min-w-[100px]" },
    { value: "Your Fees", width: "min-w-[60px]" },
  ];

  return (
    <div className="grid bg-main">
      <div className="fixed w-[100vw] h-[70px] z-2 bg-main border-b border-b-1 border-b-gray">
        <Navbar />
      </div>

      <div className="2xl:w-[1290px] h-max mx-auto">
        <Filters />
        {orders.length === 0 ? null : (
          <>
            <div className="flex h-full bg-main justify-between">
              <div className="2xl:w-[1070px] h-max grid">
                <div className=" pl-[30px] pr-[126px] h-max mb-[14px] flex justify-between z-1">
                  {bar.map((item) => (
                    <p
                      className={`font-normal text-lightGray text-12 leading-16 ${item.width} z-1`}
                    >
                      {item.value}
                    </p>
                  ))}
                </div>
                <Orders />
              </div>
              <ChainBlock />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
