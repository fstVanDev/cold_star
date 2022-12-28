import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { plusOrders } from "../images";
import { feeFunction } from "../data/mainData";

const SecondaryOrders = ({ price2 }) => {
  const {
    mode,
    currentAmount,
    currentFiat,
    currentCrypto,
    currentPayment,
    currentOrders,
    globalId,
    config,
    setConfig,
    setNewFilterView,
    setCurrentOrders,
    secondaryOrders,
    setSecondaryOrders,
    ordersView,
    setCurrentOrder,
    setOrdersView,
    currentOrder,
    fiatRate,
    makerProcent,
  } = useContext(StateContext);

  const [fee, setFee] = useState(null);
  const [activeIndex, setACtiveIndex] = useState(null);

  return (
    <>
      {config.length >= 2 && (
        <div className="bg-white px-[10px] rounded-b-20 pb-[10px]">
          <div className="bg-main rounded-15">
            {config[config.length - 1].orders.map((item, index) => (
              <>
                <div className="w-max h-max" key={index}>
                  <div
                    className="2xl:w-[1050px] h-[88px] flex justify-between py-[12px] px-[20px]"
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
                    <div className="grid w-max h-max my-auto">
                      <p className="text-14 leading-20 font-bold text-black mb-[6px]">
                        {item.trade_user.name}
                      </p>
                      <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
                        <p>
                          {`${item.trade_user.month_orders_count} orders  /  
                ${
                  Number(item.trade_user.month_finish_rate).toFixed(2) * 100
                }% completion`}
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
                    <div className="h-full my-auto grid py-auto overflow-y-auto w-[170px]">
                      <div className="w-max h-max grid m-auto">
                        {item.trade_methods.map((obj, index) => (
                          <div
                            key={index}
                            className={`w-max h-max content-center bg-yellow rounded-2 px-[12px] ${
                              item.trade_methods.length === 1
                                ? "my-auto"
                                : "mb-[5px]"
                            } py-[4px] mx-auto`}
                          >
                            <p className="text-orange font-normal text-12 leading-16 w-max">
                              {obj.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fees */}
                    <div className="max-w-[120px] h-max flex my-auto">
                      <p className="text-green text-18 leading-24 font-bold text-center">
                        {feeFunction(
                          makerProcent,
                          // Number(config[config.length - 2].fiat.rates[0].rate),
                          Number(config[config.length - 1].fiat.rates[0].rate),
                          fiatRate,
                          Number(price2)
                          // Number(item.price),
                          // Number(config[config.length - 2].fiat.rates[0].rate),
                          // Number(config[config.length - 1].fiat.rates[0].rate),
                          // Number(price2),
                          // Number(item.price)
                        )}
                        %
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className={`w-[50px] h-[50px]  border border-1  ${
                        activeIndex === index
                          ? "border-green bg-main"
                          : "border-gray bg-white"
                      } rounded-6 my-auto flex`}
                      onClick={() => {
                        setCurrentOrder(item);
                        setACtiveIndex(index);
                        if (
                          currentFiat !== null &&
                          currentCrypto !== null &&
                          currentPayment !== null
                        ) {
                          const localObject = {
                            id: globalId,
                            mode: mode,
                            amount: currentAmount,
                            defaultAmount:
                              currentAmount.length === 0 ? false : true,
                            fiat: currentFiat,
                            crypto: currentCrypto,
                            payments: currentPayment,
                            orders: currentOrders,
                            currentOrder: item,
                            // currentFee: fee,
                          };

                          let arr = config;

                          arr.map((obj, index) => {
                            if (
                              obj.id === globalId &&
                              arr[arr.length - 1] !== globalId
                            ) {
                              if (
                                JSON.stringify(obj) !==
                                JSON.stringify(localObject)
                              ) {
                                arr.splice(index, 1);
                                const insert = function (array, indexi, obje) {
                                  return [
                                    ...array.slice(0, indexi),
                                    obje,
                                    ...array.slice(indexi),
                                  ];
                                };
                                arr = insert(arr, index, localObject);
                                console.log(arr);
                                setConfig(arr);
                              }
                            }
                          });
                        }
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
                {config.length - 1 === index ? null : (
                  <div className="2xl:w-[1010px] h-[1px] bg-secondary mx-auto" />
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryOrders;
