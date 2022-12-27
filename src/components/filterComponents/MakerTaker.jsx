import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const MakerTaker = () => {
  const { makerProcent, setMakerProcent } = useContext(StateContext);

  return (
    <div className="w-max h-full flex">
      <div>
        <h2 className="w-max h-max text-center my-auto text-12 leading-16 font-normal text-lightGray mr-[15px]">
          Maker/Taker %
        </h2>
        <p className="w-max h-max text-center my-auto text-10 leading-16 font-normal text-lightGray">
          {" "}
          (0.1% default)
        </p>
      </div>

      <input
        type="number"
        className="min-h-[40px] w-[140px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder="0.1%"
        value={makerProcent}
        onChange={(e) => {
          setMakerProcent(Number(e.target.value));
          console.log(Number(e.target.value), "makerProcent");
        }}
      />
    </div>
  );
};

export default MakerTaker;
