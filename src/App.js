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

const App = () => {
  const { user, setUser, setFiat, setCrypto } = useContext(StateContext);

  // csrf -> user -> fiat/crypto
  useEffect(() => {
    getCsrf(setUser, setFiat, setCrypto);
  }, []);

  return (
    <div>
      <Navbar />

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

        <Redirect to={"/"} />
      </Switch>
      <Bottom />
    </div>
  );
};

export default App;
