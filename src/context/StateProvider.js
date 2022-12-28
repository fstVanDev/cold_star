import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null); // object - вошел, null - не вошел

  const [email, setEmail] = useState(""); // email при входе
  const [password, setPassword] = useState(""); // пароль при входе
  const [name, setName] = useState(""); // имя пользователя

  const [mode, setMode] = useState(true);
  const [secondaryMode, setSecondaryMode] = useState(true);
  const [fiat, setFiat] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const [payment, setPayment] = useState(null);

  const [ordersView, setOrdersView] = useState(false);

  // const [currentMode, setCurrentMode] = useState(true);
  const [currentAmount, setCurrentAmount] = useState("");
  const [secondaryAmount, setSecondaryAmount] = useState("");
  const [currentFiat, setCurrentFiat] = useState(null);
  const [secondaryFiat, setSecondaryFiat] = useState(null);
  const [currentCrypto, setCurrentCrypto] = useState(null);
  const [secondaryCrypto, setSecondaryCrypto] = useState(null);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [secondaryPayment, setSecondaryPayment] = useState(null);
  const [currentOrders, setCurrentOrders] = useState(null);
  const [secondaryOrders, setSecondaryOrders] = useState(null);
  const [makerProcent, setMakerProcent] = useState("");

  const [currentOrder, setCurrentOrder] = useState(null);
  const [fiatRate, setFiatRate] = useState(0);

  const [globalId, setGlobalId] = useState(0);
  const [currentId, setCurrentId] = useState(0);

  const [newFilterView, setNewFilterView] = useState(false);
  const [config, setConfig] = useState(null);

  return (
    <StateContext.Provider
      value={{
        fiatRate,
        setFiatRate,
        makerProcent,
        setMakerProcent,
        ordersView,
        setOrdersView,
        secondaryAmount,
        setSecondaryAmount,
        secondaryFiat,
        setSecondaryFiat,
        secondaryCrypto,
        setSecondaryCrypto,
        secondaryPayment,
        setSecondaryPayment,
        secondaryMode,
        setSecondaryMode,
        currentOrder,
        setCurrentOrder,
        config,
        setConfig,
        newFilterView,
        setNewFilterView,
        globalId,
        setGlobalId,
        currentAmount,
        setCurrentAmount,
        currentId,
        setCurrentId,
        secondaryOrders,
        setSecondaryOrders,
        // currentMode,
        // setCurrentMode,
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,

        fiat,
        setFiat,
        crypto,
        setCrypto,
        payment,
        setPayment,

        currentFiat,
        setCurrentFiat,
        currentCrypto,
        setCurrentCrypto,
        currentPayment,
        setCurrentPayment,
        mode,
        setMode,
        currentOrders,
        setCurrentOrders,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
