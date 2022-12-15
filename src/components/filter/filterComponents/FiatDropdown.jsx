import React, { useState } from "react";
import { chevronFilter } from "../../../images";

const FiatDropdown = ({ fiat, setCurrentFiat }) => {
  const [defaultFiat, setDefaultFiat] = useState("USD...");
  const [activeFiat, setActiveFiat] = useState(false);
  const [fiatValue, setFiatValue] = useState("");
  const [usersFiat, setUsersFiat] = useState(Array);

  function handleChangeCurrentValue(anything, setAnything, value) {
    const arr = anything;
    arr.push(value);
    setAnything(arr);

    console.log(arr, "usersFiat, only single-object in currentFiat");
  }

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Fiat
      </h2>

      <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6 relative">
        <button
          type="button"
          onClick={fiat.length > 0 ? () => setActiveFiat(!activeFiat) : null}
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeFiat && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeFiat && "rounded-6"}
               `}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            {fiat.length > 0
              ? defaultFiat === "USD..."
                ? defaultFiat
                : usersFiat.length > 0
                ? usersFiat[usersFiat.length - 1].name
                : usersFiat[0].name
              : "Load..."}
          </p>
          {fiat.length > 0 ? (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          ) : null}
        </button>

        {activeFiat && (
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px] relative">
            <input
              type="text"
              placeholder="Search..."
              value={fiatValue}
              onChange={(e) => {
                setFiatValue(e.target.value.toUpperCase());
              }}
              className="h-[32px] border mx-auto my-[10px] w-[98px] pl-[6px] rounded-6 font-normal text-14 text-lightGray focus:ring-0 focus:outline-none"
            />
            {fiat.map((item) => (
              <>
                {fiatValue.length === 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentFiat(item);

                      handleChangeCurrentValue(usersFiat, setUsersFiat, item);
                      setDefaultFiat("");
                      setFiatValue("");
                      setActiveFiat(false);
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
                          setCurrentFiat(item);

                          handleChangeCurrentValue(
                            usersFiat,
                            setUsersFiat,
                            item
                          );
                          setDefaultFiat("");
                          setFiatValue("");
                          setActiveFiat(false);
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
  );
};

export default FiatDropdown;
