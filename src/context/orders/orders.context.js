import { createContext } from "react";

import Orders from "../../Orders.json";

const Context = createContext();

const OrderContext = ({ children }) => {
  return (
    <Context.Provider value={{ Orders }}>{children}</Context.Provider>
  );
};

export { Context, OrderContext };
