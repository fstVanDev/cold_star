import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import AddNewChain from "./AddNewChain";
import Profit from "./Profit";
import ClearAll from "./ClearAll";
import { close, star, favouriteStar, toBinance } from "../../images";

const Chain = () => {
  const {
    config,
    setConfig,
    currentId,
    setCurrentOrder,
    setCurrentFee,
    setCurrentId,
    setEditMode,
    globalId,
    setCurrentFiat,
    setCurrentCrypto,
    setCurrentPayment,
    setAmount,
    setMode,
    setOrders,
    setFiatRate,
    editMode,
    setGlobalId,
  } = useContext(StateContext);

  const [fav, setFav] = useState(false);
  const [about, setAbout] = useState(false);
  const [activeAbout, setActiveAbout] = useState(null);

  const removeObject = (index) => {
    console.log(index, config.length - 1, globalId, currentId);
    let arr = config;
    if (config.length === 1) {
      console.log("clean config when only one object");
      setCurrentFee(null);
      setCurrentOrder(null);
      arr[index].currentOrder = null;
      arr[index].currentFee = null;
      setConfig(arr);
      console.log(arr);
    }

    if (index !== config.length - 1) {
      console.log("55555");
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
                      <div
                        className="h-[30px] bg-secondary w-[2px] mx-auto"
                        key={index}
                      />

                      <div
                        className={`w-[190px] h-max border border-2 ${
                          currentId !== null && index === currentId
                            ? "border-green"
                            : "border-secondary"
                        }  rounded-15 bg-white p-[15px] grid`}
                        onClick={() => {
                          setCurrentId(index);
                          if (index === globalId) {
                            console.log(
                              "edit false",
                              "globalId => ",
                              globalId,
                              "currentId =>",
                              index
                            );
                            setEditMode(false);
                            setCurrentFiat(config[globalId].fiat);
                            setCurrentCrypto(config[globalId].crypto);
                            setCurrentPayment(config[globalId].payments);
                            setAmount(config[globalId].amount);
                            setMode(config[globalId].mode);
                            setFiatRate(config[globalId].fiatRate);
                            setOrders(config[globalId].orders);
                            setCurrentOrder(config[globalId].currentOrder);
                            setCurrentFee(config[globalId].currentFee);
                          } else {
                            // if (editMode === false) {
                            setEditMode(true);
                            console.log(
                              "editMode true",
                              "globalId => ",
                              globalId,
                              "currentId =>",
                              index
                            );
                            setCurrentFiat(config[index].fiat);
                            setFiatRate(config[index].fiatRate);
                            setCurrentCrypto(config[index].crypto);
                            setCurrentPayment(config[index].payments);
                            setAmount(config[index].amount);
                            setMode(config[index].mode);
                            setOrders(config[index].orders);
                            setCurrentOrder(config[index].currentOrder);
                            setCurrentFee(config[index].currentFee);
                            // }
                          }
                        }}
                      >
                        <div className="flex justify-between">
                          <div className="w-max h-full">
                            <p className="font-bold text-12 leading-14 text-gray">
                              {item.currentOrder.trade_user.name}
                            </p>
                            <div className="w-max h-max flex">
                              <p
                                className={`${
                                  item.currentOrder.type === 2
                                    ? "text-green"
                                    : "text-orange"
                                }  text-10 leading-14 font-bold w-max h-max my-auto mr-[5px]`}
                              >
                                {item.currentOrder.type === 2 ? "Buy" : "Sell"}
                              </p>
                              <p className="font-normal text-10 leading-14 w-max h-max my-auto">
                                {item.currentOrder.price}
                              </p>
                            </div>
                            <p
                              className={` ${
                                item.currentFee !== null
                                  ? Number(item.currentFee) > 0
                                    ? "text-green"
                                    : "text-orange"
                                  : ""
                              }  font-bold text-18 leading-24 w-max h-max mt-[5px]`}
                            >
                              {item.currentFee !== null ? item.currentFee : "-"}
                              %
                            </p>
                          </div>
                          {currentId !== null && index === currentId ? (
                            <div className="w-max h-max ml-auto ">
                              <button
                                type="button"
                                onClick={() => {
                                  // setIsClear(true);
                                  removeObject(index, setConfig);
                                }}
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
                          ) : null}
                        </div>

                        {currentId !== null && index === currentId ? (
                          <>
                            {about === false || activeAbout !== index ? (
                              <div className="w-full h-max grid mt-[10px]">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setAbout(!about);
                                    setActiveAbout(index);
                                  }}
                                  className="w-full h-[32px] rounded-6 border-green border border-1 bg-white flex justify-center"
                                >
                                  <p className="w-max h-max my-auto text-12 leading-16 font-normal text-green">
                                    About
                                  </p>
                                </button>
                                <a
                                  target="_blank"
                                  href={`https://p2p.binance.com/en/advertiserDetail?advertiserNo=${item.currentOrder.trade_user.external_id}`}
                                  className="mt-[10px] w-full h-[32px] rounded-6 border-green border border-1 bg-green flex justify-center"
                                >
                                  <p className="w-max h-max my-auto text-12 leading-16 font-normal text-white">
                                    To Binance
                                  </p>
                                  <img
                                    src={toBinance}
                                    alt="a"
                                    className="w-[12px] h-[12px] ml-[5px] my-auto"
                                  />
                                </a>
                              </div>
                            ) : (
                              <div className="w-full h-max mt-[10px] grid">
                                <div className="w-full h-[1px] border border-1 border-green"></div>

                                <div className="flex justify-between w-full h-max mt-[10px]">
                                  <div className="max-w-[130px] h-max grid">
                                    <p className="text-12 font-bold leading-14 text-green w-max h-max">
                                      Pair
                                    </p>
                                    <p className="text-12 font-normal text-gray leading-14 w-max h-max">
                                      {item.currentOrder.fiat.name} /{" "}
                                      {item.currentOrder.asset.name}
                                    </p>

                                    <p className="text-12 font-bold leading-14 text-green w-max h-max mt-[5px]">
                                      Available
                                    </p>
                                    <p className="text-12 font-normal text-gray leading-14 w-max h-max ">
                                      {item.currentOrder.amount}{" "}
                                      {item.currentOrder.asset.name}
                                    </p>

                                    <p className="text-12 font-bold leading-14 text-green w-max h-max mt-[5px]">
                                      Limit
                                    </p>
                                    <p className="text-12 font-normal text-gray leading-14 h-max max-w-[130px]">
                                      {item.currentOrder.min_trans_amount} -
                                      {item.currentOrder.max_trans_amount}{" "}
                                      {item.currentOrder.fiat.name}
                                    </p>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => setAbout(!about)}
                                    className="w-[20px] h-[20px] border border-1 border-gray rounded-6 bg-main flex"
                                  >
                                    <img
                                      src={close}
                                      alt="cls"
                                      className="w-[12px] h-[12px] m-auto"
                                    />
                                  </button>
                                </div>

                                <div className="w-full h-max flex flex-wrap mx-auto mt-[5px]">
                                  {item.currentOrder.trade_methods.map(
                                    (obj, index) => (
                                      <div
                                        className="border border-1 my-[2px] w-max h-max rounded-2 px-[5px] py-[1px] mx-[2px]"
                                        style={{ borderColor: `${obj.color}` }}
                                        key={index}
                                      >
                                        <p
                                          className="text-10 leading-12 w-max font-normal"
                                          style={{ color: `${obj.color}` }}
                                        >
                                          {obj.name}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </>
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
      {config !== null && <>{config.length >= 0 && <ClearAll />}</>}
    </div>
  );
};

export default Chain;
