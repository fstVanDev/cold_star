import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

const CryptoDrowdown = () => {
  const { crypto, setCurrentCrypto, currentCrypto, config, currentId } =
    useContext(StateContext);

  const [defaultCrypto, setDefaultCrypto] = useState("Enter...");
  const [activeCrypto, setActiveCrypto] = useState(false);
  const [cryptoValue, setCryptoValue] = useState("");

  useEffect(() => {
    if (crypto !== null) {
      setDefaultCrypto("Enter...");
      setCryptoValue("");
      setActiveCrypto(false);
    }
  }, [crypto]);

  useEffect(() => {
    if (currentCrypto === null) {
      if (config !== null) {
        if (config.length > 0) {
          if (config[currentId].crypto !== null) {
            setCurrentCrypto(config[currentId].crypto);

            console.log("возврат");
          } else {
            setCurrentCrypto(null);
            console.log("дефолт");
          }
        }
      } else {
        setDefaultCrypto("Enter...");
        setCryptoValue("");
        setActiveCrypto(false);
      }
    }
  }, [currentCrypto]);

  return (
    <div className="w-max h-full flex my-auto">
      <h2 className="w-max h-max my-auto text-12 leading-16 font-normal text-lightGray mr-[15px]">
        Asset
      </h2>

      <div
        className={`w-[120px] h-[40px] border border-1 border-gray ${
          activeCrypto
            ? "rounded-b-0 rounded-t-6 border-r border-r-1 border-l border-l-1 border-r-gray border-l-gray border-t border-t-1 border-t-gray"
            : "rounded-6 border border-1 border-gray "
        } my-auto`}
      >
        <button
          type="button"
          onClick={
            crypto.length > 0 ? () => setActiveCrypto(!activeCrypto) : null
          }
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]`}
          //   ${
          //    activeCrypto && "rounded-b-0 border-b border-b-1 border-b-gray"
          //  }
          //  ${!activeCrypto && "rounded-6"}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            {crypto.length > 0 ? defaultCrypto : "Load..."}
          </p>
          {crypto.length > 0 ? (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          ) : null}
        </button>

        {activeCrypto && (
          <div className="w-full h-max bg-white rounded-b-6 border border-1 border-1-gray relative">
            {crypto.map((item) => (
              <div key={item.code}>
                {cryptoValue.length === 0 ? (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => {
                      console.log(item, "currentCrypto");
                      setCurrentCrypto(item);
                      setDefaultCrypto(item.name);
                      setCryptoValue("");
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
                        key={item.code}
                        onClick={() => {
                          console.log(item, "currentCrypto");
                          setCurrentCrypto(item);
                          setDefaultCrypto(item.name);
                          setCryptoValue("");
                          setActiveCrypto(false);
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

export default CryptoDrowdown;
