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
    <div style={{ background: "blue", color: "white" }}>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            // navigate("/");
          } else {
            navigate(key);
          }
        }}
        mode="vertical"
        defaultSelectedKeys={[window.location.pathname]} // for default selection
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <DashboardOutlined />,
            children: [{ label: " Users", key: "/profile" }],
          },
          { label: "Orders", key: "/signout", icon: <SignalFilled /> },
          { label: "Profiles", key: "/profile", icon: <UserAddOutlined /> },
        ]}
        style={{ textAlign: "ceneter" }}
      ></Menu>
    </div>
  );
};

export default SideMenu;
