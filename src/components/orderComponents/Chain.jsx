import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import AddNewChain from "./AddNewChain";
import Profit from "./Profit";
import { close, star, favouriteStar } from "../../images";

const Chain = () => {
  const { currentId, config, currentOrder, setCurrentOrder } =
    useContext(StateContext);

  const [currentChain, setCurrentChain] = useState(0);
  const [fav, setFav] = useState(false);

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChain />

      {config !== null && config.length >= 2 ? (
        <>
          {config.map((item) => {
            if (item.currentOrder === null) {
              return null;
            } else {
              return (
                <>
                  <div className="h-[30px] bg-green w-[2px] mx-auto" />

                  <div className="w-[190px] h-[93px] border border-2 border-green rounded-15 bg-white p-[15px] flex justify-between">
                    <div className="w-max h-full">
                      <p className="font-bold text-14 leading-20 text-gray">
                        {item.currentOrder.trade_user.name}
                      </p>
                      <div className="w-max h-max flex">
                        <p className="text-green text-10 leading-14 font-bold w-max h-max my-auto mr-[5px]">
                          {item.currentOrder.type === 2 ? "Buy" : "Sell"}
                        </p>
                        <p className="font-normal text-10 leading-14 w-max h-max my-auto">
                          {item.currentOrder.price}
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
                        className="w-[20px] h-[20px] border border-1 border-gray rounded-6 bg-main flex"
                      >
                        <img
                          src={close}
                          alt="cls"
                          className="w-[12px] h-[12px] m-auto"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.log("delete chain click")}
                        className="w-[20px] h-[20px] border border-1 border-gray rounded-6 bg-main flex mt-[15px]"
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
      ) : null}

      <Profit />
    </div>
  );
};

export default Chain;
