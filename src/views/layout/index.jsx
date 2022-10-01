import { Layout } from "antd";
import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import Header from "./Header";
import { LayoutContext } from "./context";
import "./index.less";

const { Content } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  const contextVal = useMemo(() => {
    return {
      collapsed,
      setCollapsed,
    };
  }, [collapsed]);

  return (
    <LayoutContext.Provider value={contextVal}>
      <Layout>
        <Sider></Sider>
        <Layout className="layout">
          <Header className="layout-header"></Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
};

export default Main;
