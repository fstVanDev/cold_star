import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { plusOrders } from "../images";
import Top from "./orderComponents/Top";
import { feeFunction } from "../data/mainData";

const Orders = () => {
  const {
    makerProcent,
    fiatRate,
    currentFee,
    setCurrentFee,
    setCurrentOrder,
    config,
    currentId,
    setEditMode,
    orders,
    globalId,
  } = useContext(StateContext);

  return (
    <div className="2xl:w-[1290px] mx-auto">
      <Top />
      {orders.length !== 0 ? (
        <>
          {config[currentId].orders !== null && (
            <>
              {config[currentId].orders.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    config[currentId].currentOrder !== null
                      ? item.id === config[currentId].currentOrder.id
                        ? "border-green border border-1"
                        : ""
                      : ""
                  } w-max h-max mb-[10px] rounded-20`}
                >
                  <div
                    className="2xl:w-[1070px] h-max flex justify-between bg-white py-[12px] px-[30px] rounded-20"
                    key={index}
                  >
                    {/* Mode */}
                    <div
                      className={`${
                        item.type === 2 ? "bg-green" : "bg-orange"
                      } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
                    >
                      <p className="text-white font-normal text-12 leading-16">
                        {item.type === 2 ? "Buy" : "Sell"}
                      </p>
                    </div>

                    {/* Name */}
                    <div className="grid min-w-[175px] h-max my-auto">
                      <p className="text-14 leading-20 font-bold text-black mb-[6px]">
                        {item.trade_user.name}
                      </p>
                      <div className="flex w-max h-max mx-auto my-auto text-12 leading-16 font-normal text-gray">
                        <p>
                          {`${item.trade_user.month_orders_count} orders  / ${
                            Number(item.trade_user.month_finish_rate).toFixed(
                              2
                            ) * 100
                          }% completion`}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex min-w-[100px] h-max my-auto">
                      <p className="text-black text-18 font-bold leading-24">
                        {item.price}
                      </p>
                      <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
                        {item.fiat.name}
                      </p>
                    </div>

                    {/* Available */}
                    <div className="grid min-w-[195px] h-max my-auto">
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
                    <div className="h-max my-auto flex w-[170px]">
                      <div className="w-full h-max flex flex-wrap my-auto mx-auto">
                        {item.trade_methods.map((obj, index) => (
                          <div
                            key={index}
                            className={`border border-1 w-max h-max rounded-2 px-[5px] py-[px] mx-[2px] my-[2px]`}
                            style={{ borderColor: obj.color }}
                          >
                            <p
                              className={`text-12 leading-14 w-max font-normal`}
                              style={{ color: obj.color }}
                            >
                              {obj.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Profit */}
                    <div className="w-[88px] h-max flex my-auto">
                      <p
                        className={` ${
                          Number(
                            feeFunction(
                              Number(makerProcent),
                              Number(config[currentId].fiat.rates[0].rate),
                              Number(fiatRate),
                              Number(item.price)
                            )
                          ) > 0
                            ? "text-green"
                            : "text-orange"
                        } text-18 leading-24 font-bold text-center`}
                      >
                        {feeFunction(
                          Number(makerProcent),
                          Number(config[currentId].fiat.rates[0].rate),
                          Number(fiatRate),
                          Number(item.price)
                        )}
                        %
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="w-[50px] h-[50px] border border-1 rounded-6 my-auto flex"
                      onClick={() => {
                        setCurrentOrder(item);
                        setCurrentFee(
                          feeFunction(
                            Number(makerProcent),
                            Number(config[currentId].fiat.rates[0].rate),
                            Number(fiatRate),
                            Number(item.price)
                          )
                        );
                      }}
                    >
                      <img
                        src={plusOrders}
                        alt="plus"
                        className="w-[20px] h-[20px] m-auto "
                      />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        <div className="w-full h-max grid mx-auto mt-[50px]">
          <p className="w-max h-max flex mx-auto text-lightGray text-16 font-normal">
            No orders were found matching the specified filters
          </p>
        </div>
      )}
    </div>
  );
};

export default Orders;
