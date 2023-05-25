import {Switch } from "antd";

import { useContext } from "react";
import { Context } from "../../context/theme/theme.context";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export const ThemeSwitchControl = () => {
  const { handleThemeSwitchControll } = useContext(Context);

  return (
    <Switch
      onChange={handleThemeSwitchControll}
      checkedChildren={<LightMode />}
      unCheckedChildren={<DarkMode />}
      defaultChecked
    />
  );
};

const LightMode = () => {
  return <LightModeOutlinedIcon fontSize="small" />;
};

const DarkMode = () => {
  return <DarkModeOutlinedIcon fontSize="small" />;
};
