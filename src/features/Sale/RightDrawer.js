import { useState, useContext, useMemo } from "react";

import { CustomerForm } from "./Form";

import { Drawer, Typography, Image, Button, Divider } from "antd";

import { Context as ProductContext } from "../../context/product/product.context";

export const RightDrawer = () => {
  const [isDraweropen, setIsDrawerrOpen] = useState(true);

  const { removeItemFromCart, allOrders } = useContext(ProductContext);

  const handleDrawerClose = () => {
    setIsDrawerrOpen(!isDraweropen);
  };

  const handleFinish = (value) => {
    console.log(value);
  };

  const ordersItems = useMemo(() => {
    return (
      <>
        {allOrders.map((order) => {
          return (
            <>
              <div className="order-container" key={order.id}>
                <div className="order-left">
                  <Image
                    style={{ borderRadius: "10px" }}
                    width={"100%"}
                    src={order.image}
                    alt={order.name}
                    preview={false}
                  />
                </div>
                <div className="order-right">
                  <Typography.Paragraph
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {order.name}
                  </Typography.Paragraph>

                  <div className="order-actions-container">
                    <div className="order-action-left-container">
                      <Button type="primary" shape="circle">
                        -
                      </Button>
                      <Typography.Paragraph>
                        {order.quantity}
                      </Typography.Paragraph>
                      <Button type="primary" shape="circle">
                        +
                      </Button>
                    </div>

                    <div className="order-action-right-container">
                      <Typography.Paragraph
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        ${order.price}
                      </Typography.Paragraph>
                    </div>
                  </div>
                </div>
                {/* <button onClick={() => removeItemFromCart(order)}>remove</button> */}
              </div>
              <Divider />
            </>
          );
        })}
      </>
    );
  }, [allOrders]);

  return (
    <>
      <Drawer
        placement="right"
        onClose={handleDrawerClose}
        open={isDraweropen}
        autoFocus={false}
        mask={false}
      >
        <Typography.Paragraph
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Customer Information
        </Typography.Paragraph>

        <CustomerForm handleFinish={handleFinish} />

        <div className="orders">{ordersItems}</div>
      </Drawer>
    </>
  );
};
