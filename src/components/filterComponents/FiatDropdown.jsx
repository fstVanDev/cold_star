import React, { useState, useEffect } from "react";
import { chevronFilter } from "../../images";

const FiatDropdown = ({ fiat, setCurrentFiat, currentFiat }) => {
  const [defaultFiat, setDefaultFiat] = useState("USD...");
  const [activeFiat, setActiveFiat] = useState(false);
  const [fiatValue, setFiatValue] = useState("");

  useEffect(() => {
    if (currentFiat === null) {
      setDefaultFiat("USD...");
      setFiatValue("");
      console.log("effect on currentFiat");
    } else {
      setDefaultFiat(currentFiat.name);
    }
  }, [currentFiat]);

  // const data = [
  //   {
  //     id: 1,
  //     code: "BUSD",
  //     name: "BUSD",
  //     type: 1,
  //     rates: [],
  //   },
  //   {
  //     id: 2,
  //     code: "AMD",
  //     name: "AMD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3297,
  //         src_currency_id: 16,
  //         dest_currency_id: 2,
  //         rate: "396.98292973402",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     code: "BNB",
  //     name: "BNB",
  //     type: 1,
  //     rates: [],
  //   },
  //   {
  //     id: 4,
  //     code: "ARS",
  //     name: "ARS",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3296,
  //         src_currency_id: 16,
  //         dest_currency_id: 4,
  //         rate: "301.65912518854",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     code: "USDT",
  //     name: "USDT",
  //     type: 1,
  //     rates: [],
  //   },
  //   {
  //     id: 6,
  //     code: "NPR",
  //     name: "NPR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3332,
  //         src_currency_id: 16,
  //         dest_currency_id: 6,
  //         rate: "132.34515616728",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     code: "ETB",
  //     name: "ETB",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3360,
  //         src_currency_id: 16,
  //         dest_currency_id: 7,
  //         rate: "53.702808656893",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     code: "BTC",
  //     name: "BTC",
  //     type: 1,
  //     rates: [],
  //   },
  //   {
  //     id: 9,
  //     code: "GBP",
  //     name: "GBP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3278,
  //         src_currency_id: 16,
  //         dest_currency_id: 9,
  //         rate: "0.81043844719994",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     code: "ETH",
  //     name: "ETH",
  //     type: 1,
  //     rates: [],
  //   },
  //   {
  //     id: 11,
  //     code: "PAB",
  //     name: "PAB",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3339,
  //         src_currency_id: 16,
  //         dest_currency_id: 11,
  //         rate: "1",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     code: "AUD",
  //     name: "AUD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3284,
  //         src_currency_id: 16,
  //         dest_currency_id: 12,
  //         rate: "1.4688580069653",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 13,
  //     code: "PKR",
  //     name: "PKR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3338,
  //         src_currency_id: 16,
  //         dest_currency_id: 13,
  //         rate: "224.92127755286",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     code: "RUB",
  //     name: "RUB",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3277,
  //         src_currency_id: 16,
  //         dest_currency_id: 14,
  //         rate: "64.876086674452",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 15,
  //     code: "KWD",
  //     name: "KWD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3324,
  //         src_currency_id: 16,
  //         dest_currency_id: 15,
  //         rate: "0.3065801293155",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 16,
  //     code: "USD",
  //     name: "USD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3362,
  //         src_currency_id: 16,
  //         dest_currency_id: 16,
  //         rate: "1",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     code: "TWD",
  //     name: "TWD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3350,
  //         src_currency_id: 16,
  //         dest_currency_id: 17,
  //         rate: "30.469226081658",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 18,
  //     code: "CNY",
  //     name: "CNY",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3287,
  //         src_currency_id: 16,
  //         dest_currency_id: 18,
  //         rate: "6.9525557594972",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 19,
  //     code: "INR",
  //     name: "INR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3315,
  //         src_currency_id: 16,
  //         dest_currency_id: 19,
  //         rate: "82.719827942758",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 20,
  //     code: "MMK",
  //     name: "MMK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3331,
  //         src_currency_id: 16,
  //         dest_currency_id: 20,
  //         rate: "2105.2631578947",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 21,
  //     code: "ZAR",
  //     name: "ZAR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3361,
  //         src_currency_id: 16,
  //         dest_currency_id: 21,
  //         rate: "17.355085039917",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 22,
  //     code: "PHP",
  //     name: "PHP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3357,
  //         src_currency_id: 16,
  //         dest_currency_id: 22,
  //         rate: "55.719618877807",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 23,
  //     code: "VND",
  //     name: "VND",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3306,
  //         src_currency_id: 16,
  //         dest_currency_id: 23,
  //         rate: "23809.523809524",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 24,
  //     code: "SAR",
  //     name: "SAR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3345,
  //         src_currency_id: 16,
  //         dest_currency_id: 24,
  //         rate: "3.7614913560929",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 25,
  //     code: "UAH",
  //     name: "UAH",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3282,
  //         src_currency_id: 16,
  //         dest_currency_id: 25,
  //         rate: "36.568419512909",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 26,
  //     code: "UYU",
  //     name: "UYU",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3356,
  //         src_currency_id: 16,
  //         dest_currency_id: 26,
  //         rate: "38.626443663332",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 27,
  //     code: "GEL",
  //     name: "GEL",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3285,
  //         src_currency_id: 16,
  //         dest_currency_id: 27,
  //         rate: "2.6949964695546",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 28,
  //     code: "XOF",
  //     name: "XOF",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3301,
  //         src_currency_id: 16,
  //         dest_currency_id: 28,
  //         rate: "617.66522544781",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 29,
  //     code: "CAD",
  //     name: "CAD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3283,
  //         src_currency_id: 16,
  //         dest_currency_id: 29,
  //         rate: "1.3614981926111",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 30,
  //     code: "KGS",
  //     name: "KGS",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3321,
  //         src_currency_id: 16,
  //         dest_currency_id: 30,
  //         rate: "83.998320033599",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 31,
  //     code: "NGN",
  //     name: "NGN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3333,
  //         src_currency_id: 16,
  //         dest_currency_id: 31,
  //         rate: "449.03457566233",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 32,
  //     code: "BND",
  //     name: "BND",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3305,
  //         src_currency_id: 16,
  //         dest_currency_id: 32,
  //         rate: "1.3526985660043",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 33,
  //     code: "KZT",
  //     name: "KZT",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3292,
  //         src_currency_id: 16,
  //         dest_currency_id: 33,
  //         rate: "469.92481203008",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 34,
  //     code: "THB",
  //     name: "THB",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3349,
  //         src_currency_id: 16,
  //         dest_currency_id: 34,
  //         rate: "34.714989932653",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 35,
  //     code: "JPY",
  //     name: "JPY",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3281,
  //         src_currency_id: 16,
  //         dest_currency_id: 35,
  //         rate: "136.01741022851",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 36,
  //     code: "IDR",
  //     name: "IDR",
  //     type: 2,
  //     rates: [],
  //   },
  //   {
  //     id: 37,
  //     code: "NIO",
  //     name: "NIO",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3334,
  //         src_currency_id: 16,
  //         dest_currency_id: 37,
  //         rate: "36.197784695577",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 38,
  //     code: "EUR",
  //     name: "EUR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3276,
  //         src_currency_id: 16,
  //         dest_currency_id: 38,
  //         rate: "0.94188565508147",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 39,
  //     code: "SDG",
  //     name: "SDG",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3347,
  //         src_currency_id: 16,
  //         dest_currency_id: 39,
  //         rate: "582.75058275058",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 40,
  //     code: "TRY",
  //     name: "TRY",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3354,
  //         src_currency_id: 16,
  //         dest_currency_id: 40,
  //         rate: "18.666119127172",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 41,
  //     code: "DOP",
  //     name: "DOP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3312,
  //         src_currency_id: 16,
  //         dest_currency_id: 41,
  //         rate: "55.432372505543",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 42,
  //     code: "GHS",
  //     name: "GHS",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3308,
  //         src_currency_id: 16,
  //         dest_currency_id: 42,
  //         rate: "9.6999796300428",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 43,
  //     code: "RWF",
  //     name: "RWF",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3343,
  //         src_currency_id: 16,
  //         dest_currency_id: 43,
  //         rate: "1070.6638115632",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 44,
  //     code: "DKK",
  //     name: "DKK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3288,
  //         src_currency_id: 16,
  //         dest_currency_id: 44,
  //         rate: "7.0055974723804",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 45,
  //     code: "QAR",
  //     name: "QAR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3319,
  //         src_currency_id: 16,
  //         dest_currency_id: 45,
  //         rate: "3.6400036400036",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 46,
  //     code: "CRC",
  //     name: "CRC",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3323,
  //         src_currency_id: 16,
  //         dest_currency_id: 46,
  //         rate: "602.04695966285",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 47,
  //     code: "HKD",
  //     name: "HKD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3311,
  //         src_currency_id: 16,
  //         dest_currency_id: 47,
  //         rate: "7.782464550874",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 48,
  //     code: "BDT",
  //     name: "BDT",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3299,
  //         src_currency_id: 16,
  //         dest_currency_id: 48,
  //         rate: "103.8961038961",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 49,
  //     code: "BHD",
  //     name: "BHD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3300,
  //         src_currency_id: 16,
  //         dest_currency_id: 49,
  //         rate: "0.37699998492",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 50,
  //     code: "TZS",
  //     name: "TZS",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3351,
  //         src_currency_id: 16,
  //         dest_currency_id: 50,
  //         rate: "2320.1856148492",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 51,
  //     code: "UGX",
  //     name: "UGX",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3355,
  //         src_currency_id: 16,
  //         dest_currency_id: 51,
  //         rate: "3690.036900369",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 52,
  //     code: "BOB",
  //     name: "BOB",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3303,
  //         src_currency_id: 16,
  //         dest_currency_id: 52,
  //         rate: "6.9600077952087",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 53,
  //     code: "KES",
  //     name: "KES",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3320,
  //         src_currency_id: 16,
  //         dest_currency_id: 53,
  //         rate: "122.95585884667",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 54,
  //     code: "VES",
  //     name: "VES",
  //     type: 2,
  //     rates: [],
  //   },
  //   {
  //     id: 55,
  //     code: "CHF",
  //     name: "CHF",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3279,
  //         src_currency_id: 16,
  //         dest_currency_id: 55,
  //         rate: "0.93129813647243",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 56,
  //     code: "MAD",
  //     name: "MAD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3314,
  //         src_currency_id: 16,
  //         dest_currency_id: 56,
  //         rate: "10.446482669285",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 57,
  //     code: "PLN",
  //     name: "PLN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3280,
  //         src_currency_id: 16,
  //         dest_currency_id: 57,
  //         rate: "4.4400044400044",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 58,
  //     code: "PGK",
  //     name: "PGK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3340,
  //         src_currency_id: 16,
  //         dest_currency_id: 58,
  //         rate: "3.6166365280289",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 59,
  //     code: "OMR",
  //     name: "OMR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3337,
  //         src_currency_id: 16,
  //         dest_currency_id: 59,
  //         rate: "0.38508044330461",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 60,
  //     code: "JOD",
  //     name: "JOD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3316,
  //         src_currency_id: 16,
  //         dest_currency_id: 60,
  //         rate: "0.71000035500018",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 61,
  //     code: "BRL",
  //     name: "BRL",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3304,
  //         src_currency_id: 16,
  //         dest_currency_id: 61,
  //         rate: "5.3736861337403",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 62,
  //     code: "SEK",
  //     name: "SEK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3290,
  //         src_currency_id: 16,
  //         dest_currency_id: 62,
  //         rate: "10.274430025994",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 63,
  //     code: "NOK",
  //     name: "NOK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3289,
  //         src_currency_id: 16,
  //         dest_currency_id: 63,
  //         rate: "9.8495966590168",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 64,
  //     code: "AED",
  //     name: "AED",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3336,
  //         src_currency_id: 16,
  //         dest_currency_id: 64,
  //         rate: "3.6735938401178",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 65,
  //     code: "DZD",
  //     name: "DZD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3295,
  //         src_currency_id: 16,
  //         dest_currency_id: 65,
  //         rate: "137.28720483251",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 66,
  //     code: "BGN",
  //     name: "BGN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3302,
  //         src_currency_id: 16,
  //         dest_currency_id: 66,
  //         rate: "1.8421668303125",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 67,
  //     code: "TJS",
  //     name: "TJS",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3348,
  //         src_currency_id: 16,
  //         dest_currency_id: 67,
  //         rate: "10.204498142781",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 68,
  //     code: "RSD",
  //     name: "RSD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3346,
  //         src_currency_id: 16,
  //         dest_currency_id: 68,
  //         rate: "110.21712774165",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 69,
  //     code: "MOP",
  //     name: "MOP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3328,
  //         src_currency_id: 16,
  //         dest_currency_id: 69,
  //         rate: "8.0148113714144",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 70,
  //     code: "RON",
  //     name: "RON",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3344,
  //         src_currency_id: 16,
  //         dest_currency_id: 70,
  //         rate: "4.6474016377443",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 71,
  //     code: "MNT",
  //     name: "MNT",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3330,
  //         src_currency_id: 16,
  //         dest_currency_id: 71,
  //         rate: "3401.3605442177",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 72,
  //     code: "XAF",
  //     name: "XAF",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3307,
  //         src_currency_id: 16,
  //         dest_currency_id: 72,
  //         rate: "617.66522544781",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 73,
  //     code: "MXN",
  //     name: "MXN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3329,
  //         src_currency_id: 16,
  //         dest_currency_id: 73,
  //         rate: "19.699387349053",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 74,
  //     code: "TND",
  //     name: "TND",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3352,
  //         src_currency_id: 16,
  //         dest_currency_id: 74,
  //         rate: "3.0750023831268",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 75,
  //     code: "PYG",
  //     name: "PYG",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3341,
  //         src_currency_id: 16,
  //         dest_currency_id: 75,
  //         rate: "7246.3768115942",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 76,
  //     code: "CZK",
  //     name: "CZK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3291,
  //         src_currency_id: 16,
  //         dest_currency_id: 76,
  //         rate: "22.901112994092",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 77,
  //     code: "HUF",
  //     name: "HUF",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3293,
  //         src_currency_id: 16,
  //         dest_currency_id: 77,
  //         rate: "387.29666924864",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 78,
  //     code: "YER",
  //     name: "YER",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3317,
  //         src_currency_id: 16,
  //         dest_currency_id: 78,
  //         rate: "250.50100200401",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 79,
  //     code: "LAK",
  //     name: "LAK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3325,
  //         src_currency_id: 16,
  //         dest_currency_id: 79,
  //         rate: "17543.859649123",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 80,
  //     code: "LKR",
  //     name: "LKR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3359,
  //         src_currency_id: 16,
  //         dest_currency_id: 80,
  //         rate: "369.95930447651",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 81,
  //     code: "MDL",
  //     name: "MDL",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3286,
  //         src_currency_id: 16,
  //         dest_currency_id: 81,
  //         rate: "19.262997707703",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 82,
  //     code: "GTQ",
  //     name: "GTQ",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3309,
  //         src_currency_id: 16,
  //         dest_currency_id: 82,
  //         rate: "7.8850050858283",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 83,
  //     code: "EGP",
  //     name: "EGP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3313,
  //         src_currency_id: 16,
  //         dest_currency_id: 83,
  //         rate: "24.734720126642",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 84,
  //     code: "COP",
  //     name: "COP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3322,
  //         src_currency_id: 16,
  //         dest_currency_id: 84,
  //         rate: "4784.6889952153",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 85,
  //     code: "HNL",
  //     name: "HNL",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3310,
  //         src_currency_id: 16,
  //         dest_currency_id: 85,
  //         rate: "24.565196030264",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 86,
  //     code: "PEN",
  //     name: "PEN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3342,
  //         src_currency_id: 16,
  //         dest_currency_id: 86,
  //         rate: "3.8411013205706",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 87,
  //     code: "AZN",
  //     name: "AZN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3294,
  //         src_currency_id: 16,
  //         dest_currency_id: 87,
  //         rate: "1.7050007672503",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 88,
  //     code: "NZD",
  //     name: "NZD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3335,
  //         src_currency_id: 16,
  //         dest_currency_id: 88,
  //         rate: "1.5622534568763",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 89,
  //     code: "KHR",
  //     name: "KHR",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3318,
  //         src_currency_id: 16,
  //         dest_currency_id: 89,
  //         rate: "4115.2263374486",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 90,
  //     code: "LYD",
  //     name: "LYD",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3327,
  //         src_currency_id: 16,
  //         dest_currency_id: 90,
  //         rate: "4.8079928072428",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 91,
  //     code: "AFN",
  //     name: "AFN",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3298,
  //         src_currency_id: 16,
  //         dest_currency_id: 91,
  //         rate: "87.282883826482",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 92,
  //     code: "TMT",
  //     name: "TMT",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3353,
  //         src_currency_id: 16,
  //         dest_currency_id: 92,
  //         rate: "3.4909984604697",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 93,
  //     code: "LBP",
  //     name: "LBP",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3326,
  //         src_currency_id: 16,
  //         dest_currency_id: 93,
  //         rate: "30303.03030303",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  //   {
  //     id: 94,
  //     code: "HRK",
  //     name: "HRK",
  //     type: 2,
  //     rates: [
  //       {
  //         id: 3358,
  //         src_currency_id: 16,
  //         dest_currency_id: 94,
  //         rate: "7.0734864507367",
  //         rate_date: "2022-12-15",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="w-max h-full flex ">
      <h2 className="w-max h-max my-auto text-12 leadong-16 font-normal text-lightGray mr-[15px]">
        Fiat
      </h2>

      <div className="w-[120px] h-max min-h-[40px] border border-1 border-gray rounded-6 relative">
        <button
          type="button"
          onClick={fiat.length > 0 ? () => setActiveFiat(!activeFiat) : null}
          className={`flex justify-between h-[38px] w-[120px] my-auto text-lightGray rounded-0 text-14 leading-20 font-normal px-[12px]
               ${
                 activeFiat && "rounded-b-0 border-b border-b-1 border-b-gray"
               }  
               ${!activeFiat && "rounded-6"}
               `}
        >
          <p className="w-max h-max text-lightGray text-12 leading-14 font-normal my-auto">
            {fiat.length > 0 ? defaultFiat : "Load..."}
          </p>
          {fiat.length > 0 ? (
            <img
              src={chevronFilter}
              alt="chvrn"
              className="w-[16px] h-[16px] my-auto"
            />
          ) : null}
        </button>

        {activeFiat && (
          <div className="w-full h-[180px] overflow-scroll bg-white rounded-b-6 px-[10px] relative">
            <input
              type="text"
              placeholder="Search..."
              value={fiatValue}
              onChange={(e) => {
                setFiatValue(e.target.value.toUpperCase());
              }}
              className="h-[32px] border mx-auto my-[10px] w-[98px] pl-[6px] rounded-6 font-normal text-14 text-lightGray focus:ring-0 focus:outline-none"
            />
            {fiat.map((item) => (
              <div key={item.code}>
                {fiatValue.length === 0 ? (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => {
                      console.log(item, "currentFiat");
                      setCurrentFiat(item);
                      setDefaultFiat(item.name);
                      setFiatValue("");
                      setActiveFiat(false);
                    }}
                    className="w-full h-max text-gray test-14 font-normal my-[10px]"
                  >
                    {item.name}
                  </button>
                ) : (
                  <>
                    {item.name.startsWith(fiatValue) === true ? (
                      <button
                        type="button"
                        key={item.code}
                        onClick={() => {
                          console.log(item, "currentFiat");
                          setCurrentFiat(item);
                          setDefaultFiat(item.name);
                          setFiatValue("");
                          setActiveFiat(false);
                        }}
                        className="w-full h-max text-gray test-14 font-normal my-[10px] "
                      >
                        {item.name}
                      </button>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FiatDropdown;
