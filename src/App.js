import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Home from "./components/Home";

import LoginModal from "./components/Modals/LoginModal";
import FilterModal from "./components/Modals/FilterModal";
import RegisterModal from "./components/Modals/RegisterModal";

import { getCsrf } from "./data/Requests";

const App = () => {
  const {
    user,
    setName,
    setUser,
    setLogin,
    loginView,
    filterView,
    setStatus,
    registerView,
  } = useContext(StateContext);

  useEffect(() => {
    getCsrf(setStatus, setUser, setLogin, setName);
  }, []);

  return (
    <div className="font-white mx-auto grid bg-secondary min-h-[200vh] h-max overflow-auto">
      <div
        className={
          loginView === true || filterView === true || registerView
            ? "blur-[4px]"
            : null
        }
      >
        <Navbar />
        <Sidebar />
        {user ? <Main /> : <Home />}
      </div>

      <LoginModal />
      <FilterModal />
      <RegisterModal />
    </div>
  );
};

export default App;
