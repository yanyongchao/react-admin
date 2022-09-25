import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "@/utils/auth";

const lazyLoad = (moduleName) => {
  const Module = React.lazy(() => import(`@/views/${moduleName}`));
  return <Module />;
};

const Appraisal = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" />;
};

const routes = [
  {
    path: "/login",
    element: lazyLoad("login"),
  },
  {
    path: "/",
    element: <Appraisal>{lazyLoad("layout")}</Appraisal>,
    children: [{ path: "/", element: lazyLoad("dashboard") }],
  },
  { path: "*", element: <Navigate to="/" /> },
];

export default routes;
