import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { isExternalModule, isTemplateExpression } from "typescript";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

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
  } = useContext(StateContext);
  const [defaultFiat, setDefaultFiat] = useState("USD...");
  const [activeFiat, setActiveFiat] = useState(false);
  const [fiatValue, setFiatValue] = useState("");

  const array = [
    { name: "KZT", continent: "Asia" },
    { name: "USDT", continent: "South America" },
    { name: "BUSD", continent: "Africa" },
    { name: "DAPS", continent: "North America" },
    { name: "KGS", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  useEffect(() => {
    console.log(fiat, "fiat");
  }, [fiat]);

  useEffect(() => {
    console.log(currentFiat, "currentFiat");
  }, [currentFiat]);

  return (
    <div className="w-full h-max py-[30px]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        {/* Amount */}
        <div className="w-max h-full flex">
          <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
            Amount
          </h2>
          <input
            type="text"
            className="h-full w-[120px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
            placeholder="Enter amount"
            value={userAmount}
            onChange={(e) => {
              setUserAmount(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>

        {/* Fiat */}
        <div className="w-max h-full flex">
          <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
            Fiat
          </h2>
          <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6">
            <button
              type="button"
              onClick={() => setActiveFiat(!activeFiat)}
              className={`flex justify-between h-[40px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeFiat && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeFiat && "rounded-6"}
               `}
            >
              <p className="w-max h-max text-lightGray text-14 font-normal my-auto">
                {fiat.length > 0
                  ? defaultFiat === "USD..."
                    ? defaultFiat
                    : currentFiat.length > 0
                    ? currentFiat[currentFiat.length - 1].name
                    : currentFiat[0].name
                  : "Load..."}
              </p>
              <img
                src={chevronFilter}
                alt="chvrn"
                className="w-[16px] h-[16px] my-auto"
              />
            </button>

            {activeFiat && (
              <div className="w-full grid h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px]">
                <input
                  type="text"
                  placeholder="Enter fiat"
                  value={fiatValue}
                  onChange={(e) => {
                    setFiatValue(e.target.value.toUpperCase());
                    console.log(e.target.value.toUpperCase(), "fiatValue");
                  }}
                  className="h-[32px] border mx-auto my-[10px] w-[98px] pl-[6px] rounded-6 font-normal text-14 text-lightGray focus:ring-0 focus:outline-none"
                />
                {fiat.map((item) => (
                  <>
                    {fiatValue.length === 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentFiat(currentFiat.push(item));
                          setDefaultFiat("");
                        }}
                        className="w-full h-max text-gray test-14 font-normal my-[10px]"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <>
                        {item.name.startsWith(fiatValue) === true ? (
                          <button
                            type="button"
                            onClick={() => {
                              setCurrentFiat(currentFiat.push(item));
                              setDefaultFiat("");
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
        </div>
      </div>
    </div>
  );
};

export default Filters;
