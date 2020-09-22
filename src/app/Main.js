import React from "react";
import { HashRouter as RouterH, Route, Switch } from "react-router-dom";
import { RUTAS } from "../config/rutas";
import Navbar from "./components/Navbar";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <RouterH>
        <Switch>
          {RUTAS.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={() => <route.component />}
            />
          ))}
        </Switch>
      </RouterH>
    </React.Fragment>
  );
};

export default Main;
