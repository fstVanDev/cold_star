import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

const FiatDropdown = () => {
  const { fiat, setCurrentFiat, currentFiat, config, currentId } =
    useContext(StateContext);

  const [defaultFiat, setDefaultFiat] = useState("Enter...");
  const [activeFiat, setActiveFiat] = useState(false);
  const [fiatValue, setFiatValue] = useState("");

  useEffect(() => {
    if (fiat !== null) {
      setDefaultFiat("Enter...");
      setFiatValue("");
      setActiveFiat(false);
    }
  }, [fiat]);

  // useEffect(() => {
  //   if (currentFiat === null) {
  //     if (config !== null) {
  //       if (config.length > 0) {
  //         if (config[currentId].fiat !== null) {
  //           setCurrentFiat(config[currentId].fiat);

  //           console.log("возврат");
  //         } else {
  //           setCurrentFiat(null);
  //           console.log("дефолт");
  //         }
  //       }
  //     } else {
  //       setDefaultFiat("Enter...");
  //       setFiatValue("");
  //       setActiveFiat(false);
  //     }
  //   }
  // }, [currentFiat]);

  useEffect(() => {
    console.log(currentFiat);

    if (currentFiat === null) {
      setDefaultFiat("Enter...");
      setFiatValue("");
      setActiveFiat(false);
    }
  }, [currentFiat]);

  return (
    <div className="w-max h-full flex ">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Fiat
      </h2>

      <div
        className={`w-[120px] h-[40px]  ${
          activeFiat
            ? "rounded-b-0 rounded-t-6 border-r border-r-1 border-l border-l-1 border-r-gray border-l-gray border-t border-t-1 border-t-gray"
            : "rounded-6 border border-1 border-gray"
        } relative my-auto`}
      >
        <button
          type="button"
          onClick={fiat.length > 0 ? () => setActiveFiat(!activeFiat) : null}
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]`}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            {fiat.length > 0 ? defaultFiat : "Load..."}
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
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 relative border border-1 border-gray">
            <div className="w-full h-max px-[10px]">
              <input
                type="text"
                placeholder="Search..."
                value={fiatValue}
                onChange={(e) => {
                  setFiatValue(e.target.value.toUpperCase());
                }}
                className="h-[32px] border mx-auto my-[10px] w-[98px] pl-[6px] rounded-6 font-normal text-14 text-lightGray focus:ring-0 focus:outline-none"
              />
            </div>
            {fiat.map((item) => (
              <div key={item.code}>
                {fiatValue.length === 0 ? (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => {
                      console.log(item, "currentFiat");
                      setCurrentFiat(item);
                      setDefaultFiat(item.name);
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
                        key={item.code}
                        onClick={() => {
                          console.log(item, "currentFiat");
                          setCurrentFiat(item);
                          setDefaultFiat(item.name);
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FiatDropdown;
