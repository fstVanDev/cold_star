import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { plusOrders } from "../images";
import { feeFunction } from "../data/mainData";

const SecondaryOrders = ({ price2 }) => {
  const {
    mode,
    currentAmount,
    currentFiat,
    currentCrypto,
    currentPayment,
    currentOrders,
    globalId,
    config,
    setConfig,
    setNewFilterView,
    setCurrentOrders,
    secondaryOrders,
    setSecondaryOrders,
    ordersView,
    setCurrentOrder,
    setOrdersView,
    currentOrder,
  } = useContext(StateContext);
  const [order, setOrder] = useState(null);

  const data = [
    {
      id: 476584,
      trade_user_id: 24410,
      trade_platform_id: 1,
      external_id: "11436627105550536704",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "475.85",
      amount: "1349.81",
      commission: "0.0007",
      min_trans_amount: "100000",
      max_trans_amount: "2000000",
      created_at: "2022-12-15T08:52:04.000000Z",
      updated_at: "2022-12-15T19:27:06.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 476584,
            trade_order_method_id: 155,
          },
        },
        {
          id: 156,
          trade_platform_id: 1,
          external_id: "ForteBank",
          name: "ForteBank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 476584,
            trade_order_method_id: 156,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 476584,
            trade_order_method_id: 166,
          },
        },
        {
          id: 152,
          trade_platform_id: 1,
          external_id: "AltynBank",
          name: "Altyn Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 476584,
            trade_order_method_id: 152,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 24410,
        trade_platform_id: 1,
        external_id: "s995e2fda172539759a59531616d930c5",
        name: "FastCashFinance",
        created_at: "2022-11-07T13:32:51.000000Z",
        updated_at: "2022-12-15T19:27:06.000000Z",
        month_orders_count: 1042,
        month_finish_rate: "0.981",
        type: 2,
      },
    },
    {
      id: 103125,
      trade_user_id: 39011,
      trade_platform_id: 1,
      external_id: "11423575965130256384",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "475.81",
      amount: "2041.4",
      commission: "0.0007",
      min_trans_amount: "50000",
      max_trans_amount: "4410000",
      created_at: "2022-11-10T15:50:53.000000Z",
      updated_at: "2022-12-15T19:27:06.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 103125,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 39011,
        trade_platform_id: 1,
        external_id: "sa2598eaef0fa3cad8203279909613771",
        name: "bars",
        created_at: "2022-11-10T15:21:38.000000Z",
        updated_at: "2022-12-15T19:22:06.000000Z",
        month_orders_count: 1811,
        month_finish_rate: "0.991",
        type: 2,
      },
    },
    {
      id: 489858,
      trade_user_id: 18293,
      trade_platform_id: 1,
      external_id: "11436769940550656000",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "474.13",
      amount: "2111",
      commission: "0.0008",
      min_trans_amount: "100000",
      max_trans_amount: "5500000",
      created_at: "2022-12-15T18:17:28.000000Z",
      updated_at: "2022-12-15T19:27:07.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 489858,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 18293,
        trade_platform_id: 1,
        external_id: "s8d60a031d5f5388199b4509d86d44fd7",
        name: "BTC_kz",
        created_at: "2022-11-07T10:01:12.000000Z",
        updated_at: "2022-12-15T19:02:36.000000Z",
        month_orders_count: 1900,
        month_finish_rate: "0.978",
        type: 2,
      },
    },
    {
      id: 142310,
      trade_user_id: 3668,
      trade_platform_id: 1,
      external_id: "11428503478128152576",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "473.5",
      amount: "1490.1",
      commission: "0.0008",
      min_trans_amount: "5000",
      max_trans_amount: "1000000",
      created_at: "2022-11-28T16:51:08.000000Z",
      updated_at: "2022-12-15T19:27:32.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 142310,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 3668,
        trade_platform_id: 1,
        external_id: "sa1668dbb608a3cb0b75f5d88bf030957",
        name: "DanKub2711",
        created_at: "2022-11-04T09:08:05.000000Z",
        updated_at: "2022-12-15T19:27:07.000000Z",
        month_orders_count: 957,
        month_finish_rate: "0.998",
        type: 2,
      },
    },
    {
      id: 295715,
      trade_user_id: 459,
      trade_platform_id: 1,
      external_id: "11432008176874598400",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "473.3",
      amount: "6707.05",
      commission: "0.0007",
      min_trans_amount: "10000",
      max_trans_amount: "4123456",
      created_at: "2022-12-04T11:06:58.000000Z",
      updated_at: "2022-12-15T19:27:32.000000Z",
      trade_methods: [
        {
          id: 160,
          trade_platform_id: 1,
          external_id: "CenterCreditBank",
          name: "CenterCredit Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 295715,
            trade_order_method_id: 160,
          },
        },
        {
          id: 199,
          trade_platform_id: 1,
          external_id: "HomeCreditKazakhstan",
          name: "Home Credit Kazakhstan",
          created_at: "2022-11-04T09:07:46.000000Z",
          updated_at: "2022-11-04T09:07:46.000000Z",
          pivot: {
            trade_order_id: 295715,
            trade_order_method_id: 199,
          },
        },
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 295715,
            trade_order_method_id: 155,
          },
        },
        {
          id: 4,
          trade_platform_id: 1,
          external_id: "BANK",
          name: "Bank Transfer",
          created_at: "2022-11-04T09:07:43.000000Z",
          updated_at: "2022-11-04T09:07:43.000000Z",
          pivot: {
            trade_order_id: 295715,
            trade_order_method_id: 4,
          },
        },
        {
          id: 164,
          trade_platform_id: 1,
          external_id: "HalykBank",
          name: "Halyk Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 295715,
            trade_order_method_id: 164,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 459,
        trade_platform_id: 1,
        external_id: "s34455a2e59c035b7aaa603eaf96d3f4a",
        name: "IV1972",
        created_at: "2022-11-04T09:07:45.000000Z",
        updated_at: "2022-12-15T18:22:06.000000Z",
        month_orders_count: 313,
        month_finish_rate: "1",
        type: 2,
      },
    },
    {
      id: 87134,
      trade_user_id: 1663,
      trade_platform_id: 1,
      external_id: "11392830552302137344",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "472.67",
      amount: "15043.45",
      commission: "0.0007",
      min_trans_amount: "450000",
      max_trans_amount: "3000000",
      created_at: "2022-11-10T13:20:33.000000Z",
      updated_at: "2022-12-15T19:27:09.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 87134,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 1663,
        trade_platform_id: 1,
        external_id: "s71270cc768f83e0aab4d90c507b6509c",
        name: "P2Pmaker",
        created_at: "2022-11-04T09:07:52.000000Z",
        updated_at: "2022-12-15T19:17:07.000000Z",
        month_orders_count: 194,
        month_finish_rate: "1",
        type: 2,
      },
    },
    {
      id: 470133,
      trade_user_id: 25058,
      trade_platform_id: 1,
      external_id: "11436362626735370240",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "472",
      amount: "12000",
      commission: "0.0008",
      min_trans_amount: "500000",
      max_trans_amount: "9000000",
      created_at: "2022-12-15T06:27:11.000000Z",
      updated_at: "2022-12-15T19:27:09.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 470133,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 25058,
        trade_platform_id: 1,
        external_id: "s06134e156397349e92be558d99ac62ec",
        name: "Usersab",
        created_at: "2022-11-07T14:10:39.000000Z",
        updated_at: "2022-12-15T16:47:06.000000Z",
        month_orders_count: 913,
        month_finish_rate: "0.983",
        type: 2,
      },
    },
    {
      id: 109413,
      trade_user_id: 496,
      trade_platform_id: 1,
      external_id: "11423247020790317056",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "471.1",
      amount: "9217.9",
      commission: "0.0007",
      min_trans_amount: "100000",
      max_trans_amount: "4000000",
      created_at: "2022-11-10T18:40:46.000000Z",
      updated_at: "2022-12-15T19:27:09.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 109413,
            trade_order_method_id: 155,
          },
        },
        {
          id: 4,
          trade_platform_id: 1,
          external_id: "BANK",
          name: "Bank Transfer",
          created_at: "2022-11-04T09:07:43.000000Z",
          updated_at: "2022-11-04T09:07:43.000000Z",
          pivot: {
            trade_order_id: 109413,
            trade_order_method_id: 4,
          },
        },
        {
          id: 178,
          trade_platform_id: 1,
          external_id: "FreedomBank",
          name: "Freedom Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 109413,
            trade_order_method_id: 178,
          },
        },
        {
          id: 152,
          trade_platform_id: 1,
          external_id: "AltynBank",
          name: "Altyn Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 109413,
            trade_order_method_id: 152,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 109413,
            trade_order_method_id: 166,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 496,
        trade_platform_id: 1,
        external_id: "sad7120913613365aafd2cb1aa6e9d7fc",
        name: "AkTore27",
        created_at: "2022-11-04T09:07:46.000000Z",
        updated_at: "2022-12-15T18:22:06.000000Z",
        month_orders_count: 977,
        month_finish_rate: "0.996",
        type: 2,
      },
    },
    {
      id: 438,
      trade_user_id: 423,
      trade_platform_id: 1,
      external_id: "11397230746329530368",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "467.15",
      amount: "19000",
      commission: "0.0008",
      min_trans_amount: "300000",
      max_trans_amount: "4000000",
      created_at: "2022-11-04T09:07:45.000000Z",
      updated_at: "2022-12-15T19:27:30.000000Z",
      trade_methods: [
        {
          id: 160,
          trade_platform_id: 1,
          external_id: "CenterCreditBank",
          name: "CenterCredit Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 438,
            trade_order_method_id: 160,
          },
        },
        {
          id: 152,
          trade_platform_id: 1,
          external_id: "AltynBank",
          name: "Altyn Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 438,
            trade_order_method_id: 152,
          },
        },
        {
          id: 164,
          trade_platform_id: 1,
          external_id: "HalykBank",
          name: "Halyk Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 438,
            trade_order_method_id: 164,
          },
        },
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 438,
            trade_order_method_id: 155,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 438,
            trade_order_method_id: 166,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 423,
        trade_platform_id: 1,
        external_id: "sdfb89809dd203355941bd0804e7c9efd",
        name: "ОБМЕННИК USDT 24:7",
        created_at: "2022-11-04T09:07:45.000000Z",
        updated_at: "2022-12-15T18:47:10.000000Z",
        month_orders_count: 311,
        month_finish_rate: "0.96",
        type: 2,
      },
    },
    {
      id: 42795,
      trade_user_id: 15101,
      trade_platform_id: 1,
      external_id: "11414860138816757760",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "450",
      amount: "998091.81",
      commission: "0.0008",
      min_trans_amount: "5000",
      max_trans_amount: "300000",
      created_at: "2022-11-07T10:10:59.000000Z",
      updated_at: "2022-12-15T19:27:35.000000Z",
      trade_methods: [
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 42795,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 15101,
        trade_platform_id: 1,
        external_id: "s8058ba72ed31340faef2981ed038ca0e",
        name: "blitz",
        created_at: "2022-11-07T09:51:06.000000Z",
        updated_at: "2022-12-15T18:22:16.000000Z",
        month_orders_count: 455,
        month_finish_rate: "0.981",
        type: 2,
      },
    },
    {
      id: 5795,
      trade_user_id: 493,
      trade_platform_id: 1,
      external_id: "11366057108512186368",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "448",
      amount: "654321",
      commission: "0.0007",
      min_trans_amount: "100000",
      max_trans_amount: "10000000",
      created_at: "2022-11-04T09:08:09.000000Z",
      updated_at: "2022-12-15T19:27:35.000000Z",
      trade_methods: [
        {
          id: 173,
          trade_platform_id: 1,
          external_id: "EurasianBank",
          name: "Eurasian Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 5795,
            trade_order_method_id: 173,
          },
        },
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 5795,
            trade_order_method_id: 155,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 5795,
            trade_order_method_id: 166,
          },
        },
        {
          id: 156,
          trade_platform_id: 1,
          external_id: "ForteBank",
          name: "ForteBank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 5795,
            trade_order_method_id: 156,
          },
        },
        {
          id: 160,
          trade_platform_id: 1,
          external_id: "CenterCreditBank",
          name: "CenterCredit Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 5795,
            trade_order_method_id: 160,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 493,
        trade_platform_id: 1,
        external_id: "s4923dc33ddd738f9bd8869a354feeccf",
        name: "Coin Mart",
        created_at: "2022-11-04T09:07:46.000000Z",
        updated_at: "2022-12-15T14:47:42.000000Z",
        month_orders_count: 211,
        month_finish_rate: "1",
        type: 2,
      },
    },
    {
      id: 145205,
      trade_user_id: 619,
      trade_platform_id: 1,
      external_id: "11429259341320630272",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "401",
      amount: "10000",
      commission: "0.0007",
      min_trans_amount: "100000",
      max_trans_amount: "5500000",
      created_at: "2022-11-28T16:51:17.000000Z",
      updated_at: "2022-12-15T19:27:36.000000Z",
      trade_methods: [
        {
          id: 160,
          trade_platform_id: 1,
          external_id: "CenterCreditBank",
          name: "CenterCredit Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 145205,
            trade_order_method_id: 160,
          },
        },
        {
          id: 173,
          trade_platform_id: 1,
          external_id: "EurasianBank",
          name: "Eurasian Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 145205,
            trade_order_method_id: 173,
          },
        },
        {
          id: 164,
          trade_platform_id: 1,
          external_id: "HalykBank",
          name: "Halyk Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 145205,
            trade_order_method_id: 164,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 145205,
            trade_order_method_id: 166,
          },
        },
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 145205,
            trade_order_method_id: 155,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 619,
        trade_platform_id: 1,
        external_id: "s57b85b1e7c6b3322ab6e22365dc67c85",
        name: "mrilja",
        created_at: "2022-11-04T09:07:46.000000Z",
        updated_at: "2022-12-15T18:52:09.000000Z",
        month_orders_count: 1043,
        month_finish_rate: "1",
        type: 2,
      },
    },
    {
      id: 22809,
      trade_user_id: 978,
      trade_platform_id: 1,
      external_id: "11375536710367514624",
      type: 2,
      asset_id: 5,
      fiat_id: 33,
      status: 1,
      price: "400",
      amount: "100000",
      commission: "0.0007",
      min_trans_amount: "100000",
      max_trans_amount: "10000000",
      created_at: "2022-11-04T09:12:12.000000Z",
      updated_at: "2022-12-15T19:27:36.000000Z",
      trade_methods: [
        {
          id: 160,
          trade_platform_id: 1,
          external_id: "CenterCreditBank",
          name: "CenterCredit Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 22809,
            trade_order_method_id: 160,
          },
        },
        {
          id: 155,
          trade_platform_id: 1,
          external_id: "KaspiBank",
          name: "Kaspi Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 22809,
            trade_order_method_id: 155,
          },
        },
        {
          id: 156,
          trade_platform_id: 1,
          external_id: "ForteBank",
          name: "ForteBank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 22809,
            trade_order_method_id: 156,
          },
        },
        {
          id: 166,
          trade_platform_id: 1,
          external_id: "JysanBank",
          name: "Jysan Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 22809,
            trade_order_method_id: 166,
          },
        },
        {
          id: 152,
          trade_platform_id: 1,
          external_id: "AltynBank",
          name: "Altyn Bank",
          created_at: "2022-11-04T09:07:45.000000Z",
          updated_at: "2022-11-04T09:07:45.000000Z",
          pivot: {
            trade_order_id: 22809,
            trade_order_method_id: 152,
          },
        },
      ],
      asset: {
        id: 5,
        code: "USDT",
        name: "USDT",
        type: 1,
      },
      fiat: {
        id: 33,
        code: "KZT",
        name: "KZT",
        type: 2,
      },
      trade_user: {
        id: 978,
        trade_platform_id: 1,
        external_id: "s6ad820d8f0ae3dad928796d0d1a3caf2",
        name: "Coin_Commerce",
        created_at: "2022-11-04T09:07:48.000000Z",
        updated_at: "2022-12-15T19:17:06.000000Z",
        month_orders_count: 875,
        month_finish_rate: "1",
        type: 2,
      },
    },
  ];

  const [fee, setFee] = useState(0);
  const [activeIndex, setACtiveIndex] = useState(null);

  return (
    <>
      {config.length >= 2 && (
        <div className="bg-white px-[10px] rounded-b-20 pb-[10px]">
          <div className="bg-main rounded-15">
            {config[config.length - 1].orders.map((item, index) => (
              <>
                <div className="w-max h-max" key={index}>
                  <div
                    className="2xl:w-[1050px] h-[88px] flex justify-between py-[12px] px-[20px]"
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
                    <div className="grid w-max h-max my-auto">
                      <p className="text-14 leading-20 font-bold text-black mb-[6px]">
                        {item.trade_user.name}
                      </p>
                      <div className="flex w-max h-max my-auto text-12 leading-16 font-normal text-gray">
                        <p>
                          {`${item.trade_user.month_orders_count} orders  /  
                ${
                  Number(item.trade_user.month_finish_rate).toFixed(2) * 100
                }% completion`}
                        </p>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex w-max h-max my-auto">
                      <p className="text-black text-18 font-bold leading-24">
                        {item.price}
                      </p>
                      <p className="text-lightGray text-14 leading-20 font-bold w-max h-max mt-auto ml-[5px]">
                        {item.fiat.name}
                      </p>
                    </div>
                    {/* Available */}
                    <div className="grid w-max h-max my-auto">
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
                    <div className="h-full my-auto grid py-auto overflow-y-auto w-[170px]">
                      <div className="w-max h-max grid m-auto">
                        {item.trade_methods.map((obj, index) => (
                          <div
                            key={index}
                            className={`w-max h-max content-center bg-yellow rounded-2 px-[12px] ${
                              item.trade_methods.length === 1
                                ? "my-auto"
                                : "mb-[5px]"
                            } py-[4px] mx-auto`}
                          >
                            <p className="text-orange font-normal text-12 leading-16 w-max">
                              {obj.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fees */}
                    <div className="max-w-[120px] h-max flex my-auto">
                      <p className="text-green text-18 leading-24 font-bold text-center">
                        {feeFunction(
                          Number(config[config.length - 2].fiat.rates[0].rate),
                          Number(config[config.length - 1].fiat.rates[0].rate),
                          Number(price2),
                          Number(item.price)
                        )}
                        %
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className={`w-[50px] h-[50px]  border border-1  ${
                        activeIndex === index
                          ? "border-green bg-main"
                          : "border-gray bg-white"
                      } rounded-6 my-auto flex`}
                      onClick={() => {
                        setCurrentOrder(item);
                        setACtiveIndex(index);
                        setOrder(item);
                        if (
                          currentFiat !== null &&
                          currentCrypto !== null &&
                          currentPayment !== null
                        ) {
                          const localObject = {
                            id: globalId,
                            mode: mode,
                            amount: currentAmount,
                            defaultAmount:
                              currentAmount.length === 0 ? false : true,
                            fiat: currentFiat,
                            crypto: currentCrypto,
                            payments: currentPayment,
                            orders: currentOrders,
                            currentOrder: item,
                          };

                          let arr = config;

                          arr.map((obj, index) => {
                            if (
                              obj.id === globalId &&
                              arr[arr.length - 1] !== globalId
                            ) {
                              if (
                                JSON.stringify(obj) !==
                                JSON.stringify(localObject)
                              ) {
                                arr.splice(index, 1);
                                const insert = function (array, indexi, obje) {
                                  return [
                                    ...array.slice(0, indexi),
                                    obje,
                                    ...array.slice(indexi),
                                  ];
                                };
                                arr = insert(arr, index, localObject);
                                console.log(arr);
                                setConfig(arr);
                              }
                            }
                          });
                        }
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
                {config.length - 1 === index ? null : (
                  <div className="2xl:w-[1010px] h-[1px] bg-secondary mx-auto" />
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryOrders;
