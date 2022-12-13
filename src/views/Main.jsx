import React, { useState, useContext, useEffect } from "react";
import Filter from "../components/filter/Filter";
import { StateContext } from "../context/StateProvider";
import Chain from "../components/chain/Chain";
import Orders from "../components/orders/Orders";

const Main = () => {
  const { currentCrypto, currentFiat, currentPayment, mode, amount, orders } =
    useContext(StateContext);

  // useEffect(() => {
  //   console.log("!!!!!!!!!!!!!!!!!!");
  //   console.log(currentCrypto, "currentCrypto");
  //   console.log(currentFiat, "currentFiat");
  //   console.log(currentPayment, "currentPayment");
  //   console.log(mode, "mode true2-buy, sell1-false");
  //   console.log(amount, 'amount ""default500 ');
  //   console.log(orders, "orders");
  //   console.log("!!!!!!!!!!!!!!!!!!");
  // }, [currentCrypto, currentFiat, currentPayment, mode, amount, orders]);

  const bar = [
    { value: "Мethod", width: "w-max" },
    { value: "Advertisers (Completion rate)", width: "w-[170px]" },
    { value: "Price", width: "w-[80px]" },
    { value: "Limit/Available", width: "w-[185px]" },
    { value: "Payment", width: "w-[150px]" },
    { value: "Your Fees", width: "w-[120px]" },
  ];

  return (
    <div className="grid bg-main min-h-[100vh]">
      <div className="2xl:w-[1290px] h-max mx-auto">
        <Filter />
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
              <Chain />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
