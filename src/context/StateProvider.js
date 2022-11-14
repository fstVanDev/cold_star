import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  // main states
  const [user, setUser] = useState(false); // true - вошел в систему, false - не вошел в систему
  const [login, setLogin] = useState(""); // хранить email пользователя при входе
  const [password, setPassword] = useState(""); // хранить пароль пользователя при входе

  const [csrf, setCsrf] = useState(null);

  const [viewSidebar, setViewSidebar] = useState(false); // true - Sidebar виден, false - скрыт

  // modals-view states
  const [loginView, setLoginView] = useState(false); // true - показать модальное окно входа, false - скрыть
  const [registerView, setRegisterView] = useState(false); // true - показать модальное окно регистрации, false - скрыть
  const [filterView, setFilterView] = useState(false); // true - показать модальное окно фильтров, false - скрыть

  // first-filter states
  const [modeFirst, setModeFirst] = useState(2);
  const [fiatIdFirst, setfiatIdFirst] = useState(null); // id с выбранными фиатными валютами
  const [cryptoIdFirst, setcryptoIdFirst] = useState(null); // id с выбранными крипто валютами
  const [tradeIdFirst, settradeIdFirst] = useState([]); // массив с выбранными способами оплаты
  const [priceFirst, setPriceFirst] = useState(""); // цена указанная пользователем
  const [tradeFirstArray, setTradeFirstArray] = useState(null); // массив со всеми банками и способами оплаты при покупке
  const [ordersArrayFirst, setOrdersArrayFirst] = useState(null); //  массив со всеми ордерами по первому фильтру

  // second-filter states
  const [modeSecond, setModeSecond] = useState(1);
  const [fiatIdSecond, setFiatIdSecond] = useState(null);
  const [cryptoIdSecond, setCryptoIdSecond] = useState(null);
  const [tradeIdSecond, setTradeIdSecond] = useState([]);
  const [priceSecond, setPriceSecond] = useState("");
  const [tradeSecondArray, setTradeSecondArray] = useState(null); // массив со всеми банками и способами оплаты при продаже
  const [ordersArraySecond, setOrdersArraySecond] = useState(null); // массив со всеми ордерами по второму фильтру

  //requests
  const [fiatArray, setFiatArray] = useState(null); // массив со всеми фиатными валютами
  const [cryptoArray, setCryptoArray] = useState(null); // массив со всеми крипто валютами

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        login,
        setLogin,
        password,
        setPassword,
        csrf,
        setCsrf,

        viewSidebar,
        setViewSidebar,

        modeFirst,
        setModeFirst,
        modeSecond,
        setModeSecond,

        loginView,
        setLoginView,
        registerView,
        setRegisterView,
        filterView,
        setFilterView,

        fiatIdFirst,
        setfiatIdFirst,
        cryptoIdFirst,
        setcryptoIdFirst,
        tradeIdFirst,
        settradeIdFirst,
        priceFirst,
        setPriceFirst,
        ordersArraySecond,
        setOrdersArraySecond,
        ordersArrayFirst,
        setOrdersArrayFirst,
        fiatIdSecond,
        setFiatIdSecond,
        cryptoIdSecond,
        setCryptoIdSecond,
        tradeIdSecond,
        setTradeIdSecond,
        priceSecond,
        setPriceSecond,

        fiatArray,
        setFiatArray,
        cryptoArray,
        setCryptoArray,
        tradeFirstArray,
        setTradeFirstArray,
        tradeSecondArray,
        setTradeSecondArray,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
