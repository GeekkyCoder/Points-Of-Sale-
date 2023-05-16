import { Image, Typography, Space, Button } from "antd";

export const AppHeader = () => {
  return (
    <>
      <div className="app-header">
        <Image
          preview={false}
          className="logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/65ca620f-268e-4144-a9d0-b4ee2a824fdf/d39gdgk-03441f76-cc71-4acf-9d70-3fa2ea4ff549.png"
          alt="logo-png"
        ></Image>
        <Typography.Title level={3}>DASHBOARD</Typography.Title>
        <Space>
          <Button type="primary" href="#">
            Dashboard
          </Button>
          <Button type="primary" href="#">
            Sell
          </Button>
        </Space>
      </div>
    </>
  );
};
