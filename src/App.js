import React, { useContext } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import LoginModal from "./components/Modals/LoginModal";
import FilterModal from "./components/Modals/FilterModal";

const App = () => {
  const { user, loginView, filterView } = useContext(StateContext);

  return (
    <div className="font-main mx-auto grid bg-secondary min-h-[200vh] h-max overflow-auto">
      <div
        className={
          loginView === true || filterView === true ? "blur-[4px]" : null
        }
      >
        <Navbar />
        <Sidebar />
        <Main />
      </div>
      <LoginModal />
      <FilterModal />
    </div>
  );
};

export default App;
