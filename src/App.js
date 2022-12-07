import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";

import { getCsrf } from "./data/Requests";
import Error from "./routes/Error";

const App = () => {
  const { setUser, user } = useContext(StateContext);

  useEffect(() => {
    getCsrf(setUser);
  }, []);

  useEffect(() => {
    console.log(window.location.pathname);

    if (user !== null) {
      if (window.location.pathname.startsWith(`/${user.id}`) === true) {
        return <Error />;
      }
    }
  }, [window.location]);

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
