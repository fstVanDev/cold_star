import React from "react";
import {
  accountBanner,
  videoInstruction,
  favouriteStar,
  kztFlag,
} from "../images";

const Favourites = () => {
  const data = [
    {
      mode: true,
      fiat: { name: "KZT", code: 17 },
      asset: { name: "USDT", code: 137 },
      name: "Caps",
      orders: 161,
      completion: 96.8,
      max_limit: 50000,
      min_limit: 5000,
      price: 471.52,
      amount: 788.1,
      payment: [{ name: "Jusan Bank" }, { name: "Halyk Bank" }],
      fee: 0.12,
    },
  ];

  const dataBank = [
    { name: "Kaspi Bank", buy: 470.05, sell: 475.01 },
    { name: "Eurasian Bank", buy: 470.05, sell: 475.01 },
    { name: "Forte Bank", buy: 470.05, sell: 475.01 },
    { name: "Halyk Bank", buy: 470.05, sell: 475.01 },
    { name: "CenterCredit Bank", buy: 470.05, sell: 475.01 },
    { name: "Jusan Bank", buy: 470.05, sell: 475.01 },
  ];

  return (
    <div className="bg-main min-h-[100vh] w-full pt-[70px]">
      <div className="border border-1 border-gray bg-white h-[80px] py-[25px] w-full">
        <div className="2xl:w-[1290px] mx-auto">
          <h1 className="text-black text-24 leading-30 font-bold">
            Личный кабинет
          </h1>
        </div>
      </div>

      <div className="2xl:w-[1290px] mx-auto py-[30px] ">
        <div className="w-max h-[170px]">
          <img src={accountBanner} alt="baner" className="absolute z-[10]" />
          <div className="2xl:w-[1290px] h-[170px] py-[30px]">
            <p className="relative text-white font-bold text-32 leading-40 w-max h-max mx-auto z-[20]">
              Быстрый поиск выгодных связок
            </p>
            <div className="h-max w-max relative z-[20] mx-auto mt-[30px] flex">
              <button
                type="button"
                className="flex w-[187px] h-[40px] px-[15px]  border border-2 border-white rounded-4 flex"
                onClick={() => console.log("click")}
              >
                <img
                  src={videoInstruction}
                  alt="video"
                  className="w-[12px] h-[12px] my-auto"
                />
                <p className="text-white font-bold text-14 leading-20 w-max h-max my-auto ml-[5px]">
                  Видео инструкция
                </p>
              </button>
              <button
                type="button"
                className="flex w-[80px] h-[40px] px-[15px] bg-green rounded-4 ml-[30px]"
                onClick={() => console.log("click")}
              >
                <p className="text-white w-max h-max text-14 font-bold leading-20 m-auto">
                  Начать
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:w-[1290px] mx-auto py-[60px]">
        <h1 className="text-black text-32 font-bold leading-40 ">Избранное</h1>

        <div className="w-full flex h-max my-[30px]">
          {data.map((item, index) => (
            <div className="h-full w-[410px] bg-white rounded-30 border border-1 border-gray p-[30px]">
              <div className="flex w-full h-max justify-between">
                <div className="flex w-max h-max">
                  <div className="bg-green rounded-2 py-[4px] px-[12px] mr-[15px]">
                    <p className="text-white w-max h-max m-auto text-12 leading-16 font-normal">
                      {item.mode === true ? "Buy" : "Sell"}
                    </p>
                  </div>
                  <p className="text-black font-boldxt-14 leading-20 w-max h-max m-auto">
                    {item.asset.name} / {item.fiat.name}
                  </p>
                </div>
                <div className="border borde-gray border-1 rounded-6 bg-main flex w-[24px] h-[24px]">
                  <img
                    src={favouriteStar}
                    alt="star"
                    className="w-[12px] h-[12px] m-auto"
                  />
                </div>
              </div>

              <div className="w-full h-max ">
                <div className="flex justify-between w-full h-max py-[15px] border-b border-b-1 border-b-gray">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Advertisers
                  </p>
                  <div className="grid w-max h-max">
                    <p className="text-black font-bold text-14 leading-20 ml-auto">
                      {item.name}
                    </p>
                    <p className="font-normal text-12 leading-16 text-gray">
                      {item.orders} orders | {item.completion}% completion
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full h-max py-[15px] border-b border-b-1 border-b-gray">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Price
                  </p>

                  <p className="text-black font-bold text-18 leading-24 ml-auto">
                    {item.price} {""} {item.fiat.name}
                  </p>
                </div>
                <div className="flex justify-between w-full h-max py-[15px] border-b border-b-1 border-b-gray">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Available
                  </p>
                  <p className="text-black font-bold text-18 leading-24 ml-auto">
                    {item.amount} {""} {item.asset.name}
                  </p>
                </div>
                <div className="flex justify-between w-full h-max py-[15px] border-b border-b-1 border-b-gray">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Limit
                  </p>
                  <p className="text-black font-normal text-14 leading-20 ml-auto">
                    {item.min_limit} - {item.max_limit}/ {item.fiat.name}
                  </p>
                </div>
                <div className="flex justify-between w-full h-max py-[15px] border-b border-b-1 border-b-gray">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Payment
                  </p>
                  <div className="flex">
                    {item.payment.map((obj) => (
                      <div className="w-max h-max px-[12px] py-[4px] rounded-2 bg-yellow mr-[5px]">
                        <p className="text-orange w-max h-max text12 leading-16 font-normal">
                          {obj.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between w-full h-max py-[15px]">
                  <p className="text-lightGray text-12 font-normal leading-16 my-auto">
                    Fees
                  </p>
                  <p className="text-green text-18 leading-24 font-bold">
                    {item.fee}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="2xl:w-[1290px] mx-auto pb-[60px]">
        <h1 className="text-black text-32 font-bold leading-40 ">Offers</h1>
        <div className="w-[300px] h-max rounded-30 bg-white border border-1 border-gray p-[30px] mt-[30px]">
          <div className="flex">
            <img src={kztFlag} alt="flag" />
            <p className="text-black text-14 leading-20 font-bold w-max h-max my-auto ml-[10px]">
              P2P Binance USDT/KZT
            </p>
          </div>

          <div className="flex justify-between mt-[15px] pb-[10px] border-b border-b-1 borderb-b-gray">
            <p className="text-lightGray text-12 leading-16 font-normal w-[100px]">
              Method
            </p>
            <p className="text-lightGray text-12 leading-16 font-normal">Buy</p>
            <p className="text-lightGray text-12 leading-16 font-normal">
              Sell
            </p>
          </div>

          {dataBank.map((item, index) => (
            <div
              className={`flex justify-between mt-[15px] pb-[10px] ${
                index === dataBank.length - 1
                  ? ""
                  : "border-b border-b-1 borderb-b-gray"
              }`}
            >
              <p className="text-black text-14 leading-20 font-normal w-[100px]">
                {item.name}
              </p>
              <p className="text-black text-14 leading-20 font-bold">
                {item.buy}
              </p>
              <p className="text-black text-14 leading-20 font-bold">
                {item.sell}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
