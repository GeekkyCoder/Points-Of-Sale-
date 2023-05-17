import { Button, Menu,Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { useContext } from "react";
import { Context } from "../../context/theme.context";

export const AppSideBar = () => {
  const navigate = useNavigate();

  const { theme, toggleMenuCollapse, handleToggleMenuCollapse } =
    useContext(Context);

  console.log(toggleMenuCollapse);

  return (
    <>
      <Card>
      <Button
        type="primary"
        onClick={handleToggleMenuCollapse}
        style={{
          marginBottom: 16,
        }}
      >
        {toggleMenuCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </Card>
      <Menu
        className="app-sidebar"
        mode="inline"
        inlineCollapsed={toggleMenuCollapse}
        style={{
          borderRight: `${Object.keys(theme).length ? "1px solid gray" : ""}`,
        }}
        defaultOpenKeys={["dashbaord"]}
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: <span className="sidebar-menu-link">Dashboard</span>,
            key: "/",
            icon: <DashboardOutlined />,
          },
          {
            label: <span className="sidebar-menu-link">Sale</span>,
            key: "/sale",
            icon: <ShopOutlined />,
          },
          {
            label: <span className="sidebar-menu-link">Customers</span>,
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: <span className="sidebar-menu-link">Orders</span>,
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
        ]}
      ></Menu>
    </>
  );
};
