import {
  Space,
  Card,
  Typography,
  Statistic,
  Divider,
  ConfigProvider,
} from "antd";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { BarGraph } from "./BarGraph";
import { PieGraph } from "./PieGraph";

import CountUp from "react-countup";

// import AddonImage from "../../Assets/graph-1.png";
// import AddonImage2 from "../../Assets/graph-2.png";

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

        <Space direction="horizontal" size={"large"}>
          <Card style={{ border: "1px solid gray" }}>
            <BarGraph />
          </Card>
          <Card style={{ border: "1px solid gray" }}>
            <PieGraph />
          </Card>
        </Space>
      </div>
    </>
  );
};

const DashboardCards = ({ title, value, icon }) => {
  const formatter = (value) => (
    <CountUp end={value} separator="," duration={2.75} />
  );

  return (
    <Space direction="horizontal">
      <Card>
        <Space>
          {icon}
          <Statistic
            style={{ background: "white", padding: "2em",borderRadius:'50px' }}
            title={title}
            value={value}
            formatter={formatter}
          />
        </Space>
      </Card>
    </Space>
  );
};
