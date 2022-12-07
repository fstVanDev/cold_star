import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";

import { getCsrf } from "./data/Requests";
import Error from "./routes/Error";

import { useReactPath } from "./hooks/useReactPath";

const App = () => {
  const { setUser, user } = useContext(StateContext);
  const path = useReactPath();

  useEffect(() => {
    getCsrf(setUser);

    if (user === null && path !== "/") {
      console.log(window.location, path);
      console.log(12);
      return <Error />;
    }
  }, []);

  // useEffect(() => {
  //   console.log(1);
  // }, []);

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
