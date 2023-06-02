import { useState, useContext, useMemo } from "react";

import { Drawer, Typography, Image, Button, Divider } from "antd";

import { Context as ProductContext } from "../../context/product/product.context";
import { CustomerForm } from "./Form";
import { Preview } from "@mui/icons-material";

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
            <>
              <div className="order-container" key={order.id}>
                <div className="order-left">
                  <Image
                    width={"100%"}
                    src={order.image}
                    alt={order.name}
                    preview={false}
                  />
                </div>
                <div className="order-right">
                  <Typography.Paragraph
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
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

        <CustomerForm handleFinish={handleFinish} />

        {ordersItems}
      </Drawer>
    </>
  );
};
