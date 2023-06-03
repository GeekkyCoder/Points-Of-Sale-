import { createContext, useEffect, useReducer } from "react";

import Products from "../../MOCK_DATA.json";

import { RemoveFromCart, addItemIntoCart, removeItemByQuantity } from "../../utils";

const Context = createContext();

const INITIAL_STATE = {
  productItems:Products,
  allOrders: JSON.parse(localStorage.getItem('orders')) || [],
  orderTotal:null
}

const productReducer = (state,action) => {
  const {type,payload} = action 

  switch(type){
    case "ADD_ITEM_INTO_CART":
      localStorage.setItem('orders', JSON.stringify(payload))
      return {
        ...state,
        allOrders:payload
      }
    case 'REMOVE_ITEM_FROM_CART':
      localStorage.setItem('orders', JSON.stringify(payload))
      return {
        ...state, 
        allOrders:payload
      } 
     case 'REMOVE_ITEM_BY_1':
      return {
        ...state, 
        allOrders:payload
      } 
    case 'UPDATE_CART_TOTAL':
      return {
        ...state, 
        orderTotal:payload
      }   

    default:
      return state  
  }
}

const ProductContext = ({ children }) => {

const [{allOrders,productItems,orderTotal},dispatch] = useReducer(productReducer,INITIAL_STATE)


useEffect(() => {
    const total = allOrders.reduce((accumulator, order) => {
          return  accumulator + order.quantity * order.price
    },0)
  
  updateCartTotal(total)

},[allOrders])


  const addToCart = (productToAdd) => {
    dispatch({
      type:'ADD_ITEM_INTO_CART',
      payload: addItemIntoCart(allOrders,productToAdd)
    })
  };

  const removeItemFromCart = (orderToRemove) => {
     dispatch({
      type:'REMOVE_ITEM_FROM_CART',
      payload: RemoveFromCart(allOrders,orderToRemove)
    })
  }

  const updateCartTotal = (payload) => {
    dispatch({
      type:"UPDATE_CART_TOTAL",
      payload: payload
    })
  }

  const removeItemBy1 = (order) => {
   dispatch({
    type:'REMOVE_ITEM_BY_1',
    payload:removeItemByQuantity(allOrders,order)
   })
  }

  const value = {
    productItems,
    allOrders,
    addToCart,
    removeItemFromCart,
    orderTotal,
    removeItemBy1
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ProductContext };
