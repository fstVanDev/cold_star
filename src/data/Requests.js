import axios from "axios";

export async function getCsrf(setUser, setLogin, setName) {
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

      // getUser(setUser, setLogin, setName);
    })
    .catch(function (error) {
      console.log(error);
    });
}
