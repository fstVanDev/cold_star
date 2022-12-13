import React from "react";

const Mode = ({ mode, setMode }) => {
  return (
    <div className="w-max h-full flex">
      <div className="w-[120px] h-max h-[32px] border border-1 border-gray rounded-6 my-auto flex justify-between">
        <button
          type="button"
          onClick={() => {
            console.log("buy mode-true-2");
            setMode(true);
          }}
          className={`w-1/2 h-full border border-1 ${
            mode ? `bg-green border-green` : "border-none bg-inferit"
          } rounded-6 text-center flex my-auto`}
        >
          <p
            className={`${
              mode ? "text-white" : "text-gray"
            } text-14 font-normal m-auto`}
          >
            Buy
          </p>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("sell mode-false-1");
            setMode(false);
          }}
          className={`w-1/2 h-full border border-1 ${
            !mode ? `bg-orange border-orange` : "border-none bg-inferit"
          } rounded-6 text-center flex my-auto`}
        >
          <p
            className={` ${
              !mode ? "text-white" : "text-gray"
            } text-14 font-normal m-auto`}
          >
            Sell
          </p>
        </button>
      </div>
    </div>
  );
};

export default Mode;
