import { Layout } from "antd";
import React, { useState, useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { LayoutContext } from "../context";

const { Sider } = Layout;

const LayoutSider = () => {
  const { collapsed } = useContext(LayoutContext);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo></Logo>
      <Menu></Menu>
    </Sider>
  );
};

export default LayoutSider;
