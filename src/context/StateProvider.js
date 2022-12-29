import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  // userData states
  const [user, setUser] = useState(null); // object - вошел, null - не вошел
  const [email, setEmail] = useState(""); // email при входе
  const [password, setPassword] = useState(""); // пароль при входе
  const [name, setName] = useState(""); // имя пользователя

  // mainData states
  const [config, setConfig] = useState(null);
  const [globalId, setGlobalId] = useState(0);
  const [currentId, setCurrentId] = useState(0);

  const [mode, setMode] = useState(true);
  const [fiat, setFiat] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const [payment, setPayment] = useState(null);
  const [orders, setOrders] = useState(null);
  const [fiatRate, setFiatRate] = useState("");
  const [makerProcent, setMakerProcent] = useState("");
  const [amount, setAmount] = useState("");

  const [currentFiat, setCurrentFiat] = useState(null);
  const [currentCrypto, setCurrentCrypto] = useState(null);
  const [currentPayment, setCurrentPayment] = useState(null);

  // visibleStates
  const [newFilterView, setNewFilterView] = useState(false);

  // const [secondaryMode, setSecondaryMode] = useState(true);
  // const [ordersView, setOrdersView] = useState(false);

  // // const [currentMode, setCurrentMode] = useState(true);
  // const [currentAmount, setCurrentAmount] = useState("");
  // const [secondaryAmount, setSecondaryAmount] = useState("");
  // const [currentFiat, setCurrentFiat] = useState(null);
  // const [secondaryFiat, setSecondaryFiat] = useState(null);
  // const [currentCrypto, setCurrentCrypto] = useState(null);
  // const [secondaryCrypto, setSecondaryCrypto] = useState(null);
  // const [currentPayment, setCurrentPayment] = useState(null);
  // const [secondaryPayment, setSecondaryPayment] = useState(null);
  // const [currentOrders, setCurrentOrders] = useState(null);
  // const [secondaryOrders, setSecondaryOrders] = useState(null);

  // const [makerProcent, setMakerProcent] = useState("");

  // const [currentOrder, setCurrentOrder] = useState(null);
  // const [fiatRate, setFiatRate] = useState("");

  // const [globalId, setGlobalId] = useState(0);
  // const [currentId, setCurrentId] = useState(0);

  // const [newFilterView, setNewFilterView] = useState(false);
  // const [config, setConfig] = useState(null);

  // const [totalProfit, setTotalProfit] = useState([]);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,

        config,
        setConfig,
        globalId,
        setGlobalId,
        currentId,
        setCurrentId,
        mode,
        setMode,
        fiat,
        setFiat,
        crypto,
        setCrypto,
        payment,
        setPayment,
        orders,
        setOrders,
        fiatRate,
        setFiatRate,
        makerProcent,
        setMakerProcent,
        amount,
        setAmount,

        currentFiat,
        setCurrentFiat,
        currentCrypto,
        setCurrentCrypto,
        currentPayment,
        setCurrentPayment,

        newFilterView,
        setNewFilterView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
