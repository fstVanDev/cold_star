import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";

import { getCsrf, getUser } from "./data/Requests";

const App = () => {
  const { setLogin, setName, setUser, name, login } = useContext(StateContext);

  useEffect(() => {
    getCsrf(setLogin, setName, setUser);
    getUser(setLogin, setName, setUser);
  }, []);

  useEffect(() => {
    console.log(name, "name");
  }, [name]);

  useEffect(() => {
    console.log(login, "login");
  }, [login]);

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
