
import { Form, Input } from "antd";

export const CustomerForm = ({handleFinish}) => {
  return (
    <Form
      style={{
        maxWidth: 300,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="Customer Name"
        rules={[
          {
            required: true,
            message: "Please input Customer Name!",
          },
        ]}
      >
        <Input placeholder="Customer Name" />
      </Form.Item>

      <Form.Item
        name="Select Table"
        rules={[
          {
            required: true,
            message: "can not be empty",
          },
        ]}
      >
        <Input placeholder="Select Table" />
      </Form.Item>
    </Form>
  );
};
