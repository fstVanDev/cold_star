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
    const arr = anything;
    arr.push(value);
    setAnything(arr);

    console.log(arr, "usersPayment");
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
          <p className="w-max h-max text-lightGray text-12 leading-14 mx-auto font-normal my-auto">
            {payment !== null
              ? usersPayment.length < 0
                ? defaultPayment
                : "Change methods..."
              : "First enter fiat and crypto"}
          </p>
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
                <input
                  type={"checkbox"}
                  checked={
                    usersPayment.length !== 0
                      ? usersPayment.length === 0
                        ? item.id === usersPayment[0]
                          ? true
                          : false
                        : item.id === usersPayment[usersPayment - 1].id
                        ? true
                        : false
                      : false
                  }
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDropdown;

{
  /* <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6">
        <button
          type="button"
          onClick={
            payment.length > 0 ? () => setActivePayment(!activePayment) : null
          }
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activePayment &&
                 "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activePayment && "rounded-6"}
               `}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 mx-auto font-normal my-auto">
            {payment.length > 0
              ? defaultPayment === "Bank..."
                ? defaultPayment
                : currentPayment.length > 0
                ? currentPayment[currentPayment.length - 1].name
                : currentPayment[0].name
              : "Enter fiat and crypto first..."}
          </p>
          {payment.length > 0 ? (
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
                onClick={() => {
                  handleChangeCurrentValue(setCurrentPayment, item);
                  setDefaultPayment("");
                  setActivePayment(false);
                }}
                className="w-full h-max text-gray test-14 font-normal my-[10px]"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>*/
}
