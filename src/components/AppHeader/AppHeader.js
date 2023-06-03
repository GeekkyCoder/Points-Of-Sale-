import { Image, Typography, Space, Button } from "antd";
import { ThemeSwitchControl } from "./ThemeSwitch";

import { useContext } from "react";
import { Context } from "../../context/theme/theme.context";
import { useNavigate } from "react-router-dom";
import { DashboardOutlined, ReceiptOutlined } from "@mui/icons-material";
import { CalendarOutlined } from "@ant-design/icons";

export const AppHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleRightDrawer } = useContext(Context);

  const handleRedirect = (e) => {
    const { textContent } = e.target;

    if (textContent == "Dashboard") {
      navigate("/");
    } else if (textContent == "Sale") {
      navigate("/sale");
    } else if (textContent === "Order list") {
      toggleRightDrawer();
    } else {
      return;
    }
  };

  return (
    <>
      <div
        className="app-header"
        style={{
          borderBottom: `${Object.keys(theme).length ? "1px solid gray" : ""}`,
        }}
      >
        <Image
          preview={false}
          className="logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/65ca620f-268e-4144-a9d0-b4ee2a824fdf/d39gdgk-03441f76-cc71-4acf-9d70-3fa2ea4ff549.png"
          alt="logo-png"
        ></Image>
        <div className="header-nav-container" onClick={handleRedirect}>
          <Button
            className="nav-dashboard"
            icon={<DashboardOutlined fontSize="small" />}
            type="ghost"
          >
            Dashboard
          </Button>
          <Button
            className="nav-orders"
            icon={<ReceiptOutlined fontSize="small" />}
            type="ghost"
          >
            Sale
          </Button>
          <Button
            className="nav-orders"
            icon={<CalendarOutlined fontSize="small" />}
            type="ghost"
          >
            Order list
          </Button>
        </div>
        <Space
          style={{ marginRight: "2em" }}
          size={"large"}
          onClick={handleRedirect}
        >
          <ThemeSwitchControl />
          <Button type="primary">Dashboard</Button>
          <Button type="primary">Sale</Button>
        </Space>
      </div>
    </>
  );
};
