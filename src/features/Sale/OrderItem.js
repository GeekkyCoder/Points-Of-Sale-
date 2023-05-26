import { Badge, Card, Typography, Tag } from "antd";

export const OrderItem = ({ order }) => {
  return (
    <>
      <Badge.Ribbon text={order.id}>
        <Card title={order.name} size="small" bordered={false}>
          <Typography.Text>3 items</Typography.Text>
          <div style={{ marginTop: "1em" }}>
            <Tag color="red" bordered={true}>
              cancelled
            </Tag>
          </div>
        </Card>
      </Badge.Ribbon>
    </>
  );
};
