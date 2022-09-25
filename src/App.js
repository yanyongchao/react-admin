import React, { Component } from "react";
import routes from "./router";
import { Button } from "antd";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

function Views() {
  return useRoutes(routes);
}

const App = () => {
  return (
    <Router>
      <Views />
    </Router>
  );
};

export default App;
