import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./app/Main";

import store from "./store/store";
import { createBrowserHistory as createHistory } from "history";
const history = createHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
