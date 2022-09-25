import React from "react";
import { Tooltip } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import "./index.less";
const Settings = () => {
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <SettingOutlined />
      </Tooltip>
    </div>
  );
};

export default Settings;
