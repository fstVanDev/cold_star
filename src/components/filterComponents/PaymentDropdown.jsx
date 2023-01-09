import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import { chevronFilter } from "../../images";

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

  const [activePayment, setActivePayment] = useState(false);
  const [usersPayment, setUsersPayment] = useState([]);

  const addPaymentToConfig = (item, index) => {
    let arr = usersPayment;
    let newArray = arr.filter((obj) => obj.id === item.id);

    if (newArray.length === 0) {
      arr.push(item);
    }

    setUsersPayment(arr);
    setCurrentPayment(arr);
  };

  const removePaymentToConfig = (item, index) => {
    let arr = usersPayment;

    arr.splice(index, 1);
    setUsersPayment(arr);
  };

  useEffect(() => {
    if (currentPayment !== null) {
      setUsersPayment(currentPayment);
    } else {
      setUsersPayment([]);
    }
  }, [currentPayment]);

  useEffect(() => {
    if (payment === null) {
      setActivePayment(false);
    }
  }, [payment]);

  return (
    <div className="w-max h-[40px] flex my-auto">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Payment
      </h2>

      <div className="">
        <div
          onClick={() => {
            if (payment !== null) {
              if (payment.length > 0) {
                setActivePayment(!activePayment);
              }
            }
          }}
          className={`w-[140px] h-[40px] px-[12px] relative my-auto ${
            activePayment === false
              ? "rounded-6 border border-1 border-gray"
              : "rounded-t-6 border border-b-none border-b-0 border-1 border-gray "
          } flex justify-between cursor-pointer`}
        >
          {usersPayment.length >= 0 && (
            <p className="text-14 leading-14 font-normal text-lightGray w-max h-max my-auto">
              {payment !== null
                ? usersPayment.length === 0
                  ? "Bank..."
                  : usersPayment[0].name + ".."
                : "..."}
            </p>
          )}

          {payment !== null && (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          )}
        </div>
        {activePayment === true && (
          <div className="w-[140px] h-[180px] px-[10px] border border-1 border-gray rounded-b-6 bg-white overflow-scroll relative">
            {usersPayment.length > 0 && (
              <div className="w-full h-max border-b border-b-1 border-b-green">
                {usersPayment.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => removePaymentToConfig(item, index)}
                    className="max-w-[140px] w-max h-max my-[12px] flex break-words cursor-pointer"
                  >
                    <p className="max-w-[100px] w-max h-max text-left flex flex-wrap text-gray text-14 leading-14 font-normal">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {payment.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => addPaymentToConfig(item, index)}
                className="max-w-[140px] w-max h-max my-[12px] flex break-words cursor-pointer"
              >
                <p className="max-w-[100px] w-max h-max text-left  flex flex-wrap text-gray text-14 leading-14 font-normal">
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

//  <div
//    className={`w-[140px] h-[40px] relative my-auto
//                ${activePayment && "rounded-t-6"}
//                ${!activePayment && "rounded-6 border border-1 border-gray"}
//       `}
//  >
//    <button
//      type="button"
//      onClick={() => {
//        if (currentCrypto !== null && currentFiat !== null) {
//          setActivePayment(!activePayment);
//        }
//      }}
//      className={`flex h-full w-[140px] justify-between text-lightGray rounded-0 text-14 leading-20 font-normal pr-[12px] pl-[6px]
//                ${
//                  activePayment &&
//                  "rounded-b-0  border border-1 border-gray rounded-t-6"
//                }
//                ${!activePayment && "rounded-6"}
//                `}
//    >
//      <div className="w-max flex flex-wrap my-auto rounded-0 text-14 leading-14 font-normal mr-[2px]">
//        {payment !== null ? (
//          usersPayment === null || usersPayment === undefined ? (
//            <p className="w-max h-max my-auto text-lightGray">
//              {defaultPayment}
//            </p>
//          ) : (
//            <p className="text-14 leading-20 font-normal text-lightGray w-max h-max my-auto">
//              {usersPayment !== null && usersPayment.length >= 1
//                ? usersPayment[0].name + "..."
//                : usersPayment[0].name}
//            </p>
//          )
//        ) : (
//          <p className="w-max h-max my-auto text-14 leading-20 font-normal">
//            ...
//          </p>
//        )}
//      </div>

//      {payment !== null ? (
//        <img
//          src={chevronFilter}
//          alt="chvrn"
//          className="w-[16px] h-[16px] my-auto"
//        />
//      ) : null}
//    </button>
//    {activePayment && (
//      <div className="w-full h-[180px] overflow-scroll bg-white border border-1 border-t-0 border-gray rounded-b-6 ">
//        {usersPayment !== null && usersPayment.length > 0 && (
//          <div className="border-b border-b-1 border-b-gray pb-[5px] w-full h-max">
//            {usersPayment.map((item, index) => (
//              <div
//                className="w-full h-max flex justify-around my-[20px] px-[8px]"
//                key={index}
//              >
//                <label
//                  htmlFor={index}
//                  className="w-[160px] h-max flex flex-wrap text-gray test-14 font-normal my-auto leading-14 text-left"
//                >
//                  {item.name}
//                </label>
//                <input
//                  type="checkbox"
//                  className="my-auto"
//                  checked
//                  id={index}
//                  onChange={() => {
//                    if (usersPayment.length > 1) {
//                      var arr = usersPayment;
//                      arr.splice(index, 1);
//                      setUsersPayment(arr);
//                    } else {
//                      setUsersPayment([]);
//                    }
//                  }}
//                />
//              </div>
//            ))}
//          </div>
//        )}
//        {payment.map((item, index) => (
//          <button
//            type="button"
//            className="w-full h-max flex justify-around my-[18px] pl-[8px]"
//            onClick={() =>
//              handleChangeCurrentValue(usersPayment, setUsersPayment, item)
//            }
//            key={index}
//          >
//            <p className="w-[160px] h-max flex flex-wrap text-gray text-14 font-normal my-auto leading-14 text-left">
//              {item.name}
//            </p>
//          </button>
//        ))}
//      </div>
//    )}
//  </div>;
