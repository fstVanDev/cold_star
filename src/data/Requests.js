import axios from "axios";

export async function getCsrf(setStatus, setUser, setLogin, setName) {
  var config = {
    method: "get",
    url: "https://top2pro.com/sanctum/csrf-cookie",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response, "csrf");

      getUser(setStatus, setUser, setLogin, setName);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUser(setStatus, setUser, setLogin, setName) {
  var config = {
    method: "get",
    url: "https://top2pro.com/api/user",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        setLogin(response.data.email);
        setName(response.data.name);
        setUser(true);
      }
    })
    .catch(function (error) {
      setStatus(error.response.status);
      setUser(false);

      console.log(error.response.status);
    });
}

export async function loginFunc(login, password, setUser, setLoginView) {
  var data = JSON.stringify({
    email: login,
    password: password,
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      setLoginView(false);
      setUser(true);
    })
    .catch(function (error) {
      console.log(error);
      setUser(false);
    });
}

export async function registerFunc(
  setUser,
  name,
  login,
  password,
  confirm,
  validation
) {
  var data = JSON.stringify({
    name: name,
    email: login,
    password: password,
    password_confirmation: confirm,
    validation: validation,
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/register",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      setUser(true);
    })
    .catch(function (error) {
      console.log(error);
      setUser(false);
    });
}

export async function getCurrencies(
  setFiatArray,
  setCryptoArray,
  setCurrencies
) {
  var config = {
    method: "get",
    url: "https://top2pro.com/api/currencies/getAll",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "getCurrencies");
      const currencies = response.data.data;
      const fiat = [];
      const crypto = [];

      currencies.map((item) => {
        if (item.type === 1) {
          crypto.push({ value: item.id, label: item.name });
        } else if (item.type === 2) {
          fiat.push({ value: item.id, label: item.name });
        }
      });
      setFiatArray(fiat);
      setCryptoArray(crypto);
      setCurrencies(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getTradeMethods(mode, fiat, crypto, setTrade) {
  var data = JSON.stringify({
    filter: {
      fiat: fiat.value,
      asset: crypto.value,
      type: mode,
    },
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/api/trade-methods/search",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "getTradeMethods");
      const methods = response.data.data;
      const arr = [];
      methods.map((item) => {
        arr.push({ value: item.id, label: item.name });
      });

      setTrade(arr);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getOrders(
  mode,
  fiat,
  crypto,
  tradeId,
  setOrders,
  amount
) {
  const ids = [];

  tradeId.map((item) => {
    ids.push(item.value);
  });
  console.log(ids);
  var data = JSON.stringify({
    page: 1,
    perPage: 10,
    filter: {
      type: mode,
      fiat: fiat.value,
      asset: crypto.value,
      tradeMethods: ids,
      onlyMerchants: true,
      minOrdersCount: 100,
      minFinishRate: 0.5,
      amount: amount,
    },
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/api/orders/search",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "getOrders", mode);
      setOrders(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function clearCoockies() {
  var config = {
    method: "post",
    url: "https://top2pro.com/logout",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response, "clearCoockies");
    })
    .catch(function (error) {
      console.log(error);
    });
}
