import { Space, Card, Typography, Statistic, Image, Divider } from "antd";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";

import AddonImage from "../../Assets/graph-1.png";
import AddonImage2 from "../../Assets/graph-2.png";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Typography.Title level={3}>Dashboard</Typography.Title>
        <Space>
          <DashboardCards
            title={"orders"}
            value={1000}
            icon={<ShoppingCartOutlined />}
          />
          <DashboardCards
            title={"sales"}
            value={5000}
            icon={<ShopOutlined />}
          />
          <DashboardCards
            title={"customers"}
            value={2000}
            icon={<UserOutlined />}
          />
        </Space>
        <Divider />
        <Graphs />
      </div>
    </>
  );
};

const DashboardCards = ({ title, value, icon }) => {
  return (
    <Space direction="horizontal">
      <Card>
        <Space>
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Space>
  );
};

const Graphs = () => {
  return (
    <Space
      size={"large"}
      direction="horizontal"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card>
        <Image src={AddonImage} alt="addon-png" preview={false}></Image>
      </Card>
      <Card>
        <Image src={AddonImage} alt="addon-png" preview={false}></Image>
      </Card>
    </Space>
  );
};
