import { useContext, useMemo, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Context as ProductContext } from "../../context/product/product.context";
import { Card, Space, Image, Typography, Button } from "antd";

export const TabsList = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const { Products } = useContext(ProductContext);

  // const products = Products.filter(
  //   (item) => item.tabIndex === selectedTabIndex
  // );


  return (
    <div className="order-list-container">
        {
          Products.slice(0,15).map(item => {
             return <div className="order-list-card">
                <div style={{width:"30%"}}>{item.name}</div>
             </div>
          })
        }
    </div>
  );
};
