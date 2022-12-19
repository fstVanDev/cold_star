import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import AddNewChain from "./AddNewChain";
import Profit from "./Profit";
import { close, star, favouriteStar } from "../../images";

const Chain = () => {
  const {
    currentId,
    config,
    currentOrder,
    setCurrentOrder,
    secondaryMode,
    setSecondaryMode,
    setMode,
    setCurrentAmount,
    setCurrentId,
    setCurrentFiat,
    setCurrentCrypto,
    setCurrentPayment,
    setCurrentOrders,
    globalId,
    secondaryAmount,
    setSecondaryAmount,
    secondaryFiat,
    setSecondaryFiat,
    secondaryCrypto,
    setSecondaryCrypto,
    secondaryPayment,
    setSecondaryPayment,
  } = useContext(StateContext);

  const [fav, setFav] = useState(false);

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChain />
      {config !== null && (
        <>
          {config.map((item, index) => {
            {
              item.currentOrder !== null && (
                <>
                  <div className="h-[30px] bg-green w-[2px] mx-auto" />
                  <div
                    onClick={() => {
                      setCurrentId(index);
                      console.log(index, "currentId");

                      if (config.length === 1) {
                        setMode(config[0].mode);

                        if (config[0].defaultAmount === true) {
                          setCurrentAmount(Number(500));
                        } else {
                          setCurrentAmount(Number(config[0].amount));
                        }

                        setCurrentFiat(config[0].fiat);
                        setCurrentCrypto(config[0].crypto);
                        setCurrentPayment(config[0].payments);
                        setCurrentOrders(config[0].orders);
                      } else {
                        console.log(index - 1, "index - 1");
                        setMode(config[index - 1].mode);

                        if (config[index - 1].defaultAmount === true) {
                          setCurrentAmount(Number(500));
                        } else {
                          setCurrentAmount(Number(config[index - 1].amount));
                        }

                        setCurrentFiat(config[index - 1].fiat);
                        setCurrentCrypto(config[index - 1].crypto);
                        setCurrentPayment(config[index - 1].payments);
                        setCurrentOrders(config[index - 1].orders);

                        console.log(index, "index");
                        setSecondaryMode(config[index].mode);
                        setSecondaryPayment(config[index].payment);

                        if (config[index].defaultAmount === true) {
                          setCurrentAmount(Number(500));
                        } else {
                          setCurrentAmount(Number(config[index].amount));
                        }

                        setSecondaryFiat(config[index].fiat);
                        setSecondaryCrypto(config[index].crypto);
                        setCurrentPayment(config[index].payments);
                        setCurrentOrders(config[index].orders);
                      }
                    }}
                    className="w-[190px] h-[93px] border border-2 border-green rounded-15 bg-white p-[15px] flex justify-between"
                  >
                    <div className="w-max h-full">
                      <p className="font-bold text-14 leading-20 text-gray">
                        {item.currentOrder.trade_user.name}
                      </p>

                      <div className="w-max h-max flex">
                        <p
                          className={`${
                            item.mode === true ? "text-green" : "text-orange"
                          } text-10 leading-14 font-bold w-max h-max my-auto mr-[5px]`}
                        >
                          {item.mode === true ? "Buy" : "Sell"}
                        </p>
                        <p className="font-normal text-10 leading-14 w-max h-max my-auto">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-green font-bold text-18 leading-24 w-max h-max mt-[5px]">
                        +fee%
                      </p>
                    </div>

                    <div className="w-max h-max">
                      <button
                        type="button"
                        onClick={() => console.log("delete chain click")}
                        className=" relative w-[20px] h-[20px] border border-1 border-gray rounded-6 bg-main flex"
                      >
                        <img
                          src={close}
                          alt="cls"
                          className="w-[12px] h-[12px] m-auto"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.log("favourote chain click")}
                        className=" relative w-[20px] h-[20px] border border-1 border-gray rounded-6 bg-main flex mt-[15px]"
                      >
                        <img
                          src={fav !== true ? star : favouriteStar}
                          alt="star"
                          className="w-[12px] h-[12px] m-auto"
                        />
                      </button>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </>
      )}

      <Profit />
    </div>
  );
};

export default Chain;
