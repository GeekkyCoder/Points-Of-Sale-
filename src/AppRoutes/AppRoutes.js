import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Sale } from "../Pages/Sale/Sale";
import { Orders } from "../Pages/Orders/Orders";
import { Customers } from "../Pages/Customers/Customers";

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
