import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import AddNewChain from "./AddNewChain";
import Profit from "./Profit";
import ClearAll from "./ClearAll";
import { close, star, favouriteStar, toBinance } from "../../images";

const Chain = () => {
  const { config, setConfig, currentId, setCurrentOrder, setCurrentFee } =
    useContext(StateContext);

  const [fav, setFav] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const removeObject = (index, setConfig) => {
    if (config.length === 1) {
      console.log("clean config when only one object");
      // setConfig(null);
      setCurrentFee(null);
      setCurrentOrder(null);
    } else {
      let arr = config;
      // arr.splice(index, 1);
      let newArray = arr.filter((item) => item.id !== index);
      for (let i = 0; i < newArray.length; i++) {
        newArray[i].id = i;
      }
      console.log(newArray, "остаток после удаления");
      setConfig(newArray);
      setCurrentFee(null);
      setCurrentOrder(null);
    }
  };

  return (
    <div className="2xl:w-[190px] h-max">
      <AddNewChain />

      {config !== null ? (
        <>
          {config.length > 0 && (
            <>
              {config.map((item, index) => {
                if (item.currentOrder === null) {
                  return null;
                } else {
                  return (
                    <>
                      <div className="h-[30px] bg-gray w-[2px] mx-auto" />

                      <div
                        className={`w-[190px] h-[93px] border border-2 ${
                          currentId !== null && index === currentId
                            ? "border-green"
                            : index === config.length - 1
                            ? "border-green"
                            : "border-gray"
                        }  rounded-15 bg-white p-[15px] grid`}
                      >
                        <div className="flex justify-between">
                          <div className="w-max h-full">
                            <p className="font-bold text-12 leading-14 text-gray">
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
                              {item.currentFee !== null ? item.currentFee : "-"}
                              %
                            </p>
                          </div>
                          <div className="w-max h-max">
                            <button
                              type="button"
                              onClick={() => removeObject(index, setConfig)}
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
                              onClick={() => console.log("add to fav click")}
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

                        {currentId !== null && index === currentId ? (
                          <div class="w-full h-max grid mt-[10px]">
                            <button
                              type="button"
                              class="w-full h-[32px] rounded-6 border-green border border-1 bg-white flex justify-center"
                            >
                              <p class="w-max h-max my-auto text-12 leading-16 font-normal text-green">
                                About
                              </p>
                            </button>
                            <button
                              type="button"
                              class="mt-[10px] w-full h-[32px] rounded-6 border-green border border-1 bg-green flex justify-center"
                            >
                              <p class="w-max h-max my-auto text-12 leading-16 font-normal text-white">
                                To Binance
                              </p>
                              <img
                                src={toBinance}
                                alt="a"
                                className="w-[16px] h-[16px] ml-[10px] my-auto"
                              />
                            </button>
                          </div>
                        ) : index === config.length - 1 ? (
                          <div class="w-full h-max grid mt-[10px]">
                            <button
                              type="button"
                              class="w-full h-[32px] rounded-6 border-green border border-1 bg-white flex justify-center"
                            >
                              <p class="w-max h-max my-auto text-12 leading-16 font-normal text-green">
                                About
                              </p>
                            </button>
                            <button
                              type="button"
                              class="mt-[10px] w-full h-[32px] rounded-6 border-green border border-1 bg-green flex justify-center"
                            >
                              <p class="w-max h-max my-auto text-12 leading-16 font-normal text-white">
                                To Binance
                              </p>
                              <img
                                src={toBinance}
                                alt="a"
                                className="w-[16px] h-[16px] ml-[10px] my-auto"
                              />
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </>
                  );
                }
              })}
            </>
          )}
        </>
      ) : null}

      <Profit />
      {config !== null && <>{config.length >= 2 && <ClearAll />}</>}
    </div>
  );
};

export default Chain;
