import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateProvider";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Bottom from "./components/Bottom";

import { getCsrf } from "./data/Requests";
import Error from "./routes/Error";
import { useReactPath } from "./hooks/useReactPath";
import { id } from "ethers/lib/utils";

const App = () => {
  const { setUser, user } = useContext(StateContext);

  const path = useReactPath();

  useEffect(() => {
    getCsrf(setUser);
  }, []);

  useEffect(() => {
    const string = Boolean;
    console.log(path);
    if (user !== null) {
      string = path.startsWith(`/${user.id}`);
      if (string === false) {
        return <Error />;
      }
    }
  }, [path]);

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
