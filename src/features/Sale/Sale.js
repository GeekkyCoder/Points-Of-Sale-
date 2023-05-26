import { Orders } from "./Orders";
import { Tabs } from "./Tabs";

import { Divider, Typography } from "antd";

export const Sale = () => {
  return (
    <>
      <Typography.Title level={3}>Order List</Typography.Title>
      <Orders />
      <Divider/>
      <Tabs/>
    </>
  );
};
