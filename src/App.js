import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";

import { getCsrf } from "./data/requests";

const App = () => {
  const {} = useContext(StateContext);

  useEffect(() => {
    getCsrf();
  }, []);
  return (
    <div className="grid bg-main">
      <div className="fixed w-[100vw] h-[70px] z-2 bg-main border-b border-b-1 border-b-gray">
        <Navbar />
      </div>
      <Home />
      <Bottom />
    </div>
  );
};

export default App;
