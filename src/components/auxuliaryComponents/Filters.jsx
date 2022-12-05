import React, { useContext, useState } from "react";
import { isTemplateExpression } from "typescript";
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
  const [value, setValue] = useState("");

  const array = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
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
              className={`flex justify-around h-[40px] w-[120px] my-auto text-lightGray  rounded-0 text-14 leading-20 font-normal px-[8px]
               ${
                 activeFiat && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeFiat && "rounded-6"}
               `}
            >
              <p className="w-max h-max text-gray text-14 font-bold my-auto">
                {array.length > 0
                  ? defaultFiat === "USD..."
                    ? defaultFiat
                    : currentFiat.name
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
                  placeholder="Enter fiat..."
                  onChange={(e) => setValue(e.target.value)}
                  className="focus:ring-0 focus:outline-none w-full mt-[10px] rounded-6 h-[40px] px-[8px] border border-1 border-gray focus:border-green hover:border-green "
                />
                {array.map((item) => (
                  <>
                    {value.length === 0 ? (
                      <button>{item.name}</button>
                    ) : (
                      <>
                        {item.name.startsWith(value) === true ? (
                          <button>{item.name}</button>
                        ) : null}
                      </>
                    )}
                  </>
                ))}
              </div>
            )}

            {/* 
            {activeFiat && (
              <>
                {array.length > 0 ? (
                  <div className="w-full grid h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px]">
                    <input
                      type={"text"}
                      placeholder="Enter fiat..."
                      list=""
                      onChange={(e) => setValue(e.target.value)}
                      className="focus:ring-0 focus:outline-none w-full mt-[10px] rounded-6 h-[40px] px-[8px] border border-1 border-gray focus:border-green hover:border-green "
                    />
                    <datalist id="" className="h-[300px]">
                      {array.map((item) => (
                        <option
                          value={item.name}
                          className="w-full h-max py-[5px] hover:bg-green hover:text-white text-lightGray text-14 leading-20 font-bold"
                          onClick={() => {
                            setDefaultFiat(item.name);
                            setCurrentFiat(item);
                          }}
                        >
                          {item.name}
                        </option>
                      ))}
                    </datalist>
                  </div>
                ) : null}
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
