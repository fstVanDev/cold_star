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
  const [usersPayment, setUsersPayment] = useState(Array);

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
    setCurrentPayment(arr);
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

      <div>
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
            {currentPayment !== null ? (
              <>
                {currentPayment.length > 0 ? (
                  <div className="w-full h-max border-b border-b-1 border-b-green">
                    {currentPayment.map((item, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => {
                          removePaymentToConfig(item, index);
                          setActivePayment(false);
                        }}
                        className="max-w-[140px] w-max h-max my-[12px] flex break-words cursor-pointer"
                      >
                        <p className="max-w-[100px] w-max h-max text-left flex flex-wrap text-gray text-14 leading-14 font-normal">
                          {item.name}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : null}
              </>
            ) : null}

            {payment.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => {
                  addPaymentToConfig(item, index);
                  setActivePayment(false);
                }}
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
