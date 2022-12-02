import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Main";

import { StateProvider } from "./context/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider>
    <RouterProvider router={router} />
  </StateProvider>
);
