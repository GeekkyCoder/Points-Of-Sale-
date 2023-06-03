import { message } from "antd";

export const capitalizeFirstLetter = (view) => {
  return view.charAt(0).toUpperCase() + view.slice(1);
};

export const addItemIntoCart = (orders, productToAdd) => {
  const orderExist = orders.find((order) => order.id === productToAdd.id);

  if (orderExist) {
    message.success("🎉 item added by 1");
    return orders.map((order) => {
      return order.id === productToAdd.id
        ? { ...order, quantity: order.quantity + 1 }
        : order;
    });
  }
  message.success("🎉 item added");
  return [...orders, { ...productToAdd, quantity: 1 }];
};

export const RemoveFromCart = (orders, orderToRemove) => {
  const orderExist = orders.find((order) => order.id === orderToRemove.id);

  if (orderExist) {
    message.warning("cart empty 💀");
    return orders.filter((order) => order.id !== orderExist.id);
  }
};

export const removeItemByQuantity = (orders, orderToDelete) => {
  const itemExist = orders.find((order) => order.id === orderToDelete.id);

  if (itemExist.quantity === 1) {
    message.warning("cart empty 💀");
    return orders.filter((order) => order.id !== orderToDelete.id);
  }

  message.warning("item removed by quantity 1");
  return orders.map((order) => {
    return order.id === orderToDelete.id
      ? { ...order, quantity: order.quantity - 1 }
      : order;
  });
};
