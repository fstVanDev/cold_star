import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../../context/StateProvider";

const DefaultChain = () => {
  const { mode, currentFiat, currentCrypto, currentPayment, amount } =
    useContext(StateContext);
  return (
    <div
      className={`border border-1 ${
        mode ? "border-green" : "border-orange"
      } rounded-10 h-max w-full grid px-[15px] py-[18px]`}
    >
      <div className="w-full h-max grid ">
        {/* Mode */}
        <p
          className={`text-16 font-normal mb-[9px] ${
            mode ? "text-green" : "text-orange"
          }`}
        >
          {mode === true ? "Buy" : "Sell"}
        </p>

        {/* Amount */}
        <div className="flex mb-[9px]">
          <p className="text-lightGray font-normal text-16">Amount:</p>
          <p
            className={`${
              mode ? "text-green" : "text-orange"
            } text-16 font-normal ml-[9px]  mt-auto`}
          >
            {amount.length === 0 ? "Default (500)" : amount}
          </p>
        </div>

        {/* Fiat */}
        <div className="flex mb-[9px]">
          <p className="text-lightGray font-normal text-16">Fiat:</p>
          <p
            className={`${
              mode ? "text-green" : "text-orange"
            } text-16 font-normal ml-[9px]  mt-auto`}
          >
            {currentFiat !== null ? currentFiat.name : "Choose fiat"}
          </p>
        </div>

        {/* Crypto */}
        <div className="flex mb-[9px]">
          <p className="text-lightGray font-normal text-16">Crypto:</p>
          <p
            className={`${
              mode ? "text-green" : "text-orange"
            } text-16 font-normal ml-[9px] mt-auto`}
          >
            {currentCrypto !== null ? currentCrypto.name : "Choose crypto"}
          </p>
        </div>

        {/* Methods */}
        <div className="flex mb-[9px]">
          <p className="text-lightGray font-normal text-16">Payment:</p>
          <div
            className={`${
              mode ? "text-green" : "text-orange"
            } text-16 font-normal ml-[9px] leading-14 grid mt-auto`}
          >
            {currentPayment !== null
              ? currentPayment.map((item) => <p>{item.name},</p>)
              : "Choose payment methods"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultChain;
