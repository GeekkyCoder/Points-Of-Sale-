import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";

import { useContext } from "react";
import { Context } from "../../context/theme.context";

export const ThemeSwitchControl = () => {
  const { handleThemeSwitchControll } = useContext(Context);

  return (
    <Switch
      onChange={handleThemeSwitchControll}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  );
};
