import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const routes = [
  {
    key: "1",
    icon: "home",
    name: "Home",
    path: "/"
  },
  {
    key: "2",
    icon: "user",
    name: "Profile",
    path: "/profile"
  },
  {
    key: "3",
    icon: "setting",
    name: "Setting",
    path: "/setting"
  }
];

const MenuSider = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {routes.map(route => (
        <Menu.Item key={route.key}>
          <Link to={route.path}>
            <Icon type={route.icon} />
            <span>{route.name}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuSider;
