import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const AppSideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        className="app-sidebar"
        mode="inline"
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
