import { createContext } from "react";

import Products from "../../MOCK_DATA.json";

const Context = createContext();

const ProductContext = ({ children }) => {
  return <Context.Provider value={{ Products }}>{children}</Context.Provider>;
};

export { Context, ProductContext };
