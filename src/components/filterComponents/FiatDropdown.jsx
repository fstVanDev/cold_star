import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

const FiatDropdown = () => {
  const { fiat, setCurrentFiat } = useContext(StateContext);

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

  return (
    <div className="w-max h-full flex ">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Fiat
      </h2>

      <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6 relative my-auto mt-[10px]">
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
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6  relative">
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
