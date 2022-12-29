import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { plusOrders } from "../images";
import Top from "./orderComponents/Top";
import { feeFunction } from "../data/mainData";

const Orders = () => {
  const { orders, makerProcent, fiatRate, currentFiat } =
    useContext(StateContext);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [profitArray, setProfitArray] = useState([]);

  useEffect(() => {
    if (profitArray.length > 0) {
      console.log(profitArray);
    }
  }, [profitArray]);

  // const [fee, setFee] = useState(0);
  // const getOutFee = (index, item) => {
  //   const profit = document.getElementById(`${index}profit1`);
  //   console.log(profit);
  //   const prof = Number(profit.firstChild.nodeValue);

  //   console.log(prof, "orders");
  //   setFee(prof);
  //   var array = config;
  //   array[array.length - 2].currentFee = prof;
  //   array[array.length - 2].currentOrder = item;
  //   console.log(array);
  //   setConfig(array);
  // };

  return (
    <>
      {orders !== null && (
        <div className="2xl:w-[1290px] mx-auto">
          <Top />

          <>
            {orders.map((item, index) => (
              <div className="w-max h-max mb-[10px] rounded-20">
                <div
                  className={`2xl:w-[1070px] h-[88px] flex justify-between bg-white py-[12px] px-[30px] ${
                    index === currentIndex ? "rounded-t-20" : " rounded-20"
                  }`}
                  key={index}
                >
                  {/* Mode */}
                  <div
                    className={`${
                      item.type === 2 ? "bg-green" : "bg-orange"
                    } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
                  >
                    <p className="text-white font-normal text-12 leading-16">
                      {item.type === 2 ? "Buy" : "Sell"}
                    </p>
                  </div>

                  {/* Name */}
                  <div className="grid min-w-[175px] h-max my-auto">
                    <p className="text-14 leading-20 font-bold text-black mb-[6px]">
                      {item.trade_user.name}
                    </p>
                    <div className="flex w-max h-max mx-auto my-auto text-12 leading-16 font-normal text-gray">
                      <p>
                        {`${item.trade_user.month_orders_count} orders  / ${
                          Number(item.trade_user.month_finish_rate).toFixed(2) *
                          100
                        }% completion`}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex min-w-[100px] h-max my-auto">
                    <p className="text-black text-18 font-bold leading-24">
                      {item.price}
                    </p>
                    <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
                      {item.fiat.name}
                    </p>
                  </div>

                  {/* Available */}
                  <div className="grid min-w-[195px] h-max my-auto">
                    <div className="flex w-max h-max ">
                      <p className="text-lightGray text-normal text-12 leading-16 my-auto">
                        Available
                      </p>
                      <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
                        {`${item.amount} ${" "} ${item.asset.name}`}
                      </p>
                    </div>
                    <div className="flex w-max h-max mt-[6px]">
                      <p className="text-lightGray text-normal text-12 leading-16 my-auto">
                        Limit
                      </p>
                      <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
                        {`${item.min_trans_amount} ${" "} -
              ${" "} ${item.max_trans_amount} ${" "} ${item.fiat.name}`}
                      </p>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="h-max my-auto flex w-[170px]">
                    <div className="w-full h-max flex flex-wrap my-auto mx-auto">
                      {item.trade_methods.map((obj, index) => (
                        <div
                          className={`border border-1 border-[${obj.color}] w-max h-max rounded-2 px-[5px] py-[4px] mx-[2px] my-[2px]`}
                        >
                          <p
                            className={`text-[${obj.color}] text-12 leading-14 w-max font-normal`}
                          >
                            {obj.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Profit */}
                  <div className="w-[88px] h-max flex my-auto">
                    <p className="text-green text-18 leading-24 font-bold text-center">
                      {feeFunction(
                        makerProcent,
                        Number(currentFiat.rates[0].rate),
                        fiatRate,
                        Number(item.price),
                        setProfitArray
                      )}
                      %
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className={`w-[50px] h-[50px]  border border-1  ${
                      currentIndex === index
                        ? "border-green bg-main"
                        : "border-gray bg-white"
                    } rounded-6 my-auto flex`}
                    onClick={() => {
                      setCurrentIndex(index);
                      console.log(
                        "кнопка для пеереброса профита в конфиг, пока disabled"
                      );
                    }}
                  >
                    <img
                      src={plusOrders}
                      alt="plus"
                      className="w-[20px] h-[20px] m-auto "
                    />
                  </button>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Orders;

// {orders !== null  (
//           <>
//             {config[0].orders.map((item, index) => (
//               <div className="w-max h-max mb-[10px] rounded-20">
//                 <div
//                   className={`2xl:w-[1070px] h-[88px] flex justify-between bg-white py-[12px] px-[30px] ${
//                     index === currentIndex ? "rounded-t-20" : " rounded-20"
//                   } `}
//                   key={index}
//                 >
// {/* Mode */}
// <div
//   className={`${
//     item.type === 2 ? "bg-green" : "bg-orange"
//   } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
// >
//   <p className="text-white font-normal text-12 leading-16">
//     {item.type === 2 ? "Buy" : "Sell"}
//   </p>
// </div>
//     {/* Name */}
//     <div className="grid w-max h-max my-auto">
//       <p className="text-14 leading-20 font-bold text-black mb-[6px]">
//         {item.trade_user.name}
//       </p>
//       <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
//         <p>
//           {`${item.trade_user.month_orders_count} orders  /
// ${
//   Number(item.trade_user.month_finish_rate).toFixed(2) * 100
// }% completion`}
//         </p>
//       </div>
//     </div>
// {/* Price */}
// <div className="flex w-max h-max my-auto">
//   <p className="text-black text-18 font-bold leading-24">
//     {item.price}
//   </p>
//   <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
//     {item.fiat.name}
//   </p>
// </div>
// {
//   /* Available */
// }
// <div className="grid w-max h-max my-auto">
//   <div className="flex w-max h-max ">
//     <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//       Available
//     </p>
//     <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//       {`${item.amount} ${" "} ${item.asset.name}`}
//     </p>
//   </div>
//   <div className="flex w-max h-max mt-[6px]">
//     <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//       Limit
//     </p>
//     <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//       {`${item.min_trans_amount} ${" "} -
//               ${" "} ${item.max_trans_amount} ${" "} ${item.fiat.name}`}
//     </p>
//   </div>
// </div>;
// {/* Payment */}
// <div className="h-full my-auto grid py-auto overflow-y-auto w-[170px]">
//   <div className="w-max h-max grid m-auto">
//     {item.trade_methods.map((obj, index) => (
//       <div
//         key={index}
//         className={`w-max h-max content-center bg-yellow rounded-2 px-[12px] ${
//           item.trade_methods.length === 1
//             ? "my-auto"
//             : "mb-[5px]"
//         } py-[4px] mx-auto`}
//       >
//         <p className="text-orange font-normal text-12 leading-16 w-max">
//           {obj.name}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>

//                   {/* <div className="max-w-[120px] h-max flex my-auto">
//                     <p className="text-green text-10 leading-17 font-normal text-center">
//                       Please add second chain to see profit
//                     </p>
//                   </div> */}
// <div className="max-w-[120px] h-max flex my-auto">
//   <p
//     className="text-green text-18 leading-24 font-bold text-center"
//     id={`${index}profit1`}
//     value={feeFunction(
//       makerProcent,
//       Number(currentFiat.rates[0].rate),
//       // Number(
//       //   config[config.length - 2].fiat.rates[0].rate
//       // ),
//       fiatRate,
//       Number(item.price)
//     )}
//   >
//     {feeFunction(
//       makerProcent,
//       Number(currentFiat.rates[0].rate),
//       // Number(
//       //   config[config.length - 2].fiat.rates[0].rate
//       // ),
//       fiatRate,
//       Number(item.price)
//     )}{" "}
//     %
//   </p>
// </div>
//                 </div>
//               </div>
//             ))}
//           </>
//         ) : (
//           <>
//             {config !== null && config.length > 1 ? (
//               <>
//                 {config[config.length - 2].orders.map((item, index) => (
//                   <div className="w-max h-max mb-[10px] rounded-20">
//                     <div
//                       className={`2xl:w-[1070px] h-[88px] flex justify-between bg-white py-[12px] px-[30px] ${
//                         index === currentIndex
//                           ? "rounded-t-20"
//                           : " rounded-20"
//                       } `}
//                       key={index}
//                     >
//                       {/* Mode */}
//                       <div
//                         className={`${
//                           item.type === 2 ? "bg-green" : "bg-orange"
//                         } w-max h-max rounded-2 my-auto px-[12px] py-[4px]`}
//                       >
//                         <p className="text-white font-normal text-12 leading-16">
//                           {item.type === 2 ? "Buy" : "Sell"}
//                         </p>
//                       </div>
//                       {/* Name */}
//                       <div className="grid w-max h-max my-auto">
//                         <p className="text-14 leading-20 font-bold text-black mb-[6px]">
//                           {item.trade_user.name}
//                         </p>
//                         <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
//                           <p>
//                             {`${
//                               item.trade_user.month_orders_count
//                             } orders  /
//               ${
//                 Number(item.trade_user.month_finish_rate).toFixed(2) * 100
//               }% completion`}
//                           </p>
//                         </div>
//                       </div>
//                       {/* Price */}
//                       <div className="flex w-max h-max my-auto">
//                         <p className="text-black text-18 font-bold leading-24">
//                           {item.price}
//                         </p>
//                         <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
//                           {item.fiat.name}
//                         </p>
//                       </div>
//                       {/* Available */}
//                       <div className="grid w-max h-max my-auto">
//                         <div className="flex w-max h-max ">
//                           <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//                             Available
//                           </p>
//                           <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//                             {`${item.amount} ${" "} ${item.asset.name}`}
//                           </p>
//                         </div>
//                         <div className="flex w-max h-max mt-[6px]">
//                           <p className="text-lightGray text-normal text-12 leading-16 my-auto">
//                             Limit
//                           </p>
//                           <p className="text-14 leading-20 font-normal w-max h-max my-auto ml-[10px]">
//                             {`${item.min_trans_amount} ${" "} -
//               ${" "} ${item.max_trans_amount} ${" "} ${item.fiat.name}`}
//                           </p>
//                         </div>
//                       </div>
//                       {/* Payment */}
//                       <div className="h-full my-auto grid py-auto overflow-y-auto w-[170px]">
//                         <div className="w-max h-max grid m-auto">
//                           {item.trade_methods.map((obj, index) => (
//                             <div
//                               key={index}
//                               className={`w-max h-max content-center bg-yellow rounded-2 px-[12px] ${
//                                 item.trade_methods.length === 1
//                                   ? "my-auto"
//                                   : "mb-[5px]"
//                               } py-[4px] mx-auto`}
//                             >
//                               <p className="text-orange font-normal text-12 leading-16 w-max">
//                                 {obj.name}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="max-w-[120px] h-max flex my-auto">
//                         <p
//                           className="text-green text-18 leading-24 font-bold text-center"
//                           id={`${index}profit1`}
//                           value={feeFunction(
//                             makerProcent,
//                             Number(currentFiat.rates[0].rate),
//                             // Number(
//                             //   config[config.length - 2].fiat.rates[0].rate
//                             // ),
//                             fiatRate,
//                             Number(item.price)
//                           )}
//                         >
//                           {feeFunction(
//                             makerProcent,
//                             Number(currentFiat.rates[0].rate),
//                             // Number(
//                             //   config[config.length - 2].fiat.rates[0].rate
//                             // ),
//                             fiatRate,
//                             Number(item.price)
//                           )}{" "}
//                           %
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         className="w-[50px] h-[50px] border border-1 border-gray bg-main my-auto rounded-6 flex"
//                         onClick={() => {
//                           if (index === currentIndex) {
//                             setCurrentIndex(null);
//                           } else {
//                             setCurrentIndex(index);
//                             getOutFee(index, item);

//                             //  if (
//                             //    currentFiat !== null &&
//                             //    currentCrypto !== null &&
//                             //    currentPayment !== null &&
//                             //    fee !== 0
//                             //  ) {
//                             //    const localObject = {
//                             //      id: globalId,
//                             //      mode: mode,
//                             //      amount: currentAmount,
//                             //      defaultAmount:
//                             //        currentAmount.length === 0 ? false : true,
//                             //      fiat: currentFiat,
//                             //      crypto: currentCrypto,
//                             //      payments: currentPayment,
//                             //      orders: currentOrders,
//                             //      currentOrder: item,
//                             //      currentFee: prof,
//                             //    };

//                             //    let arr = config;

//                             //    // arr[arr.length - 2] = localObject;
//                             //    // console.log(111);
//                             //    // setConfig(arr);

//                             //    arr.map((obj, index) => {
//                             //      if (
//                             //        obj.id === globalId &&
//                             //        arr[arr.length - 2] !== globalId
//                             //      ) {
//                             //        if (
//                             //          JSON.stringify(obj) !==
//                             //          JSON.stringify(localObject)
//                             //        ) {
//                             //          arr.splice(index, 1);
//                             //          const insert = function (
//                             //            array,
//                             //            indexi,
//                             //            obje
//                             //          ) {
//                             //            return [
//                             //              ...array.slice(0, indexi),
//                             //              obje,
//                             //              ...array.slice(indexi),
//                             //            ];
//                             //          };
//                             //          arr = insert(arr, index, localObject);
//                             //          console.log(arr);
//                             //          setConfig(arr);
//                             //        }
//                             //      }
//                             //    });
//                             //  }
//                           }
//                         }}
//                       >
//                         <img
//                           src={
//                             index === currentIndex
//                               ? ordersChevron
//                               : plusOrders
//                           }
//                           alt="pls"
//                           className="w-[12px] h-[12px] my-auto mx-auto"
//                         />
//                       </button>
//                     </div>

//                     {index === currentIndex ? (
//                       <>
//                         <div className="w-full h-[1px] bg-green" />
//                         <SecondaryOrders price2={item.price} />
//                       </>
//                     ) : null}
//                   </div>
//                 ))}
//               </>
//             ) : null}
//           </>
//         )}
