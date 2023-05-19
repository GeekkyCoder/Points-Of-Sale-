import { Image, Typography, Space, Button } from "antd";
import { ThemeSwitchControl } from "./ThemeSwitch";

import { useContext } from "react";
import { Context } from "../../context/theme.context";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
  const { theme, currentView,updateCurrentView } = useContext(Context);

  const handleRedirect = (e) => {
    const { textContent } = e.target;

    if (textContent == "Dashboard") {
      navigate("/");
      updateCurrentView(textContent);
    } else if (textContent == "Sale") {
      navigate("/sale");
      updateCurrentView(textContent);
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
        <Typography.Title level={3}>{currentView}</Typography.Title>
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
