import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import CryptoDrowdown from "./filterComponents/CryptoDrowdown";
import Mode from "./filterComponents/Mode";
import Amount from "./filterComponents/Amount";
import FiatDropdown from "./filterComponents/FiatDropdown";
import PaymentDropdown from "./filterComponents/PaymentDropdown";
import { getTradeMethods, getOrders } from "../../data/Requests";
import RegionDropdown from "./filterComponents/RegionDropdown";
import Refresh from "./filterComponents/Refresh";

const FilterView = () => {
  const { fiat, crypto, globalId, setGlobalId } = useContext(StateContext);

  const [localMode, setLocalMode] = useState(true);
  const [localAmount, setLocalAmount] = useState("");
  const [localFiat, setLocalFiat] = useState(null);
  const [localCrypto, setLocalCrypto] = useState(null);
  const [localPayment, setLocalPayment] = useState(null);
  const [localOrders, setLocalOrders] = useState(Array);

  useEffect(() => {
    if (localCrypto !== null && localFiat !== null) {
      getTradeMethods(localMode, localFiat, localCrypto, setLocalPayment);
    }
  }, [localFiat, localCrypto]);

  useEffect(() => {
    if (localPayment !== null) {
      getOrders(
        localMode,
        localFiat,
        localCrypto,
        localPayment,
        localAmount,
        setLocalOrders
      );
    }
  }, [localPayment]);

  useEffect(() => {
    if (
      localCrypto !== null &&
      localFiat !== null &&
      localPayment !== null &&
      localOrders.length > 0
    ) {
      const amont = localAmount.length > 0 ? localAmount : 500;
      const localObject = {
        mode: localMode,
        amount: amont,
        fiat: localFiat,
        crypto: localCrypto,
        payment: localPayment,
        orders: localOrders,
      };
      const storage = window.localStorage;
      setGlobalId(globalId + 1);
      console.log(2222222);
      storage.setItem(`${globalId}`, JSON.stringify(localObject));
    }
  }, [
    localCrypto,
    localFiat,
    localPayment,
    localMode,
    localAmount,
    localOrders,
  ]);

  return (
    <div className="2xl:w-[1290px] mx-auto h-max py-[30px] mt-[70px] mb-[30px]">
      <div className="flex justify-between w-full h-[60px] rounded-15 bg-white border border-1 border-gray px-[30px] py-[10px]">
        {/* Mode  */}
        <Mode mode={localMode} setMode={setLocalMode} />

        {/* Amount */}
        <Amount amount={localAmount} setAmount={setLocalAmount} />

        {/* Fiat */}
        <FiatDropdown fiat={fiat} setCurrentFiat={setLocalFiat} />

        {/* Crypto */}
        <CryptoDrowdown crypto={crypto} setCurrentCrypto={setLocalCrypto} />

        {/* Payment */}
        <PaymentDropdown
          payment={localPayment}
          currentFiat={localFiat}
          currentCrypto={localCrypto}
          setCurrentPayment={setLocalPayment}
        />

        {/* Region */}
        <RegionDropdown />

        {/* Refresh */}
        <Refresh
          currentCrypto={localCrypto}
          currentFiat={localFiat}
          setOrders={setLocalOrders}
          amount={localAmount}
          currentPayment={localPayment}
          orders={localOrders}
          mode={localMode}
        />
      </div>
    </div>
  );
};

export default FilterView;
