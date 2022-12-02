import axios from "axios";

export async function getCsrf(setLogin, setName, setUser) {
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

      getUser(setLogin, setName, setUser);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUser(setLogin, setName, setUser) {
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
      console.log(response, "getUser");

      setLogin(response.data.email);
      setName(response.data.name);
      setUser(true);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function loginFunc(email, password) {
  var data = JSON.stringify({
    email: email,
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

export async function registerFunc(name, email, password) {
  var data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    password_confiramtion: password,
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
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getCurrencies(setFiat, setCrypto) {
  var config = {
    method: "get",
    url: "https://top2pro.com/api/currencies/getAll",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
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
      setFiat(fiat);
      setCrypto(crypto);
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
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
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
