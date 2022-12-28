import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";
import { getOrders } from "../../data/Requests";

const PaymentDropdown = ({ payment, setCurrentPayment }) => {
  const {
    mode,
    currentAmount,
    currentFiat,
    currentCrypto,
    currentPayment,
    setCurrentOrders,
  } = useContext(StateContext);

  const [defaultPayment, setDefaultPayment] = useState("Bank...");
  const [activePayment, setActivePayment] = useState(false);
  const [usersPayment, setUsersPayment] = useState(null);

  function handleChangeCurrentValue(anything, setAnything, value) {
    let arr = anything;
    let ind = null;

    if (arr !== null) {
      arr.map((item, index) => {
        // const found = arr.includes(value.id);
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
    if (currentPayment !== null) {
      setActivePayment(false);
      // setUsersPayment(currentPayment);
    }
  }, [currentPayment]);

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Payment
      </h2>

      <div
        className={`w-[250px] h-full relative my-auto 
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
          className={`flex h-full w-[250px] justify-between text-lightGray rounded-0 text-14 leading-20 font-normal pr-[12px] pl-[6px]
               ${
                 activePayment &&
                 "rounded-b-0  border border-1 border-gray rounded-t-6"
               }  
               ${!activePayment && "rounded-6"}
               `}
        >
          <div className="w-max flex flex-wrap my-auto rounded-0 text-14 leading-14 font-normal mr-[2px]">
            {payment !== null ? (
              usersPayment === null ? (
                <p className="w-max h-max my-auto text-lightGray">
                  {defaultPayment}
                </p>
              ) : (
                usersPayment.map((item) => (
                  <div
                    className={`w-max h-max px-[1px] flex py-[1px] rounded-4 border border-1`}
                    style={{ borderColor: item.color }}
                    key={item.id}
                  >
                    <p
                      className={`w-max max-h-[14px] my-auto text-10`}
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))
              )
            ) : (
              <p className="w-max h-max my-auto">First enter fiat and crypto</p>
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
            {payment.map((item, index) => (
              <div className="w-full h-max flex justify-between">
                <button
                  key={item.id}
                  type="button"
                  className="w-max h-max my-[6px] flex justify-around"
                  onClick={() => {
                    handleChangeCurrentValue(
                      usersPayment,
                      setUsersPayment,
                      item
                    );
                  }}
                >
                  <p className="w-max h-max text-gray test-14 font-normal my-auto">
                    {item.name}
                  </p>
                  <input type="checkbox" className="" value={item} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDropdown;
