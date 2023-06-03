import { useState, useContext, useMemo } from "react";

import { CustomerForm } from "./Form";

import { Drawer, Typography, Image, Button, Divider, Empty } from "antd";

import { Context as ProductContext } from "../../context/product/product.context";
import { OrderSummary } from "./OrderSummary";

export const RightDrawer = () => {
  const [isDraweropen, setIsDrawerrOpen] = useState(true);
  const [isPlusButtonHovered, setIsPlusButtonHovered] = useState({});
  const [isMinusButtonHovered, setIsMinusButtonHovered] = useState({});

  const { allOrders, removeItemBy1, addToCart } = useContext(ProductContext);

  const handleDrawerClose = () => {
    setIsDrawerrOpen(!isDraweropen);
  };

  const handleFinish = (value) => {
    console.log(value);
  };

  const handleMouseEnterInMinusButton = (id) => {
    setIsMinusButtonHovered((prevStatus) => {
      return {
        ...prevStatus,
        [id]: true,
      };
    });
  };

  const handleMouseLeaveInMinusButton = (id) => {
    setIsMinusButtonHovered((prevStatus) => {
      return {
        ...prevStatus,
        [id]: false,
      };
    });
  };

  const handleMouseEnterInButton = (id) => {
    setIsPlusButtonHovered((prevStatus) => {
      return {
        ...prevStatus,
        [id]: true,
      };
    });
  };

  const handleMouseLeaveInButton = (id) => {
    setIsPlusButtonHovered((prevStatus) => {
      return {
        ...prevStatus,
        [id]: false,
      };
    });
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
                      <Button
                        className={
                          isMinusButtonHovered[order.id]
                            ? "primary-button"
                            : "text-button"
                        }
                        shape="circle"
                        onClick={() => removeItemBy1(order)}
                        onMouseEnter={() =>
                          handleMouseEnterInMinusButton(order.id)
                        }
                        onMouseLeave={() =>
                          handleMouseLeaveInMinusButton(order.id)
                        }
                      >
                        -
                      </Button>
                      <Typography.Paragraph>
                        {order.quantity}
                      </Typography.Paragraph>
                      <Button
                        className={
                          isPlusButtonHovered[order.id]
                            ? "primary-button"
                            : "text-button"
                        }
                        shape="circle"
                        onClick={() => addToCart(order)}
                        onMouseEnter={() => handleMouseEnterInButton(order.id)}
                        onMouseLeave={() => handleMouseLeaveInButton(order.id)}
                      >
                        +
                      </Button>
                    </div>

                    <div className="order-action-right-container">
                      <Typography.Paragraph
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        {order.quantity} x {order.price}
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

        <Divider />

        <div className="orders">
          <Typography.Paragraph
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Orders
          </Typography.Paragraph>
          <div>{allOrders.length ? [ordersItems] : <Empty />}</div>
        </div>

        <OrderSummary />
      </Drawer>
    </>
  );
};
