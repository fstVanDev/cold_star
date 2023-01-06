import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";
import { getOrders } from "../../data/Requests";

const PaymentDropdown = () => {
  const {
    mode,
    currentAmount,
    currentFiat,
    currentCrypto,
    currentPayment,
    setCurrentOrders,
    payment,
    config,
    currentId,
    setCurrentPayment,
  } = useContext(StateContext);

  const [defaultPayment, setDefaultPayment] = useState("Bank...");
  const [activePayment, setActivePayment] = useState(false);
  const [usersPayment, setUsersPayment] = useState(null);

  function handleChangeCurrentValue(anything, setAnything, value) {
    let arr = anything;
    let ind = null;

    if (arr !== null) {
      arr.map((item, index) => {
        if (item.id === value.id) {
          ind = index;
        }
      });

      if (ind === null) {
        arr.push(value);
        setAnything(arr);
        setCurrentPayment(arr);
        console.log(arr, "currentPayment");
        getOrders(
          mode,
          currentAmount,
          currentFiat,
          currentCrypto,
          currentPayment,
          setCurrentOrders
        );
      } else {
        arr.splice(ind, 1);
        setAnything(arr);
        setCurrentPayment(arr);
        getOrders(
          mode,
          currentAmount,
          currentFiat,
          currentCrypto,
          currentPayment,
          setCurrentOrders
        );
        console.log(arr, "currentPayment");
      }
    } else {
      arr = [];
      arr.push(value);
      setAnything(arr);
      setActivePayment(true);
      setCurrentPayment(arr);
      console.log(arr, "currentPayment");
    }
  }

  useEffect(() => {
    if (payment !== null) {
      setCurrentPayment(null);
      setUsersPayment(null);
    }
  }, [payment]);

  useEffect(() => {
    // if (currentPayment !== null) {
    //   setActivePayment(false);
    // }
    // if (currentPayment === null) {
    //   if (config !== null) {
    //     if (config.length > 0) {
    //       if (config[currentId].payments !== null) {
    //         let arr;
    //         setCurrentPayment(config[currentId].payments);
    //         arr = config[currentId].payments;
    //         setUsersPayment(arr);
    //         console.log("возврат");
    //       } else {
    //         setCurrentPayment(null);
    //         console.log("дефолт");
    //       }
    //     }
    //   } else {
    //     setDefaultPayment("Bank...");
    //     setUsersPayment(null);
    //     setActivePayment(false);
    //   }
    // }
  }, [currentPayment]);

  return (
    <div className="w-max h-[40px] flex my-auto">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Payment
      </h2>

      <div
        className={`w-[140px] h-[40px] relative my-auto 
               ${activePayment && "rounded-t-6"}  
               ${!activePayment && "rounded-6 border border-1 border-gray"}
      `}
      >
        <button
          type="button"
          onClick={() => {
            if (currentCrypto !== null && currentFiat !== null) {
              setActivePayment(!activePayment);
            }
          }}
          className={`flex h-full w-[140px] justify-between text-lightGray rounded-0 text-14 leading-20 font-normal pr-[12px] pl-[6px]
               ${
                 activePayment &&
                 "rounded-b-0  border border-1 border-gray rounded-t-6"
               }  
               ${!activePayment && "rounded-6"}
               `}
        >
          <div className="w-max flex flex-wrap my-auto rounded-0 text-14 leading-14 font-normal mr-[2px]">
            {payment !== null ? (
              usersPayment === null || usersPayment === undefined ? (
                <p className="w-max h-max my-auto text-lightGray">
                  {defaultPayment}
                </p>
              ) : (
                <p className="text-14 leading-20 font-normal text-lightGray w-max h-max my-auto">
                  {usersPayment !== null && usersPayment.length >= 1
                    ? usersPayment[0].name + "..."
                    : usersPayment[0].name}
                </p>
              )
            ) : (
              <p className="w-max h-max my-auto text-14 leading-20 font-normal">
                ...
              </p>
            )}
          </div>

          {payment !== null ? (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          ) : null}
        </button>
        {activePayment && (
          <div className="w-full h-[180px] overflow-scroll bg-white border border-1 border-t-0 border-gray rounded-b-6 ">
            {usersPayment !== null && usersPayment.length > 0 && (
              <div className="border-b border-b-1 border-b-gray pb-[5px] w-full h-max">
                {usersPayment.map((item, index) => (
                  <div
                    className="w-full h-max flex justify-around my-[20px] px-[8px]"
                    key={index}
                  >
                    <label
                      for={index}
                      className="w-[160px] h-max flex flex-wrap text-gray test-14 font-normal my-auto leading-14 text-left"
                    >
                      {item.name}
                    </label>
                    <input
                      type="checkbox"
                      className="my-auto"
                      checked
                      id={index}
                      onClick={() => {
                        if (usersPayment.length > 1) {
                          var arr = usersPayment;
                          arr.splice(index, 1);
                          setUsersPayment(arr);
                        } else {
                          setUsersPayment([]);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            {payment.map((item) => (
              <button
                type="button"
                className="w-full h-max flex justify-around my-[12px] pl-[8px]"
                onClick={() =>
                  handleChangeCurrentValue(usersPayment, setUsersPayment, item)
                }
              >
                <p className="w-[160px] h-max flex flex-wrap text-gray test-14 font-normal my-auto leading-14 text-left">
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDropdown;
