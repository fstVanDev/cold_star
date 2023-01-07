import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  // userData states
  const [user, setUser] = useState(null); // object - вошел, null - не вошел
  const [email, setEmail] = useState(""); // email при входе
  const [password, setPassword] = useState(""); // пароль при входе
  const [name, setName] = useState(""); // имя пользователя

  // mainData states

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
  const [currentOrder, setCurrentOrder] = useState(null);
  const [currentFee, setCurrentFee] = useState(null);

  // visibleStates
  const [newFilterView, setNewFilterView] = useState(false);
  const [ordersView, setOrdersView] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const [config, setConfig] = useState(null);

  return (
    <StateContext.Provider
      value={{
        editMode,
        setEditMode,
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
        currentFee,
        setCurrentFee,
        currentOrder,
        setCurrentOrder,

        currentFiat,
        setCurrentFiat,
        currentCrypto,
        setCurrentCrypto,
        currentPayment,
        setCurrentPayment,

        newFilterView,
        setNewFilterView,
        ordersView,
        setOrdersView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
