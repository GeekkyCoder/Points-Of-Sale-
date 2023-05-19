import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../features/Dashboard/Dashboard";
import { Sale } from "../features/Sale/Sale";
import { Orders } from "../features/Orders/Orders";
import { Customers } from "../features/Customers/Customers";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
};
