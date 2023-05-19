import { Space, Card, Typography, Statistic, Divider } from "antd";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { BarGraph } from "./BarGraph";
import { PieGraph } from "./PieGraph";

import CountUp from "react-countup";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Typography.Title level={3}>Dashboard</Typography.Title>
        <Space>
          <DashboardCards
            title={"orders"}
            value={1000}
            icon={<ShoppingCartOutlined className="dashboard-icon" />}
          />
          <DashboardCards
            title={"sales"}
            value={5000}
            icon={<ShopOutlined className="dashboard-icon" />}
          />
          <DashboardCards
            title={"customers"}
            value={2000}
            icon={<UserOutlined className="dashboard-icon" />}
          />
        </Space>

        <Divider />

        <Space className="graph-container" direction="vertical" size={"large"}>
          <Card className="dashboard-graph-card-bar">
            <BarGraph />
          </Card>
          <Card className="dashboard-graph-card-pie">
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
        <Space size={"large"}>
          {icon}
          <Statistic
            style={{
              background: "white",
              padding: "2em",
              borderRadius: "50px",
            }}
            title={title}
            value={value}
            formatter={formatter}
          />
        </Space>
      </Card>
    </Space>
  );
};
