import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const MakerTaker = () => {
  const { makerProcent, setMakerProcent } = useContext(StateContext);

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Maker/Taker %
      </h2>
      <input
        type="number"
        className="min-h-[40px] w-[120px] border border-1 border-gray rounded-6 my-auto text-lightGray text-14 leading-20 font-normal px-[8px] focus:ring-0 focus:outline-none"
        placeholder="0.1% (default)"
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
