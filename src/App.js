import React from "react";
import routes from "./router";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { StoreContext } from "./context";
import store from "./store";

function Views() {
  return useRoutes(routes);
}

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Views />
      </Router>
    </StoreContext.Provider>
  );
};

export default App;
