import React from "react";
import DocumentTitle from "react-document-title";
import { Form, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";

const Login = (props) => {
  const onFinish = () => {};
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form
          className="content"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ admin: "admin", passwprd: "123456" }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <span>账号 : admin 密码 : 随便填</span>
            <br />
            <span>账号 : editor 密码 : 随便填</span>
            <br />
            <span>账号 : guest 密码 : 随便填</span>
          </Form.Item>
        </Form>
      </div>
    </DocumentTitle>
  );
};

export default Login;
