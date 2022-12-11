import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateProvider";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";
import { getCsrf, getCurrencies } from "./data/Requests";

// import Error from "./routes/Error";
// import { useReactPath } from "./hooks/useReactPath";

const App = () => {
  const { setUser, user, setFiat, setCrypto, fiat, crypto } =
    useContext(StateContext);
  // const path = useReactPath();

  useEffect(() => {
    if (user === null) {
      getCsrf(setUser);
    }

    if (fiat.length === 0 || crypto.length === 0) {
      getCurrencies(setFiat, setCrypto);
    }
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
