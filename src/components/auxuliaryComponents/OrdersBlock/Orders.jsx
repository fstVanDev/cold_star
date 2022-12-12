import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../../../context/StateProvider";
import { plusOrders } from "../../../images";

const Orders = () => {
  const { mode, orders, currentFiat, currentCrypto } = useContext(StateContext);

  return (
    <>
      {orders.map((item, index) => (
        <div className="w-full h-[88px] flex justify-between bg-white rounded-20 py-[12px] px-[30px] mb-[10px]">
          {/* Mode */}
          <div
            className={`${
              mode ? "bg-green" : "bg-orange"
            } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
          >
            <p className="text-white font-normal text-12 leading-16">
              {mode ? "Buy" : "Sell"}
            </p>
          </div>
          {/* Name */}
          <div className="grid w-max h-max my-auto">
            <p className="text-14 leading-20 font-bold text-black mb-[6px]">
              {item.trade_user.name}
            </p>
            <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
              <p>
                {`${item.trade_user.month_orders_count} orders  /  
                ${Number(item.trade_user.month_finish_rate) * 100}% completion`}
              </p>
            </div>
          </div>
          {/* Price */}
          <div className="flex w-max h-max my-auto">
            <p className="text-black text-18 font-bold leading-24">
              {item.price}
            </p>
            <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
              {item.fiat.name}
            </p>
          </div>
          {/* Available */}
          <div className="grid w-max h-max my-auto">
            <div className="flex w-max h-max ">
              <p className="text-lightGray text-normal text-12 leading-16 my-auto">
                Available
              </p>
              <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
                {`${item.amount} ${" "} ${item.asset.name}`}
              </p>
            </div>
            <div className="flex w-max h-max mt-[6px]">
              <p className="text-lightGray text-normal text-12 leading-16 my-auto">
                Limit
              </p>
              <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
                {`${item.min_trans_amount} ${" "} -  
                ${" "} ${item.max_trans_amount} ${" "} ${item.fiat.name}`}
              </p>
            </div>
          </div>
          {/* Payment */}
          <div className="h-full my-auto overflow-y-auto w-[150px]">
            {item.trade_methods.map((obj) => (
              <div className="w-max h-max my-auto flex bg-yellow rounded-2 px-[12px] py-[4px] mb-[5px] mx-auto">
                <p className="text-orange font-normal text-12 leading-16 w-max">
                  {obj.name}
                </p>
              </div>
            ))}
          </div>

          {/* Fees */}
          <div className="max-w-[120px] h-max flex my-auto">
            <p className="text-green text-10 leading-17 font-normal text-center">
              Please add second chain to see fee
            </p>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() => console.log("plus orders click button")}
            className="w-[50px] h-full bg-main border border-1 border-gray rounded-6 my-auto flex"
          >
            <img
              src={plusOrders}
              alt="plus"
              className="w-[20px] h-[20px] m-auto "
            />
          </button>
        </div>
      ))}
    </>
  );
};

export default Orders;

// {/* <div className="w-full h-[88px] flex justify-between bg-white rounded-20 py-[20px] px-[30px]">
//        {/* Mode */}
//        <div
//          className={`${
//            mode ? "bg-green" : "bg-orange"
//          } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
//        >
//          <p className="text-white font-normal text-12 leading-16">
//            {mode ? "Buy" : "Sell"}
//          </p>
//        </div>

//        {/* Name */}
//        <div className="grid w-max h-max my-auto">
//          <p className="text-14 leading-20 font-bold text-black mb-[6px]">
//            {orders.length === 0 ? "Name" : "NameUser"}
//          </p>
//          <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
//            <p>
//              {orders.length === 0 ? "161 orders" : "ordersUser"} /{" "}
//              {orders.length === 0 ? "95.30% completion" : "userCompletion"}
//            </p>
//          </div>
//        </div>

//        {/* Price */}
//        <div className="flex w-max h-max my-auto">
//          <p className="text-black text-18 font-bold leading-24">
//            {orders.length === 0 ? "471.55" : "NumUser"}
//          </p>
//          <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
//            {currentFiat === null ? "KZT" : "Fiat"}
//          </p>
//        </div>

//        {/* Available */}
//        <div className="grid w-max h-max my-auto">
//          <div className="flex w-max h-max ">
//            <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//              Available
//            </p>
//            <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//              {orders.length === 0
//                ? `787.07 ${
//                    currentCrypto !== null ? currentCrypto.name : "USDT"
//                  }`
//                : "userAvailable"}
//            </p>
//          </div>
//          <div className="flex w-max h-max mt-[6px]">
//            <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//              Limit
//            </p>
//            <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//              {orders.length === 0 ? "10,000.00 - 371,138.14" : "userLimit"}
//            </p>
//          </div>
//        </div>

//        {/* Payment */}
//        <div className="flex h-max my-auto overflow-x-scroll w-max">
//          <div className="w-max h-[24px] flex bg-yellow rounded-2 px-[12px] py-[4px] mr-[2px]">
//            <p className="text-orange font-normal text-12 leading-16 ">
//              {orders.length === 0 ? "Kaspi Bank" : "bankUser"}
//            </p>
//          </div>
//        </div>

//        {/* Fees */}
//        <div className="w-max h-max flex my-auto">
//          <p className="text-green text-18 leading-24 font-bold">+12%</p>
//        </div>

//        {/* Button */}
//        <button
//          type="button"
//          onClick={() => console.log("plus orders click button")}
//          className="w-[50px] h-full bg-main border border-1 border-gray rounded-6 my-auto flex"
//        >
//          <img
//            src={plusOrders}
//            alt="plus"
//            className="w-[20px] h-[20px] m-auto "
//          />
//        </button>
//      </div> */}
