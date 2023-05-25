import { useContext, useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Context as ProductContext } from "../../context/product/product.context";
import { Card, Space, Image, Typography, Button } from "antd";

export const TabsList = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const { Products } = useContext(ProductContext);

  const products = Products.filter(
    (item) => item.tabIndex === selectedTabIndex
  );

  const productsJSX = useMemo(() => {
    return products.map((item) => {
      return (
        <div
          style={{
            width: "45%",
            height: "auto",
            marginBottom: "2em",
            background: "white",
            border: "1px solid gray",
            borderRadius: "25px",
            padding: "1em",
          }}
        >
          <Space size={"large"} direction="horizontal">
            <div>
              <Image
                preview={false}
                width={100}
                src={item.image}
                alt={item.name}
              ></Image>
              <Typography.Text
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  margin: "1em",
                  marginTop: "2em",
                }}
              >
                ${item.price}
              </Typography.Text>
            </div>
            <div style={{ minWidth: "200px" }}>
              <h4 style={{ margin: 0 }}> {item.name}</h4>
              <Typography.Text style={{ margin: 0 }}>
                {item.description}
              </Typography.Text>
              <div>
                <Space style={{ marginTop: "1em" }}>
                  <Typography.Text>{item.available}-available</Typography.Text>
                  <Typography.Text>{item.sold}-sold</Typography.Text>
                </Space>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1em",
                  width: "70%",
                }}
              >
                <Button size="middle" shape="circle" type="primary">
                  +
                </Button>
                <Typography.Text>1</Typography.Text>
                <Button size="middle" shape="circle" type="primary">
                  -
                </Button>
              </div>
            </div>
          </Space>
        </div>
      );
    });
  }, [products]);

  return (
    <Tabs
      onSelect={(tabIndex) => setSelectedTabIndex(tabIndex)}
      selectedIndex={selectedTabIndex}
    >
      <TabList className="tabs-container">
        <Tab>Appetizers</Tab>
        <Tab>Dessert</Tab>
        <Tab>Bevaerages</Tab>
      </TabList>

      <TabPanel>
        <Card className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              margin: "2em",
              overflow: "auto",
              height: "100vh",
            }}
          >
            {productsJSX}
          </div>
        </Card>
      </TabPanel>

      <TabPanel>
        <Card className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              margin: "2em",
              overflow: "auto",
              height: "100vh",
            }}
          >
            {productsJSX}
          </div>
        </Card>
      </TabPanel>
      <TabPanel>
        <Card className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              margin: "2em",
              overflow: "auto",
              height: "100vh",
            }}
          >
            {productsJSX}
          </div>
        </Card>
      </TabPanel>
    </Tabs>
  );
};
