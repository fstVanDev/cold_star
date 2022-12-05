import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  // user states
  const [user, setUser] = useState(false); // true - вошел в систему, false - не вошел в систему
  const [email, setEmail] = useState(""); // email при входе
  const [password, setPassword] = useState(""); // пароль при входе
  const [name, setName] = useState(""); // имя пользователя

  // views states
  const [accountView, setAccountView] = useState(false); //  показывает модальное окно регистрации или логина true - показать, false - скрыть
  const [orderView, setOrderView] = useState(true); // currentOrder in Main for dropdown
  const [chain, setChain] = useState([]); //  массив со всей цепочкой филтров

  // data states
  const [fiat, setFiat] = useState(Array); // массив со всеми фиатами
  const [crypto, setCrypto] = useState(Array); // массив со всеми криптовалютами
  const [trade, setTrade] = useState([]); // массив со всеми банками
  const [orders, setOrders] = useState([]); // массив с ордерами [{orders1}, {orders2}, {orders3}]

  const [userAmount, setUserAmount] = useState(""); // выбранным amount значением пользователя в фильтрах
  const [currentFiat, setCurrentFiat] = useState(Array); // массив с выбранными пользователем фиатами в фильтрах
  const [currentCrypto, setCurrentCrypto] = useState(Array); // массив с выбранными пользователем криптовалютами в фильтрах
  const [currentTrade, setCurrentTrade] = useState([]); // масссив с выбранными пользователем банками в каждом звене цепи [{}, {}, {}]
  const [mode, setMode] = useState([]); // массив с выбранными пользователем mode [true, false, true] true - покупка, false - продажа. исполуется в цепочке и в фильтрах
  const [currentOrders, setCurrentOrders] = useState([]); // массив с выбранными currentOrder используется в цепочке и в Main

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
        accountView,
        setAccountView,
        orderView,
        setOrderView,
        chain,
        setChain,
        fiat,
        setFiat,
        crypto,
        setCrypto,
        trade,
        setTrade,
        orders,
        setOrders,
        userAmount,
        setUserAmount,
        currentFiat,
        setCurrentFiat,
        currentCrypto,
        setCurrentCrypto,
        currentTrade,
        setCurrentTrade,
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
