import { useContext, useMemo, useState } from "react";

import { Tabs as Tab, Typography, Image, Button } from "antd";
import { Context as ProductContext } from "../../context/product/product.context";

import { PlusOutlined } from "@ant-design/icons";

export const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { productItems, addToCart, allOrders } = useContext(ProductContext);

  const products = productItems.filter((prod) => prod.tabIndex === tabIndex);

  const productsJSX = useMemo(() => {
    return (
      <div>
        <Typography.Title>Menu</Typography.Title>
        <div className="product-list-container">
          {products.map((prod) => {
            return (
              <div
                key={prod.id}
                className="product-list-card-container"
                style={{ width: "45%" }}
              >
                <div className="left">
                  <div>
                    <Image
                      style={{ width: "100%", borderRadius: "12px" }}
                      src={prod.image}
                      alt={prod.name}
                    ></Image>
                  </div>
                  <Typography.Paragraph className="product-price">
                    <sup className="dollar">$</sup>
                    {prod.price}
                  </Typography.Paragraph>
                </div>
                <div className="right">
                  <h3>{prod.name}</h3>
                  <Typography.Paragraph className="product-description">
                    {prod.description}
                  </Typography.Paragraph>
                  <div className="info-container">
                    <Typography.Text className="product-availabe">
                      {prod.available} Available
                    </Typography.Text>
                    <Typography.Paragraph className="product-sold">
                      {prod.sold} Sold
                    </Typography.Paragraph>
                  </div>
                  <div className="actions-container">
                    <Button
                      onClick={() => addToCart(prod)}
                      type="primary"
                      icon={<PlusOutlined size={"large"} />}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }, [tabIndex, allOrders]);

  const options = [
    {
      label: "Appetizer",
      key: 0,
      children: <>{productsJSX}</>,
    },
    {
      label: "Dessert",
      key: 1,
      children: <>{productsJSX}</>,
    },
    {
      label: "Beverages",
      key: 2,
      children: <>{productsJSX}</>,
    },
  ];

  return (
    <div className="tabs-container">
      <Tab
        onChange={(tabIndex) => setTabIndex(tabIndex)}
        // defaultActiveKey="1"
        type="card"
        size={"large"}
        items={options}
      />
    </div>
  );
};
