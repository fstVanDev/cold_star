import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const Top = () => {
  const { user } = useContext(StateContext);

  const barDefault = [
    { value: "Мethod", width: "w-max" },
    { value: "Advertisers (Completion rate)", width: "w-[175px]" },
    { value: "Price", width: "w-[100px]" },
    { value: "Limit/Available", width: "w-[195px]" },
    { value: "Payment", width: "w-[170px]" },
    { value: "Your Fees", width: "w-[88px]" },
    { value: "", width: "w-[50px]" },
  ];

  return (
    <div className="2xl:w-[1070px]">
      <div className="justify-between flex 2xl:w-[1070px] px-[30px] pb-[15px]">
        {barDefault.map((item, index) => (
          <p
            key={index}
            className={`font-normal text-lightGray text-12 leading-16 ${item.width} z-1`}
          >
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Top;
