import React, { useContext, useState } from "react";
import { StateContext } from "../../../context/StateProvider";
import { chevronFilter } from "../../../images";

const CryptoDrowdown = () => {
  const { crypto, currentCrypto, setCurrentCrypto } = useContext(StateContext);

  const [defaultCrypto, setDefaultCrypto] = useState("USDT...");
  const [activeCrypto, setActiveCrypto] = useState(false);
  const [cryptoValue, setCryptoValue] = useState("");
  const [usersCrypto, setUsersCrypto] = useState(Array);

  function handleChangeCurrentValue(anything, setAnything, value) {
    const arr = anything;
    arr.push(value);
    setAnything(arr);

    console.log(arr, "usersCrypto");
  }

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Crypto
      </h2>

      <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6">
        <button
          type="button"
          onClick={
            crypto.length > 0 ? () => setActiveCrypto(!activeCrypto) : null
          }
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeCrypto && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeCrypto && "rounded-6"}
               `}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            {crypto.length > 0
              ? defaultCrypto === "USDT..."
                ? defaultCrypto
                : usersCrypto.length > 0
                ? usersCrypto[usersCrypto.length - 1].name
                : usersCrypto[0].name
              : "Load..."}
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
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px]">
            <input
              type="text"
              placeholder="Search..."
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
                      handleChangeCurrentValue(
                        usersCrypto,
                        setUsersCrypto,
                        item
                      );
                      setCurrentCrypto(item);
                      console.log(item);
                      setDefaultCrypto("");
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
                        onClick={() => {
                          handleChangeCurrentValue(
                            usersCrypto,
                            setUsersCrypto,
                            item
                          );
                          setDefaultCrypto("");
                          setCurrentCrypto(item);
                          console.log(item);
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
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoDrowdown;
