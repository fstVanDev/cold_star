import axios from "axios";

export async function getCsrf(setUser, setFiat, setCrypto) {
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
      console.log(response.config.headers, "csrf");
      getUser(setUser, setFiat, setCrypto);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUser(setUser, setFiat, setCrypto) {
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
      console.log(response.data, "getUser");
      setUser(response.data);
      getCurrencies(setFiat, setCrypto);
      if (window.location.href !== "https://app.top2pro.com/") {
        window.location.href = "https://app.top2pro.com/";
      }
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
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getTradeMethods(
  mode,
  currentFiat,
  currentCrypto,
  setPayment
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
    url: "https://top2pro.com/api/trade-methods/search",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "payment");

      setPayment(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getOrders(
  mode,
  amount,
  currentFiat,
  currentCrypto,
  currentPayment,
  setCurrentOrders
) {
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
      onlyMerchants: true,
      minOrdersCount: 100,
      minFinishRate: 0.5,
      amount: amont,
    },
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/api/orders/search",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.data, "Orders");
      setCurrentOrders(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function loginFunc(email, password, setUser, setFiat, setCrypto) {
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
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      getUser(setUser, setFiat, setCrypto);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function registerFunc(
  name,
  email,
  password,
  confirm,
  setUser,
  setFiat,
  setCrypto
) {
  var data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    password_confiramtion: confirm,
    validation: "k32nf91mss2",
  });

  var config = {
    method: "post",
    url: "https://top2pro.com/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      loginFunc(email, password, setUser, setFiat, setCrypto);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function logout(setUser) {
  var config = {
    method: "post",
    url: "https://top2pro.com/logout",
    headers: {
      Accept: "application/json",
    },
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
