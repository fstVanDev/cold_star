import React from "react";

const Amount = ({ currentAmount, setCurrentAmount }) => {
  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Amount
      </h2>
      <input
        type="text"
        className="min-h-[40px] w-[120px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder="Enter amount"
        value={currentAmount}
        onChange={(e) => {
          setCurrentAmount(Number(e.target.value));
          console.log(Number(e.target.value), "currentAmount");
        }}
      />
    </div>
  );
};

export default Amount;