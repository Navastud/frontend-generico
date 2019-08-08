import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const items = [
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
      {items.map(({ key, icon, name, path }) => (
        <Menu.Item key={key}>
          <Link to={path}>
            <Icon type={icon} />
            <span>{name}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuSider;
