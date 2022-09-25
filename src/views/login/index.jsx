import React from "react";
import DocumentTitle from "react-document-title";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUser } from "@/hooks";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

import "./index.less";

const Login = observer(() => {
  const user = useUser();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { status } = await user.login(values);
    if (status === 0) {
      navigate("/");
    }
  };
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
            <h2>用户登录</h2> <p>{user.token}</p>
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
});

export default Login;
