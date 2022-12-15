import React from "react";
import { localObject } from "../data/mainData";

export const useSetLocalStorage = ({
  globalId,
  mode,
  amount,
  currentFiat,
  currentCrypto,
  currentPayment,
  orders,
}) => {
  const storage = window.localStorage;
  const array = [];
  const locaObject = {
    mode: mode,
    amount: amount,
    defaultAmount: 500,
    fiat: currentFiat,
    crypto: currentCrypto,
    payments: currentPayment,
    orders: orders,
  };

  // if (storage.length === 0) {
  //   storage.setItem(`${globalId}`);
  // }
};
