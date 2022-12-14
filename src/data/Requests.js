import axios from "axios";

export async function getCsrf(setUser, setFiat, setCrypto, setLoader) {
  var config = {
    method: "get",
    url: "https://top2pro.com/sanctum/csrf-cookie",
    // url: "https://app.top2pro.com/sanctum/csrf-cookie",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      // Authorization: "Bearer 20|AY1o7b5K3KhSktKI5fGiFchL0bzpkVFLsqA7MkjV",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.config.headers, "csrf");
      getUser(setUser, setFiat, setCrypto, setLoader);
      // setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function getUser(setUser, setFiat, setCrypto, setLoader) {
  var config = {
    method: "get",
    url: "https://app.top2pro.com/api/user",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      // Authorization: "Bearer Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data, "getUser");
      setUser(response.data);
      getCurrencies(setFiat, setCrypto, setLoader);
      if (window.location.href !== "https://top2pro.com/") {
        window.location.href = "https://top2pro.com/";
      }
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function getCurrencies(setFiat, setCrypto, setLoader) {
  var config = {
    method: "get",
    url: "https://app.top2pro.com/api/currencies/getAll",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
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
          crypto.push(item);
        } else if (item.type === 2) {
          fiat.push(item);
        }
      });
      setFiat(fiat);
      setCrypto(crypto);
      setLoader(false);
    })
    .catch(function (error) {
      setLoader(false);
      console.log(error);
    });
}

export async function getTradeMethods(
  mode,
  currentFiat,
  currentCrypto,
  setPayment,
  setLoader
) {
  let type;
  if (mode === true) {
    type = 2;
  } else {
    type = 1;
  }

  var data = JSON.stringify({
    filter: {
      fiat: currentFiat.id,
      asset: currentCrypto.id,
      type: type,
    },
  });

  var config = {
    method: "post",
    url: "https://app.top2pro.com/api/trade-methods/search",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "payment");

      setPayment(response.data.data);
      setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function getOrders(
  mode,
  amount,
  currentFiat,
  currentCrypto,
  currentPayment,
  setCurrentOrders,
  setOrdersView,
  setLoader
) {
  console.log(
    mode,
    amount,
    currentFiat,
    currentCrypto,
    currentPayment,
    setCurrentOrders,
    setOrdersView
  );
  let type;
  if (mode === true) {
    type = 2;
  } else {
    type = 1;
  }

  let amont;
  if (amount.length === 0) {
    amont = 500;
  } else {
    amont = Number(amount);
  }

  let methods = [];
  currentPayment.map((item) => {
    methods.push(item.id);
  });

  var data = JSON.stringify({
    page: 1,
    perPage: 10,
    filter: {
      type: type,
      fiat: currentFiat.id,
      asset: currentCrypto.id,
      tradeMethods: methods,
      // onlyMerchants: true,
      // minOrdersCount: 100,
      // minFinishRate: 0.5,
      amount: amont,
    },
  });

  var config = {
    method: "post",
    url: "https://app.top2pro.com/api/orders/search",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "Orders");
      setCurrentOrders(response.data.data);
      setOrdersView(true);
      setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function loginFunc(
  email,
  password,
  setUser,
  setFiat,
  setCrypto,
  setLoader
) {
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "https://app.top2pro.com/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      getUser(setUser, setFiat, setCrypto);
      setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function registerFunc(
  name,
  email,
  password,
  confirm,
  setUser,
  setFiat,
  setCrypto,
  setLoader
) {
  var data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    password_confirmation: confirm,
    validation: "k32nf91mss2",
  });

  var config = {
    method: "post",
    url: "https://app.top2pro.com/register",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      getUser(setUser, setFiat, setCrypto);
      setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoader(false);
    });
}

export async function logout(setUser) {
  var config = {
    method: "post",
    url: "https://app.top2pro.com/logout",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer 2|mgb01gq4fifwlYGUQGie0fHnImWCyjofpbHOI04Y",
    },
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data, "logout");
      setUser(null);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}
