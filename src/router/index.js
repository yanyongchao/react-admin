import React from "react";
import { Navigate } from "react-router-dom";

const lazyLoad = (moduleName) => {
  const Module = React.lazy(() => import(`@/views/${moduleName}`));
  return <Module />;
};

const Appraisal = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const routes = [
  {
    path: "/login",
    element: lazyLoad("login"),
  },
  {
    path: "/",
    element: <Appraisal>{lazyLoad("layout")}</Appraisal>,
  },
  { path: "*", element: <Navigate to="/" /> },
];

export default routes;