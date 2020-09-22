import React from 'react';
import './App.css';
import {
  HashRouter as RouterH,
  Route,
  Switch,
} from "react-router-dom";

import { RUTAS } from "./config/rutas";

function App() {
  return (
    <RouterH>
      <Switch>
        {RUTAS.map((route, i) => 
          <Route
            key={i}
            path={route.path}
            render={() => <route.component />}
          />
        )}
      </Switch>
    </RouterH>
  );
}

export default App;
