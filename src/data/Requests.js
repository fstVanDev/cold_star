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
      setUser(false);

      console.log(error.response);
    });
}
