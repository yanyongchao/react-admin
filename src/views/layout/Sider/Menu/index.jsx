import React from "react";
import { Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const SiderMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="layout-sidebar-menu-container">
      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => {
          navigate(key);
        }}
        selectedKeys={[pathname]}
        items={[
          {
            key: "/",
            icon: <UserOutlined />,
            label: "首页",
          },
          {
            key: "/doc",
            icon: <VideoCameraOutlined />,
            label: "个人博客",
          },
        ]}
      />
    </div>
  );
};

export default SiderMenu;
