export const capitalizeFirstLetter = (view) => {
  return view.charAt(0).toUpperCase() + view.slice(1);
};

export const addItemIntoCart = (orders, productToAdd) => {
  const orderExist = orders.find((order) => order.id === productToAdd.id);

  if (orderExist) {
    return orders.map((order) => {
      return order.id === productToAdd.id
        ? { ...order, quantity: order.quantity + 1 }
        : order;
    });
  }

  return [...orders, { ...productToAdd, quantity: 1 }];
};

export const RemoveFromCart = (orders, orderToRemove) => {
  const orderExist = orders.find((order) => order.id === orderToRemove.id);

  if (orderExist) {
    return orders.filter((order) => order.id !== orderExist.id);
  }
};
