import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from "./Error";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Main from "../views/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/id:user/filter",
        element: <Main />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <Error />,
  },
]);
