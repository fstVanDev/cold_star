import React, { useContext, useState } from "react";
import { StateContext } from "../../../context/StateProvider";
import { chevronFilter } from "../../../images";

const PaymentDropdown = () => {
  const { payment, currentPayment, setCurrentPayment } =
    useContext(StateContext);

  const [defaultPayment, setDefaultPayment] = useState("Bank...");
  const [activePayment, setActivePayment] = useState(false);
  const [usersPayment, setUsersPayment] = useState(Array);

  function handleChangeCurrentValue(anything, setAnything, value) {
    let arr = anything;
    arr.push(value);
    setAnything(arr);
    setCurrentPayment(arr);
    console.log(arr, "usersPayment, setCurrentPayment");
  }

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Payment
      </h2>

      <div className="w-[160px] h-max min-h-[40px] border border-1 border-gray rounded-6">
        <button
          type="button"
          onClick={() => {
            setActivePayment(!activePayment);
            console.log("active block payment", activePayment);
          }}
          className={`flex justify-between h-[38px] w-[160px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activePayment &&
                 "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activePayment && "rounded-6"}
               `}
        >
          <div className="w-max h-max  mx-auto font-normal my-auto flex overflow-x-auto text-12 leading-14 ">
            {payment !== null
              ? usersPayment.length === 0
                ? defaultPayment
                : usersPayment.map((item) => (
                    <p className="w-max h-max my-auto text-lightGray text-12 leading-14 mx-[5px]">{`${
                      item.name
                    },${" "}`}</p>
                  ))
              : "First enter fiat and crypto"}
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
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px]">
            {payment.map((item) => (
              <button
                type="button"
                className="w-full h-max my-[10px] flex justify-around"
                onClick={() => {
                  handleChangeCurrentValue(usersPayment, setUsersPayment, item);
                  console.log(usersPayment, "banks chossen user");
                  setDefaultPayment("");
                  //   setActivePayment(false);
                }}
              >
                <p className="w-full h-max text-gray test-14 font-normal my-auto">
                  {item.name}
                </p>
                {/* <input
                  type={"checkbox"}
                  checked={
                    usersPayment.length > 0
                      ? usersPayment.length === 1
                        ? item.id === usersPayment[0]
                          ? true
                          : false
                        : item.id === usersPayment[usersPayment.length - 1].id
                        ? true
                        : false
                      : false
                  }
                /> */}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDropdown;
