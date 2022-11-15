import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import MainModal from "../AuxiliaryComponents/MainModal";
import Dropdown from "../AuxiliaryComponents/Dropdown";
import { chevron, redStatus, blueStatus } from "../../images";
import { getTradeMethods, getOrders } from "../../data/Requests";

const FilterModal = () => {
  const {
    filterView,
    setFilterView,
    fiatArray,
    cryptoArray,
    modeFirst,
    setModeFirst,
    modeSecond,
    setModeSecond,
    cryptoIdSecond,
    setCryptoIdSecond,
    tradeFirstArray,
    tradeIdFirst,
    settradeIdFirst,
    fiatIdSecond,
    setFiatIdSecond,
    tradeIdSecond,
    setTradeIdSecond,
    setTradeFirstArray,
    tradeSecondArray,
    setTradeSecondArray,
    setfiatIdFirst,
    cryptoIdFirst,
    setcryptoIdFirst,
    setOrdersArraySecond,
    setOrdersArrayFirst,
    amountFirst,
    setAmountFirst,
    amountSecond,
    setAmountSecond,
    fiatIdFirst,
    setFiatRateFirst,
    currencies,
    setFiatRateSecond,
  } = useContext(StateContext);

  const [first, setFirst] = useState(false); // true - виден блок конфигурации, false - скрыть блок
  const [second, setSecond] = useState(false); // true - виден блок конфигурации, false - скрыть блок

  function toGetOrders() {
    if (tradeIdFirst.length !== 0) {
      getOrders(
        modeFirst,
        fiatIdFirst,
        cryptoIdFirst,
        tradeIdFirst,
        setOrdersArrayFirst
      );
    }
    if (tradeIdSecond.length !== 0) {
      getOrders(
        modeSecond,
        fiatIdSecond,
        cryptoIdSecond,
        tradeIdSecond,
        setOrdersArraySecond
      );
    }

    setFilterView(false);
  }

  useEffect(() => {
    if (fiatIdFirst !== null && cryptoIdFirst !== null) {
      getTradeMethods(
        modeFirst,
        fiatIdFirst,
        cryptoIdFirst,
        setTradeFirstArray
      );

      const item = currencies[fiatIdFirst - 1].rates.rate;

      if (item !== null || item !== undefined) {
        setFiatRateFirst(item);
        console.log(item, "first");
      }
    }
  }, [fiatIdFirst, cryptoIdFirst]);

  useEffect(() => {
    if (fiatIdSecond !== null && cryptoIdSecond !== null) {
      getTradeMethods(
        modeSecond,
        fiatIdSecond,
        cryptoIdSecond,
        setTradeSecondArray
      );

      const item = currencies[fiatIdSecond - 1].rates.rate;

      if (item !== null || item !== undefined) {
        setFiatRateSecond(item);
        console.log(item, "second");
      }
    }
  }, [fiatIdSecond, cryptoIdSecond]);

  return (
    <MainModal visible={filterView} onClose={() => setFilterView(false)}>
      <div className="grid bg-inherit h-max mx-auto h-max 2xl:w-[850px] 2xl:rounded-10 ">
        <div className="flex bg-main w-full rounded-10 px-[30px] justify-center mb-[15px] py-[12px] border border-1 border-gray">
          <p className="w-max h-max mx-auto text-light-blue 2xl:text-26 font-bold">
            Filter
          </p>
        </div>

        <div className="grid bg-main w-full rounded-10 justify-center py-[12px] border border-1 border-gray">
          <div
            className={
              first === false
                ? "mb-[24px] flex w-[850px] h-max"
                : "flex w-[850px] h-max mb-[24px]"
            }
          >
            <div
              className={
                first === false
                  ? "flex w-full h-max"
                  : "flex w-full h-max border-b border-b-1 border-b-blue "
              }
            >
              <button
                type="button"
                onClick={() => setFirst(!first)}
                className={
                  first === false
                    ? "text-white flex w-full justify-center mb-[12px] hover:text-light-blue  mx-auto text-center text-22 my-auto"
                    : "text-light-blue flex w-full justify-center mb-[12px] mx-auto text-center text-22 my-auto"
                }
              >
                <p>Create filter</p>
                <img
                  src={chevron}
                  alt="chevron"
                  className={
                    first === false
                      ? "w-[18px] h-[18px] my-auto ml-[12px]"
                      : "rotate-180 w-[18px] h-[18px] my-auto ml-[12px]"
                  }
                />
              </button>
            </div>
          </div>
          {first === true ? (
            <div className="grid h-max w-full px-[15px] mb-[36px]">
              <div className="rounded-10 w-full h-max bg-secondary px-[15px] py-[12px]">
                <div className="bg-main grid w-full h-max rounded-10 px-[48px] py-[24px]">
                  <div className="flex w-max h-[42px] mb-[10px] border border-1 border-secondary rounded-6 px-[2px] mx-auto">
                    <button
                      type="button"
                      onClick={() => setModeFirst(2)}
                      className={
                        modeFirst === 2
                          ? "bg-green w-max text-16 h-[32px] px-[22px] text-white font-main font-normalplus rounded-6 my-auto"
                          : "bg-inherit w-max text-16 h-[32px] px-[22px] text-white font-main font-normalplus my-auto"
                      }
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={() => setModeFirst(1)}
                      className={
                        modeFirst === 1
                          ? "bg-red w-max text-16 h-[33px] px-[22px] text-white font-main font-normalplus rounded-6 my-auto"
                          : "bg-inherit w-max text-16 h-[33px] px-[22px] text-white font-main font-normalplus my-auto"
                      }
                    >
                      Sell
                    </button>
                  </div>
                  <div className="flex w-full justify-around h-max">
                    <div>
                      <p className="text-white w-max h-max 2xl:mb-[8px] 2xl:text-16 font-normalplus">
                        Amount
                      </p>

                      <input
                        type="text"
                        value={amountFirst}
                        onChange={(e) => setAmountFirst(e.target.value)}
                        className="w-[100px] h-[38px] bg-secondary border border-1 border-light-blue 
                        focus:border-blue focus:ring-0 focus:outline-none text-white
                        rounded-6 text-16 font-normal px-[12px] py-[6px] 
                        "
                      />
                    </div>
                    {fiatArray === null ? (
                      <p className="text-white">Wait</p>
                    ) : (
                      <Dropdown
                        name={"Fiat"}
                        val={fiatIdFirst}
                        mainArray={fiatArray}
                        funct={setfiatIdFirst}
                        boo={false}
                      />
                    )}
                    {cryptoArray === null ? (
                      <p className="text-white">Wait</p>
                    ) : (
                      <Dropdown
                        name={"Crypto"}
                        val={cryptoIdFirst}
                        mainArray={cryptoArray}
                        funct={setcryptoIdFirst}
                        boo={false}
                      />
                    )}
                    {tradeFirstArray !== null ? (
                      <Dropdown
                        name={"Payment"}
                        val={tradeIdFirst}
                        mainArray={tradeFirstArray}
                        funct={settradeIdFirst}
                        boo={true}
                      />
                    ) : (
                      <div className="grid h-max w-max">
                        <p className="text-white w-max h-max mb-[8px] 2xl:text-16 font-normalplus">
                          Payment
                        </p>
                        <div className="w-[180px] h-[38px] bg-secondary rounded-6 flex justify-between">
                          <p className="text-16 font-normal text-[#808080] w-max h-max my-auto ml-[10px]">
                            Payment..
                          </p>
                          <div className="w-max h-max my-auto flex">
                            <div className="w-[1px] bg-white h-[20px] my-auto" />

                            <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="w-max h-max my-auto mx-[8px]"
                            >
                              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {tradeFirstArray === null ? (
                    <div className="w-max h-max flex  mt-[20px] py-[8px]">
                      <p className="text-14 font-normal text-white border-b border-b-1 border-b-red">
                        Request status:
                      </p>
                      <img
                        src={redStatus}
                        alt="status"
                        className="w-[20px] h-[20px] ml-[15px] my-auto"
                      />
                    </div>
                  ) : (
                    <div className="w-max h-max flex  mt-[20px] py-[8px]">
                      <p className="text-14 font-normal text-white border-b border-b-1 border-b-light-blue">
                        Request status:
                      </p>
                      <img
                        src={blueStatus}
                        alt="status"
                        className="w-[20px] h-[20px] ml-[15px] my-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          <div
            className={
              second === false
                ? "flex w-[850px] h-max"
                : "flex w-[850px] h-max mb-[24px]"
            }
          >
            <div
              className={
                second === false
                  ? "flex w-full h-max"
                  : "flex w-full h-max border-b border-b-1 border-b-blue "
              }
            >
              <button
                type="button"
                onClick={() => setSecond(!second)}
                className={
                  second === false
                    ? "text-white flex w-full justify-center mb-[12px] hover:text-light-blue  mx-auto text-center text-22 my-auto"
                    : "text-light-blue flex w-full justify-center mb-[12px] mx-auto text-center text-22 my-auto"
                }
              >
                <p>Create filter</p>
                <img
                  src={chevron}
                  alt="chevron"
                  className={
                    second === false
                      ? "w-[18px] h-[18px] my-auto ml-[12px]"
                      : "rotate-180 w-[18px] h-[18px] my-auto ml-[12px]"
                  }
                />
              </button>
            </div>
          </div>
          {second === true ? (
            <div className="grid h-max w-full px-[15px] mb-[36px]">
              <div className="rounded-10 w-full h-max bg-secondary px-[15px] py-[12px]">
                <div className="bg-main grid w-full h-max rounded-10 px-[48px] py-[24px]">
                  <div className="flex w-max h-[42px] mb-[10px] border border-1 border-secondary rounded-6 px-[2px] mx-auto">
                    <button
                      type="button"
                      onClick={() => setModeSecond(2)}
                      className={
                        modeSecond === 2
                          ? "bg-green w-max text-16 h-[32px] px-[22px] text-white font-main font-normalplus rounded-6 my-auto"
                          : "bg-inherit w-max text-16 h-[32px] px-[22px] text-white font-main font-normalplus my-auto"
                      }
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={() => setModeSecond(1)}
                      className={
                        modeSecond === 1
                          ? "bg-red w-max text-16 h-[33px] px-[22px] text-white font-main font-normalplus rounded-6 my-auto"
                          : "bg-inherit w-max text-16 h-[33px] px-[22px] text-white font-main font-normalplus my-auto"
                      }
                    >
                      Sell
                    </button>
                  </div>
                  <div className="flex w-full justify-between h-max">
                    <div>
                      <p className="text-white w-max h-max 2xl:mb-[8px] 2xl:text-16 font-normalplus">
                        Amount
                      </p>

                      <input
                        type="text"
                        value={amountSecond}
                        onChange={(e) => setAmountSecond(e.target.value)}
                        className="w-[100px] h-[38px] bg-secondary border border-1 border-light-blue 
                        focus:border-blue focus:ring-0 focus:outline-none text-white
                        rounded-6 text-16 font-normal px-[12px] py-[6px] 
                        "
                      />
                    </div>

                    {fiatArray === null ? (
                      <p className="text-white">Wait</p>
                    ) : (
                      <Dropdown
                        name={"Fiat"}
                        val={fiatIdSecond}
                        mainArray={fiatArray}
                        funct={setFiatIdSecond}
                        boo={false}
                      />
                    )}
                    {cryptoArray === null ? (
                      <p className="text-white">Wait</p>
                    ) : (
                      <Dropdown
                        name={"Crypto"}
                        val={cryptoIdSecond}
                        mainArray={cryptoArray}
                        funct={setCryptoIdSecond}
                        boo={false}
                      />
                    )}
                    {tradeSecondArray !== null ? (
                      <Dropdown
                        name={"Payment"}
                        val={tradeIdSecond}
                        mainArray={tradeSecondArray}
                        funct={setTradeIdSecond}
                        boo={true}
                      />
                    ) : (
                      <p className="text-white">Wait</p>

                      // <div className="grid h-max w-max">
                      //   <p className="text-white w-max h-max mb-[8px] 2xl:text-16 font-normalplus">
                      //     Payment
                      //   </p>
                      //   <div className="w-[180px] h-[38px] bg-secondary rounded-6 flex justify-between">
                      //     <p className="text-16 font-normal text-[#808080] w-max h-max my-auto ml-[10px]">
                      //       Payment..
                      //     </p>
                      //     <div className="w-max h-max my-auto flex">
                      //       <div className="w-[1px] bg-white h-[20px] my-auto" />

                      //       <svg
                      //         height="20"
                      //         width="20"
                      //         viewBox="0 0 20 20"
                      //         aria-hidden="true"
                      //         focusable="false"
                      //         className="w-max h-max my-auto mx-[8px]"
                      //       >
                      //         <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      //       </svg>
                      //     </div>
                      //   </div>
                      // </div>
                    )}
                  </div>

                  {tradeSecondArray === null ? (
                    <div className="w-max h-max flex  mt-[20px] py-[8px]">
                      <p className="text-14 font-normal text-white border-b border-b-1 border-b-red">
                        Request status:
                      </p>
                      <img
                        src={redStatus}
                        alt="status"
                        className="w-[20px] h-[20px] ml-[15px] my-auto"
                      />
                    </div>
                  ) : (
                    <div className="w-max h-max flex  mt-[20px] py-[8px]">
                      <p className="text-14 font-normal text-white border-b border-b-1 border-b-light-blue">
                        Request status:
                      </p>
                      <img
                        src={blueStatus}
                        alt="status"
                        className="w-[20px] h-[20px] ml-[15px] my-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex bg-main w-full rounded-10 px-[30px] justify-center mt-[15px] py-[12px] border border-1 border-gray">
          <button
            type="button"
            onClick={
              tradeSecondArray !== null && tradeFirstArray !== null
                ? () => toGetOrders()
                : null
            }
            className="flex items-center w-max my-auto py-2 px-3 text-16 font-normal bg-[#0c9aed] text-white rounded-6 bg-gray"
          >
            <p className="w-max h-max mx-auto whitespace-nowrap">Get Orders</p>
          </button>
          <button
            type="button"
            onClick={() => setFilterView(false)}
            className="flex items-center w-max my-auto ml-[30px] py-2 px-3 text-16 font-normalplus bg-inherit text-light-blue rounded-6 bg-gray"
          >
            <p className="w-max h-max mx-auto whitespace-nowrap">Cancel</p>
          </button>
        </div>
      </div>
    </MainModal>
  );
};

export default FilterModal;
