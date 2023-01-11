import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Main from "./views/Main";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Bottom from "./components/Bottom";
import Favourites from "./views/Favourites";

import { Route, Switch, Redirect } from "react-router-dom";
import { StateContext } from "./context/StateProvider";
import { getCsrf } from "./data/Requests";

import Loader from "./components/Loader";

const App = () => {
  const { user, setUser, setFiat, setCrypto, setLoader, loader } =
    useContext(StateContext);

  // csrf -> user -> fiat/crypto
  useEffect(() => {
    setLoader(true);
    getCsrf(setUser, setFiat, setCrypto, setLoader);
  }, []);

  return (
    <div>
      <Navbar />

      {loader === true && (
        <div className="w-full min-h-[2514px] absolute bg-gray-100 opacity-50 z-[5] pt-[100px]">
          <Loader />
        </div>
      )}

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path={"/registration"} render={() => <Registration />} />
        <Route path={"/login"} render={() => <Login />} />

        {user !== null && (
          <Route
            path={`/${user.name}-${user.id}/favourites`}
            render={() => <Favourites />}
          />
        )}
        {user !== null && (
          <Route
            path={`/${user.name}-${user.id}/toTrade`}
            render={() => <Main />}
          />
        )}

        {user === null ? (
          <Redirect to={"/"} />
        ) : (
          <Redirect to={`/${user.name}-${user.id}/toTrade`} />
        )}
      </Switch>
      <Bottom />
    </div>
  );
};

export default App;
