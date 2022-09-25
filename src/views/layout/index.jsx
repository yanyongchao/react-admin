import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <h2>sss</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
