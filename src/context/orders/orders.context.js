import { createContext, useState } from "react";

import OrderList from "../../Orders.json";

const Context = createContext();

const OrderContext = ({ children }) => {
  const [orders, setOrders] = useState([]);


  return (
    <Context.Provider value={{ OrderList, orders }}>
      {children}
    </Context.Provider>
  );
};

export { Context, OrderContext };
