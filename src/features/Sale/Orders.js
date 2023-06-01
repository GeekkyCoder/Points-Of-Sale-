import { useContext } from "react";
import { OrderItem } from "./OrderItem";

import { Context as OrderContext } from "../../context/orders/orders.context";

export const Orders = () => {
  const { OrderList } = useContext(OrderContext);

  return (
    <>
      <div className="order-list-container">
        {OrderList.map((order) => {
          return (
            <div key={order.id} className="order-list-card ">
              <OrderItem order={order} key={order.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};
