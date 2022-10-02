import React, { Suspense } from "react";
import routes from "./router";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { StoreContext } from "./context";
import store from "./store";
import { ConfigProvider } from "antd";

function Views() {
  return useRoutes(routes);
}

const App = () => {
  return (
    <ConfigProvider prefixCls="custom">
      <StoreContext.Provider value={store}>
        <Suspense fallback={<div>Loading</div>}>
          <Router>
            <Views />
          </Router>
        </Suspense>
      </StoreContext.Provider>
    </ConfigProvider>
  );
};

export default App;
