import { Tabs as Tab, Typography } from "antd";
import { useContext, useMemo, useState } from "react";
import { Context as ProductContext } from "../../context/product/product.context";

export const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { Products } = useContext(ProductContext);

  const products = Products.filter((prod) => prod.tabIndex === tabIndex);

  console.log(products);

  const productsJSX = useMemo(() => {
    return (
      <div>
        <Typography.Title>Menu</Typography.Title>
        {products.map((prod) => {
          return <div>{prod.name}</div>;
        })}
      </div>
    );
  }, [tabIndex]);

  const options = [
    {
      label: "Appetizer",
      key: 0,
      children: <div>{productsJSX}</div>,
    },
    {
      label: "Dessert",
      key: 1,
      children: <div>{productsJSX}</div>,
    },
    {
      label: "Beverages",
      key: 2,
      children: <div>{productsJSX}</div>,
    },
  ];

  return (
    <div className="tabs-container">
      <Tab
        onChange={(tabIndex) => setTabIndex(tabIndex)}
        // defaultActiveKey="1"
        type="card"
        size={"small"}
        items={options}
      />
    </div>
  );
};
