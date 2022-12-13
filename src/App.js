import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./context/StateProvider";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./views/Main.jsx";
import { getCsrf, getCurrencies } from "./data/Requests";

const App = () => {
  const {
    filterView,
    tradeView,
    loginView,
    registrationView,
    setUser,
    setFiat,
    setCrypto,
  } = useContext(StateContext);

  useEffect(() => {
    getCsrf(setUser, setFiat, setCrypto);
  }, []);

  return (
    <div
      className={`grid relative ${
        filterView === false ? "bg-main" : "bg-opacity-50 bg-[#1F1F1F]"
      }`}
    >
      <div className="fixed w-[100vw] h-[70px] z-2 bg-main border-b border-b-1 border-b-gray">
        <Navbar />
      </div>
      {loginView && <Login />}
      {registrationView && <Registration />}
      {!tradeView ? (
        <>
          {loginView || registrationView ? null : (
            <>
              <Home /> <Bottom />{" "}
            </>
          )}
        </>
      ) : (
        <>
          <Main />
          <Bottom />
        </>
      )}

      {/* <Main /> */}
    </div>
  );
};

export default App;
