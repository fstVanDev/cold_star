import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null); // object - вошел, null - не вошел
  const [tradeView, setTradeView] = useState(false);
  const [loginView, setLoginView] = useState(false);
  const [registrationView, setRegistrationView] = useState(false);

  // user states
  // const [user, setUser] = useState(null); // true - вошел в систему, false - не вошел в систему
  const [email, setEmail] = useState(""); // email при входе
  const [password, setPassword] = useState(""); // пароль при входе
  const [name, setName] = useState(""); // имя пользователя

  // views states
  const [accountView, setAccountView] = useState(false); //  показывает модальное окно регистрации или логина true - показать, false - скрыть
  const [orderView, setOrderView] = useState(true); // currentOrder in Main for dropdown
  const [chain, setChain] = useState([]); //  массив со всей цепочкой филтров

  // data states
  const [globalId, setGlobalId] = useState(1); // для записи в local storage
  const [currentId, setCurrentId] = useState(0); // для получения из local storage

  const [fiat, setFiat] = useState(Array); // массив со всеми фиатами
  const [crypto, setCrypto] = useState(Array); // массив со всеми криптовалютами
  const [payment, setPayment] = useState(null); // массив со всеми банками
  const [orders, setOrders] = useState(Array); // массив с ордерами [{orders1}, {orders2}, {orders3}]
  const [amount, setAmount] = useState(""); // выбранный польхователем amount

  // const [currentAmount, setCurrentAmount] = useState(""); //массив с выбранным amount значением пользователя в фильтрах
  const [currentFiat, setCurrentFiat] = useState(null); // Объект с выбранным пользователем фиатом в фильтрах
  const [currentCrypto, setCurrentCrypto] = useState(null); // массив с выбранными пользователем криптовалютами в фильтрах
  const [currentPayment, setCurrentPayment] = useState(null); // масссив с выбранными пользователем банками в каждом звене цепи [{}, {}, {}]
  const [mode, setMode] = useState(true); // массив с выбранными пользователем mode [2, 1, 2] 2 - покупка, 1 - продажа. исполуется в цепочке и в фильтрах
  const [currentOrders, setCurrentOrders] = useState(Array); // массив с выбранными currentOrder используется в цепочке и в Main

  return (
    <StateContext.Provider
      value={{
        tradeView,
        setTradeView,
        loginView,
        setLoginView,
        registrationView,
        setRegistrationView,

        globalId,
        setGlobalId,
        currentId,
        setCurrentId,
        amount,
        setAmount,
        // currentAmount,
        // setCurrentAmount,
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
        payment,
        setPayment,
        orders,
        setOrders,
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
