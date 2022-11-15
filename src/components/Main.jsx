import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateProvider";
import Home from "./Home";
import { chevron } from "../images";

const Main = () => {
  const {
    ordersArraySecond,
    ordersArrayFirst,
    modeSecond,
    modeFirst,
    fiatRateFirst,
    fiatRateSecond,
    amountFirst,
    amountSecond,
  } = useContext(StateContext);

  const [active, setActive] = useState(0);

  const takeProfit = () => {
    // let result = (item * 100) / flap;
    // if (modeFirst === 2) {
    //   if (result < 100) {
    //     result = result - 100;
    //   }
    // } else {
    //   if (result > 100) {
    //     result = 100 - result;
    //   }
    // }

    var realRate = fiatRateSecond / fiatRateFirst;
    var resultRate = amountFirst / amountSecond;
    const result = Math.round((resultRate / realRate - 1) * 10000) / 100;

    return (
      <div
        className={
          result < 0
            ? "text-14  bg-red px-[16px] pu-[12px] m-auto text-black rounded-6"
            : "text-14 bg-green px-[16px] pu-[12px] m-auto text-black rounded-6"
        }
      >
        {result.toFixed(5)}%
      </div>
    );
  };

  return (
    <div className="mt-[124px] w-[100vw] bg-secondary">
      <div className="2xl:w-[1290px] mx-auto rounded-20 h-max bg-white px-[36px] py-[24px]">
        <div className="grid bg-secondary w-full h-max rounded-10 px-[24px] py-[12px]">
          {modeFirst === 2 ? (
            <>
              {ordersArrayFirst !== null ? (
                <>
                  {ordersArrayFirst.map((item) => (
                    <div
                      className={
                        item.id !== active
                          ? "bg-white rounded-10 h-max min-h-[100px] mb-[24px] grid"
                          : "bg-white rounded-10 h-max min-h-[100px] mb-[24px] grid border border-1 border-yellow"
                      }
                    >
                      <div className="flex min-h-[100px] h-max" key={item.id}>
                        <div className="grid h-full w-[262px] py-[12px] my-auto">
                          <p className="w-max h-max mx-auto my-auto text-black mb-[8px] text-18">
                            {item.trade_user.name}
                          </p>

                          <div className="w-max flex h-max mx-auto">
                            <p className="w-max h-max text-yellow text-14 mr-[4px]">
                              {item.trade_user.month_orders_count}
                            </p>
                            <p className="w-max h-max text-black text-12 my-auto">
                              orders
                            </p>

                            <p className="w-max h-max text-yellow text-14 ml-[12px] mr-[4px]">
                              {item.trade_user.month_finish_rate * 100}%
                            </p>
                            <p className="w-max h-max text-black text-12 my-auto">
                              completion
                            </p>
                          </div>
                        </div>

                        <div className="grid h-full w-[244px] py-[12px] my-auto">
                          <div className="flex justify-center h-max my-auto">
                            <p className="w-max h-max my-auto text-yellow text-18">
                              {item.price}
                            </p>
                            <p className="text-black my-auto text-12 ml-[8px]">
                              {item.fiat.name}
                            </p>
                          </div>
                        </div>

                        <div className="grid h-full w-[268px] py-[12px] my-auto">
                          <div className="flex my-auto mr-auto">
                            <p className="text-10 text-black w-max h-max my-auto">
                              Available
                            </p>
                            <p className="text-yellow text-16 mx-[8px]">
                              {item.amount}
                            </p>
                            <p className="text-black text-12 w-max h-max my-auto">
                              {item.asset.name}
                            </p>
                          </div>
                          <div className="flex my-auto mr-auto">
                            <p className="text-10 text-black w-max h-max my-auto">
                              Limit
                            </p>
                            <p className="text-yellow text-14 mr-[6px] ml-[8px]">
                              {item.min_trans_amount}
                            </p>
                            <p className="text-10 text-black w-max h-max my-auto">
                              {" "}
                              -{" "}
                            </p>
                            <p className="text-yellow text-14 mx-[6px]">
                              {item.max_trans_amount}
                            </p>
                            <p className="text-black my-auto text-12">
                              {item.fiat.name}
                            </p>
                          </div>
                        </div>

                        <div className="w-[188px] h-max py-[12px] flex flex-wrap my-auto">
                          {item.trade_methods.map((obj) => (
                            <div className="flex w-max h-max" key={obj.id}>
                              <div className="w-max h-max rounded-6 border border-1 border-green px-[4px] py-[2px]">
                                <p className="w-max h-max text-12 text-black">
                                  {obj.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="w-[210px] h-full py-[12px] flex my-auto mx-auto my-auto">
                          <p
                            className={
                              item.type === 2
                                ? "w-max h-max my-auto mx-auto text-16 border border-1 border-green text-black px-[12px] py-[px] rounded-6"
                                : "w-max h-max my-auto mx-auto text-16 border border-1 border-red text-black px-[12px] py-[px] rounded-6"
                            }
                          >
                            {item.type === 2 ? "Buy" : "Sell"}
                          </p>

                          <button
                            type="button"
                            onClick={
                              active !== item.id
                                ? () => setActive(item.id)
                                : () => setActive(0)
                            }
                            className={
                              active !== item.id
                                ? "w-[20px] h-[20px] my-auto mx-auto"
                                : "w-[20px] h-[20px] my-auto rotate-180 mx-auto "
                            }
                          >
                            <img src={chevron} alt="opt" className="z-2" />
                          </button>
                        </div>
                      </div>
                      {active === item.id ? (
                        <div className="bg-white border-t border-t-1 border-t-yellow h-max min-h-[10px] rounded-b-10">
                          {ordersArraySecond.map((flap) => (
                            <div
                              className="flex h-max w-full bg-white rounded-b-10 border-b border-b-1 border-b-secondary"
                              key={flap.id}
                            >
                              <div className="grid h-full w-[262px] py-[16px] my-auto">
                                <p className="w-max h-max mx-auto my-auto text-black mb-[8px] text-18">
                                  {flap.trade_user.name}
                                </p>

                                <div className="w-max flex h-max mx-auto">
                                  <p className="w-max h-max text-yellow text-14 mr-[4px]">
                                    {flap.trade_user.month_orders_count}
                                  </p>
                                  <p className="w-max h-max text-black text-12 my-auto">
                                    orders
                                  </p>

                                  <p className="w-max h-max text-yellow text-14 ml-[12px] mr-[4px]">
                                    {(
                                      flap.trade_user.month_finish_rate * 100
                                    ).toFixed(1)}
                                    %
                                  </p>
                                  <p className="w-max h-max text-black text-12 my-auto">
                                    completion
                                  </p>
                                </div>
                              </div>

                              <div className="grid h-full w-[244px] py-[12px] my-auto">
                                <div className="flex justify-center h-max my-auto">
                                  <p className="w-max h-max my-auto text-yellow text-18">
                                    {flap.price}
                                  </p>
                                  <p className="text-black my-auto text-12 ml-[8px]">
                                    {flap.fiat.name}
                                  </p>
                                </div>
                              </div>

                              <div className="grid h-full w-[268px] py-[12px] my-auto">
                                <div className="flex my-auto mr-auto">
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    Available
                                  </p>
                                  <p className="text-yellow text-16 mx-[8px]">
                                    {flap.amount}
                                  </p>
                                  <p className="text-black text-12 w-max h-max my-auto">
                                    {flap.asset.name}
                                  </p>
                                </div>
                                <div className="flex my-auto mr-auto">
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    Limit
                                  </p>
                                  <p className="text-yellow text-14 mr-[6px] ml-[8px]">
                                    {flap.min_trans_amount}
                                  </p>
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    {" "}
                                    -{" "}
                                  </p>
                                  <p className="text-yellow text-14 mx-[6px]">
                                    {flap.max_trans_amount}
                                  </p>
                                  <p className="text-black my-auto text-12">
                                    {flap.fiat.name}
                                  </p>
                                </div>
                              </div>

                              <div className="w-[188px] h-max py-[12px] flex flex-wrap my-auto">
                                {flap.trade_methods.map((pas) => (
                                  <div
                                    className="flex w-max h-max"
                                    key={pas.id}
                                  >
                                    <div className="w-max h-max rounded-6 border border-1 border-red px-[4px] py-[2px]">
                                      <p className="w-max h-max text-12 text-black">
                                        {pas.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="w-[210px] h-full py-[12px] flex my-auto mx-auto my-auto">
                                <p
                                  className={
                                    flap.type === 2
                                      ? "w-max h-max my-auto mx-auto text-16 border border-1 border-green text-black px-[12px] py-[px] rounded-6"
                                      : "w-max h-max my-auto mx-auto text-16 border border-1 border-red text-black px-[12px] py-[px] rounded-6"
                                  }
                                >
                                  {flap.type === 2 ? "Buy" : "Sell"}
                                </p>

                                {takeProfit(item.price, flap.price)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </>
              ) : null}
            </>
          ) : modeFirst === 1 ? (
            <>
              {ordersArrayFirst !== null ? (
                <>
                  {ordersArrayFirst.map((item) => (
                    <div
                      className={
                        item.id !== active
                          ? "bg-white rounded-10 h-max min-h-[100px] mb-[24px] grid"
                          : "bg-white rounded-10 h-max min-h-[100px] mb-[24px] grid border border-1 border-yellow"
                      }
                    >
                      <div className="flex min-h-[100px] h-max" key={item.id}>
                        <div className="grid h-full w-[262px] py-[12px] my-auto">
                          <p className="w-max h-max mx-auto my-auto text-black mb-[8px] text-18">
                            {item.trade_user.name}
                          </p>

                          <div className="w-max flex h-max mx-auto">
                            <p className="w-max h-max text-yellow text-14 mr-[4px]">
                              {item.trade_user.month_orders_count}
                            </p>
                            <p className="w-max h-max text-black text-12 my-auto">
                              orders
                            </p>

                            <p className="w-max h-max text-yellow text-14 ml-[12px] mr-[4px]">
                              {item.trade_user.month_finish_rate * 100}%
                            </p>
                            <p className="w-max h-max text-black text-12 my-auto">
                              completion
                            </p>
                          </div>
                        </div>

                        <div className="grid h-full w-[244px] py-[12px] my-auto">
                          <div className="flex justify-center h-max my-auto">
                            <p className="w-max h-max my-auto text-yellow text-18">
                              {item.price}
                            </p>
                            <p className="text-black my-auto text-12 ml-[8px]">
                              {item.fiat.name}
                            </p>
                          </div>
                        </div>

                        <div className="grid h-full w-[268px] py-[12px] my-auto">
                          <div className="flex my-auto mr-auto">
                            <p className="text-10 text-black w-max h-max my-auto">
                              Available
                            </p>
                            <p className="text-yellow text-16 mx-[8px]">
                              {item.amount}
                            </p>
                            <p className="text-black text-12 w-max h-max my-auto">
                              {item.asset.name}
                            </p>
                          </div>
                          <div className="flex my-auto mr-auto">
                            <p className="text-10 text-black w-max h-max my-auto">
                              Limit
                            </p>
                            <p className="text-yellow text-14 mr-[6px] ml-[8px]">
                              {item.min_trans_amount}
                            </p>
                            <p className="text-10 text-black w-max h-max my-auto">
                              {" "}
                              -{" "}
                            </p>
                            <p className="text-yellow text-14 mx-[6px]">
                              {item.max_trans_amount}
                            </p>
                            <p className="text-black my-auto text-12">
                              {item.fiat.name}
                            </p>
                          </div>
                        </div>

                        <div className="w-[188px] h-max py-[12px] flex flex-wrap my-auto">
                          {item.trade_methods.map((obj) => (
                            <div className="flex w-max h-max" key={obj.id}>
                              <div
                                className={
                                  item.type === 2
                                    ? "w-max h-max rounded-6 border border-1 border-green px-[4px] py-[2px]"
                                    : "w-max h-max rounded-6 border border-1 border-red px-[4px] py-[2px]"
                                }
                              >
                                <p className="w-max h-max text-12 text-black">
                                  {obj.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="w-[210px] h-full py-[12px] flex my-auto mx-auto my-auto">
                          <p
                            className={
                              item.type === 2
                                ? "w-max h-max my-auto mx-auto text-16 border border-1 border-green text-black px-[12px] py-[px] rounded-6"
                                : "w-max h-max my-auto mx-auto text-16 border border-1 border-red text-black px-[12px] py-[px] rounded-6"
                            }
                          >
                            {item.type === 2 ? "Buy" : "Sell"}
                          </p>

                          <button
                            type="button"
                            onClick={
                              active !== item.id
                                ? () => setActive(item.id)
                                : () => setActive(0)
                            }
                            className={
                              active !== item.id
                                ? "w-[20px] h-[20px] my-auto mx-auto"
                                : "w-[20px] h-[20px] my-auto rotate-180 mx-auto "
                            }
                          >
                            <img src={chevron} alt="opt" className="z-2" />
                          </button>
                        </div>
                      </div>
                      {active === item.id ? (
                        <div className="bg-white border-t border-t-1 border-t-yellow h-max min-h-[10px] rounded-b-10">
                          {ordersArraySecond.map((flap) => (
                            <div
                              className="flex h-max w-full bg-white rounded-b-10 border-b border-b-1 border-b-secondary"
                              key={flap.id}
                            >
                              <div className="grid h-full w-[262px] py-[16px] my-auto">
                                <p className="w-max h-max mx-auto my-auto text-black mb-[8px] text-18">
                                  {flap.trade_user.name}
                                </p>

                                <div className="w-max flex h-max mx-auto">
                                  <p className="w-max h-max text-yellow text-14 mr-[4px]">
                                    {flap.trade_user.month_orders_count}
                                  </p>
                                  <p className="w-max h-max text-black text-12 my-auto">
                                    orders
                                  </p>

                                  <p className="w-max h-max text-yellow text-14 ml-[12px] mr-[4px]">
                                    {(
                                      flap.trade_user.month_finish_rate * 100
                                    ).toFixed(1)}
                                    %
                                  </p>
                                  <p className="w-max h-max text-black text-12 my-auto">
                                    completion
                                  </p>
                                </div>
                              </div>

                              <div className="grid h-full w-[244px] py-[12px] my-auto">
                                <div className="flex justify-center h-max my-auto">
                                  <p className="w-max h-max my-auto text-yellow text-18">
                                    {flap.price}
                                  </p>
                                  <p className="text-black my-auto text-12 ml-[8px]">
                                    {flap.fiat.name}
                                  </p>
                                </div>
                              </div>

                              <div className="grid h-full w-[268px] py-[12px] my-auto">
                                <div className="flex my-auto mr-auto">
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    Available
                                  </p>
                                  <p className="text-yellow text-16 mx-[8px]">
                                    {flap.amount}
                                  </p>
                                  <p className="text-black text-12 w-max h-max my-auto">
                                    {flap.asset.name}
                                  </p>
                                </div>
                                <div className="flex my-auto mr-auto">
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    Limit
                                  </p>
                                  <p className="text-yellow text-14 mr-[6px] ml-[8px]">
                                    {flap.min_trans_amount}
                                  </p>
                                  <p className="text-10 text-black w-max h-max my-auto">
                                    {" "}
                                    -{" "}
                                  </p>
                                  <p className="text-yellow text-14 mx-[6px]">
                                    {flap.max_trans_amount}
                                  </p>
                                  <p className="text-black my-auto text-12">
                                    {flap.fiat.name}
                                  </p>
                                </div>
                              </div>

                              <div className="w-[188px] h-max py-[12px] flex flex-wrap my-auto">
                                {flap.trade_methods.map((pas) => (
                                  <div
                                    className="flex w-max h-max"
                                    key={pas.id}
                                  >
                                    <div
                                      className={
                                        flap.item === 2
                                          ? "w-max h-max rounded-6 border border-1 border-red px-[4px] py-[2px]"
                                          : "w-max h-max rounded-6 border border-1 border-green px-[4px] py-[2px]"
                                      }
                                    >
                                      <p className="w-max h-max text-12 text-black">
                                        {pas.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="w-[210px] h-full py-[12px] flex my-auto mx-auto my-auto">
                                <p
                                  className={
                                    flap.type === 2
                                      ? "w-max h-max my-auto mx-auto text-16 border border-1 border-green text-black px-[12px] py-[px] rounded-6"
                                      : "w-max h-max my-auto mx-auto text-16 border border-1 border-red text-black px-[12px] py-[px] rounded-6"
                                  }
                                >
                                  {flap.type === 2 ? "Buy" : "Sell"}
                                </p>

                                {takeProfit()}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
