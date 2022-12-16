import React from "react";
import { bottomData } from "../data/mainData";

const Bottom = () => {
  return (
    <div className=" w-full h-[390px] bg-white">
      <div className="2xl:w-[1290px] mx-auto pt-[88px] pb-[30px] px-[75px] grid ">
        <div className="flex justify-between w-full h-max">
          <div className="grid">
            <p className="leading-18 text-14 text-gray max-w-[410px]">
              {bottomData.text1}
            </p>
            <p className="leading-18 text-14 text-gray max-w-[410px] mt-[30px]">
              {bottomData.text2}
            </p>
          </div>

          <div className="flex">
            {bottomData.blocks.map((item) => (
              <div className="mr-[30px]" key={item.label}>
                <h2 className="w-[190px] h-max mx-auto text-green text-14 leading-18 font-normal">
                  {item.label}
                </h2>

                <div className="mt-[10px] grid">
                  {item.buttons.map((obj) => (
                    <a
                      href={obj.url}
                      className="mt-[20px] w-[190px] h-max "
                      key={obj.text}
                    >
                      <p className="text-18 leading-22 font-normal text-black">
                        {obj.text}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between h-full w-full">
          <div className="w-[290px] h-max flex justify-between mt-[90px]">
            {bottomData.links.map((item) => (
              <a
                className="w-max h-max p-[15px] rounded-10 bg-green"
                href={item.url}
                key={item.alt}
              >
                <img
                  src={item.image}
                  slt={item.alt}
                  className="w-[20px] h-[20px]"
                />
              </a>
            ))}
          </div>
          <div className="w-max h-max mt-auto">
            <p className="w-max h-max text-14 leading-17 font-normal text-black">
              {bottomData.text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
