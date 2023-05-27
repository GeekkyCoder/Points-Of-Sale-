import { Orders } from "./Orders";
import { Tabs } from "./Tabs";
import {RightDrawer } from "./RightDrawer"

import { Divider, Drawer, Typography } from "antd";

export const Sale = () => {
  return (
    <>
      <Typography.Title level={3}>Order List</Typography.Title>
      <Orders />
      <Divider/>
      <Tabs/>
      <RightDrawer/>
    </>
  );
};
