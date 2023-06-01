import { useState, useContext, useMemo } from "react";

import { Button, Drawer, Form, Input, Card, Typography } from "antd";

import { Context as ProductContext } from "../../context/product/product.context";

export const RightDrawer = () => {
  const [open, setOpen] = useState(true);

  const { removeItemFromCart, allOrders } = useContext(ProductContext);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleFinish = (value) => {
    console.log(value);
  };

  const ordersItems = useMemo(() => {
    return (
      <>
        {allOrders.map((order) => {
          return (
            <div key={order.id}>
              {order.name}
              <button onClick={() => removeItemFromCart(order)}>remove</button>
            </div>
          );
        })}
      </>
    );
  }, [allOrders]);

  return (
    <>
      <Drawer
        placement="right"
        onClose={handleClose}
        open={open}
        autoFocus={false}
        mask={false}
      >
        <Typography.Paragraph
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Customer Information
        </Typography.Paragraph>
        <Form
          style={{
            maxWidth: 300,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="Customer Name"
            rules={[
              {
                required: true,
                message: "Please input Customer Name!",
              },
            ]}
          >
            <Input placeholder="Customer Name" />
          </Form.Item>

          <Form.Item
            name="Select Table"
            rules={[
              {
                required: true,
                message: "can not be empty",
              },
            ]}
          >
            <Input placeholder="Select Table" />
          </Form.Item>
        </Form>
        {ordersItems}
      </Drawer>
    </>
  );
};
