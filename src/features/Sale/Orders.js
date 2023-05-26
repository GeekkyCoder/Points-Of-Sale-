import { useContext } from "react";
import { OrderItem } from "./OrderItem";

import { Context as OrderContext } from "../../context/orders/orders.context";

export const Orders = () => {
  const { Orders } = useContext(OrderContext);

  return (
    <>
      <div className="order-list-container">
        {Orders.map((order) => {
          return (
            <div className="order-list-card ">
              <OrderItem order={order} key={order.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};
