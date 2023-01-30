import {
  DashboardOutlined,
  HomeOutlined,
  SignalFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => {
        if (key === "signout") {
          // navigate("/");
        } else {
          navigate(key);
        }
      }}
      mode='vertical'
      defaultSelectedKeys={[window.location.pathname]} // for default selection
      items={[
        { label: "Home", key: "/", icon: <HomeOutlined /> },
        {
          label: "Dashboard",
          key: "/dashboard",
          icon: <DashboardOutlined />,
          children: [
            { label: "Actives Users", key: "/userList" },
            { label: "Actives Users", key: "/userList" },
          ],
        },
        { label: "SignOut", key: "/signout", icon: <SignalFilled /> },
        { label: "Users", key: "/userlist", icon: <UserAddOutlined /> },
      ]}
      style={{ textAlign: "ceneter" }}
    ></Menu>
  );
};

export default SideMenu;
