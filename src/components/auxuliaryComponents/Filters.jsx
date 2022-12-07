import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

import FiatDropdown from "./filterComponents/FiatDropdown";

const Filters = () => {
  const {
    userAmount,
    setUserAmount,
    fiat,
    crypto,
    currentFiat,
    currentCrypto,
    setCurrentCrypto,
    setCurrentFiat,
    mode,
    setMode,
    trade,
    setTrade,
    currentTrade,
    setCurrentTrade,
  } = useContext(StateContext);
  const [defaultFiat, setDefaultFiat] = useState("USD...");
  const [defaultCrypto, setDefaultCrypto] = useState("USDT...");
  const [defaultPayment, setDefaultPayment] = useState("Payment...");
  const [activeFiat, setActiveFiat] = useState(false);
  const [activeCrypto, setActiveCrypto] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [fiatValue, setFiatValue] = useState("");
  const [cryptoValue, setCryptoValue] = useState("");
  const [paymentValue, setPaymentValue] = useState("");

  const [activeMode, setActiveMode] = useState(true);

  function handleChangeCurrentValue(setAnything, value) {
    const arr = [];
    arr.push(value);
    setAnything(arr);
  }

  return (
    <div className="w-full h-max py-[30px]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        {/* Mode  */}
        <div className="w-max h-full flex">
          <div className="w-[120px] h-max h-[32px] border border-1 border-gray rounded-6 my-auto flex justify-between">
            <button
              type="button"
              onClick={() => setActiveMode(true)}
              className={`w-1/2 h-full border border-1 ${
                activeMode ? `bg-green border-green` : "border-none bg-inferit"
              } rounded-6 text-center flex my-auto`}
            >
              <p
                className={`${
                  activeMode ? "text-white" : "text-gray"
                } text-14 font-normal m-auto`}
              >
                Buy
              </p>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode(false)}
              className={`w-1/2 h-full border border-1 ${
                !activeMode
                  ? `bg-orange border-orange`
                  : "border-none bg-inferit"
              } rounded-6 text-center flex my-auto`}
            >
              <p
                className={` ${
                  !activeMode ? "text-white" : "text-gray"
                } text-14 font-normal m-auto`}
              >
                Sell
              </p>
            </button>
          </div>
        </div>

        {/* Amount */}
        <div className="w-max h-full flex">
          <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
            Amount
          </h2>
          <input
            type="text"
            className="min-h-[40px] w-[120px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
            placeholder="Enter amount"
            value={userAmount}
            onChange={(e) => {
              setUserAmount(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>

        {/* Fiat */}
        <FiatDropdown />

        {/* Crypto */}
        {/* <div className="w-max h-full flex">
          <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
            Crypto
          </h2>
          <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6">
            <button
              type="button"
              onClick={() => setActiveCrypto(!activeCrypto)}
              className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeFiat && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeFiat && "rounded-6"}
               `}
            >
              <p className="w-max h-max text-lightGray text-14 font-normal my-auto">
                {crypto.length > 0
                  ? defaultCrypto === "USDT..."
                    ? defaultCrypto
                    : currentCrypto.length > 0
                    ? currentCrypto[currentCrypto.length - 1].name
                    : currentCrypto[0].name
                  : "Load..."}
              </p>
              <img
                src={chevronFilter}
                alt="chvrn"
                className="w-[16px] h-[16px] my-auto"
              />
            </button>

            {activeCrypto && (
              <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px]">
                <input
                  type="text"
                  placeholder="Enter fiat"
                  value={cryptoValue}
                  onChange={(e) => {
                    setCryptoValue(e.target.value.toUpperCase());
                    console.log(e.target.value.toUpperCase(), "cryptoValue");
                  }}
                  className="h-[32px] border mx-auto my-[10px] w-[98px] pl-[6px] rounded-6 font-normal text-14 text-lightGray focus:ring-0 focus:outline-none"
                />
                {crypto.map((item) => (
                  <>
                    {cryptoValue.length === 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          handleChangeCurrentValue(setCurrentCrypto, item);
                          setDefaultCrypto("");
                          setActiveCrypto(false);
                        }}
                        className="w-full h-max text-gray test-14 font-normal my-[10px]"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <>
                        {item.name.startsWith(cryptoValue) === true ? (
                          <button
                            type="button"
                            onClick={() => {
                              handleChangeCurrentValue(setCurrentCrypto, item);
                              setDefaultCrypto("");
                              setActiveCrypto(false);
                            }}
                            className="w-full h-max text-gray test-14 font-normal my-[10px] "
                          >
                            {item.name}
                          </button>
                        ) : null}
                      </>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
        </div> */}

        {/* Payment */}
        {/* <div className="w-max h-full flex">
          <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
            Payment
          </h2>
          <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6">
            <button
              type="button"
              onClick={() => setActivePayment(!activePayment)}
              className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activePayment &&
                 "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activePayment && "rounded-6"}
               `}
            >
              <p className="w-max h-max text-lightGray text-14 font-normal my-auto">
                {trade.length > 0
                  ? defaultPayment === "USD..."
                    ? defaultPayment
                    : currentTrade.length > 0
                    ? currentTrade[currentTrade.length - 1].name
                    : currentTrade[0].name
                  : "Payment..."}
              </p>
              <img
                src={chevronFilter}
                alt="chvrn"
                className="w-[16px] h-[16px] my-auto"
              />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Filters;
