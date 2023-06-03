import { Space, Button } from "antd";
import { ThemeSwitchControl } from "./ThemeSwitch";


export const RightNav = ({handleRedirect}) => {
  return (
    <Space
      style={{ marginRight: "2em" }}
      size={"large"}
      onClick={handleRedirect}
    >
      <ThemeSwitchControl />
      <Button type="primary">Dashboard</Button>
      <Button type="primary">Sale</Button>
    </Space>
  );
};
