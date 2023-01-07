import React, { useContext } from "react";
import { useEffect } from "react";
import { StateContext } from "../../context/StateProvider";

const Amount = () => {
  const { amount, setAmount, config, currentId } = useContext(StateContext);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <div className="w-max h-full flex my-auto">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Amount
      </h2>
      <input
        type="text"
        className="h-[40px] w-[100px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder={amount.length === 0 ? "" : amount}
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
          console.log(Number(e.target.value), "amount custom");
        }}
      />
    </div>
  );
};

export default Amount;
