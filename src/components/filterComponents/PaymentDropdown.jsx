import React, { useState, useEffect } from "react";
import { chevronFilter } from "../../images";

const PaymentDropdown = ({
  payment,
  currentFiat,
  currentCrypto,
  currentPayment,
  setCurrentPayment,
}) => {
  const [defaultPayment, setDefaultPayment] = useState("Bank...");
  const [activePayment, setActivePayment] = useState(false);
  const [usersPayment, setUsersPayment] = useState(null);

  function handleChangeCurrentValue(anything, setAnything, value) {
    let arr = anything;
    let ind = null;

    if (arr !== null) {
      arr.map((item, index) => {
        // const found = arr.includes(value.id);
        if (item.id === value.id) {
          ind = index;
        }
      });

      if (ind === null) {
        arr.push(value);
        setAnything(arr);
        setCurrentPayment(arr);
        console.log(arr, "currentPayment");
      } else {
        arr.splice(ind, 1);
        setAnything(arr);
        setCurrentPayment(arr);
        console.log(arr, "currentPayment");
      }
    } else {
      arr = [];
      arr.push(value);
      setAnything(arr);
      setCurrentPayment(arr);
      console.log(arr, "currentPayment");
    }
  }

  // useEffect(() => {
  //   setCurrentPayment(null);
  //   setUsersPayment(null);
  // }, []);

  // const data = [
  //   {
  //     id: 4,
  //     trade_platform_id: 1,
  //     external_id: "BANK",
  //     name: "Bank Transfer",
  //     created_at: "2022-11-04T09:07:43.000000Z",
  //     updated_at: "2022-11-04T09:07:43.000000Z",
  //   },
  //   {
  //     id: 5,
  //     trade_platform_id: 1,
  //     external_id: "RosBankNew",
  //     name: "RosBank",
  //     created_at: "2022-11-04T09:07:43.000000Z",
  //     updated_at: "2022-11-04T09:07:43.000000Z",
  //   },
  //   {
  //     id: 34,
  //     trade_platform_id: 1,
  //     external_id: "TinkoffNew",
  //     name: "Tinkoff",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 52,
  //     trade_platform_id: 1,
  //     external_id: "Paysend",
  //     name: "Paysend.com",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 72,
  //     trade_platform_id: 1,
  //     external_id: "Mobiletopup",
  //     name: "Mobile top-up",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 86,
  //     trade_platform_id: 1,
  //     external_id: "RaiffeisenBank",
  //     name: "Raiffeisenbank",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 94,
  //     trade_platform_id: 1,
  //     external_id: "SpecificBank",
  //     name: "Transfers with specific bank",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 105,
  //     trade_platform_id: 1,
  //     external_id: "QIWI",
  //     name: "QIWI",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 142,
  //     trade_platform_id: 1,
  //     external_id: "Advcash",
  //     name: "Advcash",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 152,
  //     trade_platform_id: 1,
  //     external_id: "AltynBank",
  //     name: "Altyn Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 155,
  //     trade_platform_id: 1,
  //     external_id: "KaspiBank",
  //     name: "Kaspi Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 156,
  //     trade_platform_id: 1,
  //     external_id: "ForteBank",
  //     name: "ForteBank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 160,
  //     trade_platform_id: 1,
  //     external_id: "CenterCreditBank",
  //     name: "CenterCredit Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 164,
  //     trade_platform_id: 1,
  //     external_id: "HalykBank",
  //     name: "Halyk Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 166,
  //     trade_platform_id: 1,
  //     external_id: "JysanBank",
  //     name: "Jysan Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 178,
  //     trade_platform_id: 1,
  //     external_id: "FreedomBank",
  //     name: "Freedom Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 203,
  //     trade_platform_id: 1,
  //     external_id: "BankRBK",
  //     name: "Bank RBK",
  //     created_at: "2022-11-04T09:07:46.000000Z",
  //     updated_at: "2022-11-04T09:07:46.000000Z",
  //   },
  //   {
  //     id: 173,
  //     trade_platform_id: 1,
  //     external_id: "EurasianBank",
  //     name: "Eurasian Bank",
  //     created_at: "2022-11-04T09:07:45.000000Z",
  //     updated_at: "2022-11-04T09:07:45.000000Z",
  //   },
  //   {
  //     id: 199,
  //     trade_platform_id: 1,
  //     external_id: "HomeCreditKazakhstan",
  //     name: "Home Credit Kazakhstan",
  //     created_at: "2022-11-04T09:07:46.000000Z",
  //     updated_at: "2022-11-04T09:07:46.000000Z",
  //   },
  //   {
  //     id: 110,
  //     trade_platform_id: 1,
  //     external_id: "OPTIMABANK",
  //     name: "Optima Bank",
  //     created_at: "2022-11-04T09:07:44.000000Z",
  //     updated_at: "2022-11-04T09:07:44.000000Z",
  //   },
  //   {
  //     id: 220,
  //     trade_platform_id: 1,
  //     external_id: "KoronaPay",
  //     name: "KoronaPay",
  //     created_at: "2022-11-04T09:07:46.000000Z",
  //     updated_at: "2022-11-04T09:07:46.000000Z",
  //   },
  //   {
  //     id: 302,
  //     trade_platform_id: 1,
  //     external_id: "DukascopyBank",
  //     name: "Dukascopy Bank",
  //     created_at: "2022-11-04T09:07:49.000000Z",
  //     updated_at: "2022-11-04T09:07:49.000000Z",
  //   },
  //   {
  //     id: 470,
  //     trade_platform_id: 1,
  //     external_id: "GEOPay",
  //     name: "GEO Pay",
  //     created_at: "2022-11-04T09:08:08.000000Z",
  //     updated_at: "2022-11-04T09:08:08.000000Z",
  //   },
  // ];

  return (
    <div className="w-max h-full flex">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Payment
      </h2>

      <div className="w-[160px] h-max min-h-[40px] border border-1 border-gray rounded-6 relative">
        <button
          type="button"
          onClick={() => {
            // setActivePayment(!activePayment);
            if (currentCrypto !== null && currentFiat !== null) {
              setActivePayment(!activePayment);
            }
          }}
          className={`flex justify-between h-[38px] w-[160px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activePayment &&
                 "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activePayment && "rounded-6"}
               `}
        >
          <div className="w-max h-[38px] mx-auto font-normal my-auto flex overflow-x-auto text-12 leading-14 ">
            {payment !== null ? (
              usersPayment === null ? (
                <p className="w-max h-max my-auto">{defaultPayment}</p>
              ) : (
                usersPayment.map((item) => (
                  <p
                    className="w-max max-h-[18px] my-auto text-lightGray text-12 leading-14 mx-[5px]"
                    key={item.id}
                  >
                    {item.name},
                  </p>
                ))
              )
            ) : (
              <p className="w-max h-max my-auto">First enter fiat and crypto</p>
            )}
          </div>
          {payment !== null ? (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          ) : null}
        </button>
        {activePayment && (
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px] relative">
            {payment.map((item) => (
              <button
                key={item.id}
                type="button"
                className="w-full h-max my-[10px] flex justify-around"
                onClick={() => {
                  handleChangeCurrentValue(usersPayment, setUsersPayment, item);
                }}
              >
                <p className="w-full h-max text-gray test-14 font-normal my-auto">
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDropdown;
