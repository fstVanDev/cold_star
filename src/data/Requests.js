import axios from "axios";

export async function getCsrf() {
  var config = {
    method: "get",
    url: "https://top2pro.com/sanctum/csrf-cookie",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response, "csrf");

      getUser();
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function getUser() {
  var config = {
    method: "get",
    url: "https://top2pro.com/api/user",
    headers: {
      Accept: "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function loginFunc(login, password) {
  var data = JSON.stringify({
    email: login,
    password: password,
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function registerFunc() {
  var data = JSON.stringify({
    name: "Test",
    email: "test@test.test",
    password: "12345678",
    password_confiramtion: "12345678",
    validation: "k32nf91mss2",
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getCurrencies(setFiatArray, setCryptoArray) {
  var config = {
    method: "get",
    url: "https://top2pro.com/api/currencies/getAll",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
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
      Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
      "Content-Type": "application/json",
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

export async function getOrders(mode, fiat, crypto, tradeId, setOrders) {
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
    },
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/api/orders/search",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
      "Content-Type": "application/json",
    },
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
